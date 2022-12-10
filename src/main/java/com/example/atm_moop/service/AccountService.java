package com.example.atm_moop.service;


import com.example.atm_moop.domain.*;
import com.example.atm_moop.domain.enums.ACCOUNT_STATUS;
import com.example.atm_moop.dto.SavingPlanInputDTO;
import com.example.atm_moop.dto.TransactionalPlanInputDTO;
import com.example.atm_moop.exception.AccountStatusException;
import com.example.atm_moop.exception.ResourceNotFoundException;
import com.example.atm_moop.exception.RightsViolationException;
import com.example.atm_moop.repository.AccountRepository;
import com.example.atm_moop.repository.SavingAccountRepository;
import com.example.atm_moop.repository.TransactionalAccountRepository;
import lombok.RequiredArgsConstructor;
import org.javamoney.moneta.Money;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.server.ResponseStatusException;

import javax.money.MonetaryAmount;
import java.math.BigDecimal;
import java.sql.Timestamp;
import java.util.Date;
import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class AccountService {

    private final AccountRepository<Account> accountRepository;
    private final TransactionalAccountRepository transactionalAccountRepository;
    private final SavingAccountRepository savingAccountRepository;
    private final TransactionService transactionService;


    public List<Account> getAllUserAccounts(Long userId) {
        return accountRepository.findByUserId(userId);
    }

    public Account save(Account account) {
        return accountRepository.save(account);
    }

    public TransactionalAccount getTransactionalAccountById(Long accountId, Long userId) throws ResourceNotFoundException, RightsViolationException {
        TransactionalAccount acc = getResourceOrThrowException(transactionalAccountRepository.findById(accountId));
        confirmOwnedByUser(acc.getUser().getId(), userId);
        return acc;
    }

    public SavingAccount getSavingAccountById(Long accountId, Long userId) throws ResourceNotFoundException, RightsViolationException {
        SavingAccount acc = getResourceOrThrowException(savingAccountRepository.findById(accountId));
        confirmOwnedByUser(acc.getUser().getId(), userId);
        return acc;
    }

    public Account getAccountById(Long accountId, Long userId) throws ResourceNotFoundException, RightsViolationException {
        Account acc = getResourceOrThrowException(accountRepository.findById(accountId));
        confirmOwnedByUser(acc.getUser().getId(), userId);
        return acc;
    }

    public TransactionalAccount createTransactionalAccountFromPlan(TransactionalPlanInputDTO planInputDTO, User user, Card card) {
        TransactionalAccount fromPlan = TransactionalAccount.createFromPlan(planInputDTO.getPlan(), planInputDTO.getAccountName(), planInputDTO.getCurrencyUnitCode(), user, card);
        return transactionalAccountRepository.save(fromPlan);
    }

    public SavingAccount createSavingAccountFromPlan(SavingPlanInputDTO inputDTO, User user, Card card) {
        SavingAccount fromPlan = SavingAccount.createFromPlan(inputDTO.getPlan(), inputDTO.getAccountName(), inputDTO.getCurrencyUnitCode(), user, card);
        return savingAccountRepository.save(fromPlan);
    }

    @Transactional
    public SavingAccount fireAccumulatingSavingAccount(Long accountId, Long accountOwnerId) throws RightsViolationException, AccountStatusException, ResourceNotFoundException {
        SavingAccount account = AccountService.getAccountWithOkStatus(savingAccountRepository.findById(accountId));
        confirmOwnedByUser(account.getUser().getId(), accountOwnerId);
        if (account.getSavingAccountPlan() == SavingAccountPlan.PLAIN)
            throw new AccountStatusException("You must choose plan.");
        MonetaryAmount balance = account.getBalance();
        if (balance.isLessThan(Money.of(1, balance.getCurrency())))
            throw new AccountStatusException("You must have at least 1 money unit at your account.");
        account.applyPlanToAccount(account.getSavingAccountPlan());
        account.setAccountStatus(ACCOUNT_STATUS.ACCUMULATING);
        return savingAccountRepository.save(account);
    }

    @Transactional
    public SavingAccount terminateSavingContract(Long accountId, Long accountOwnerId) throws RightsViolationException, AccountStatusException, ResourceNotFoundException {
        SavingAccount account = AccountService.getResourceOrThrowException(savingAccountRepository.findById(accountId));
        confirmOwnedByUser(account.getUser().getId(), accountOwnerId);
        if (account.getSavingAccountPlan() == SavingAccountPlan.PLAIN || account.getAccountStatus() != ACCOUNT_STATUS.ACCUMULATING)
            throw new AccountStatusException("You don`t have any contract.");
        if (!Objects.equals(account.getPaymentStepsLeft(), account.getSavingAccountPlan().getInitialSteps())) {
            MonetaryAmount balance = account.getBalance();
            BigDecimal totalTransferAmount = transactionService.getAllTransferTransactionsByFromAccountAndStartTimeBetween(account, account.getAccumulateStartTime(), new Timestamp(new Date().getTime()))
                    .stream()
                    .map(transferTransaction -> transferTransaction.getAmount().getNumber().numberValue(BigDecimal.class))
                    .reduce(BigDecimal.ZERO, BigDecimal::add);
            balance = balance.subtract(Money.of(totalTransferAmount, balance.getCurrency()));
            account.setBalance(balance);
        }
        account.resetSavingPlanToPlain();
        return savingAccountRepository.save(account);
    }

    public static <T> T getResourceOrThrowException(Optional<T> optional) throws ResourceNotFoundException {
        if (optional.isEmpty())
            throw new ResourceNotFoundException("This resource is not found.");
        return optional.get();
    }


    public static <T extends Account> T getAccountWithOkStatus(Optional<T> optionalAccount) throws AccountStatusException, ResourceNotFoundException {
        if (optionalAccount.isEmpty())
            throw new ResourceNotFoundException("This account is not found.");
        T account = optionalAccount.get();
        switch (account.getAccountStatus()) {
            case FROZEN:
                throw new AccountStatusException("Your account is currently unavailable for operations with status: FROZEN.");
            case TERMINATED:
                throw new AccountStatusException("Your account has been TERMINATED.");
            case ACCUMULATING:
                throw new AccountStatusException("Your account already accumulating.");
            case OK:
                return account;
            default:
                throw new AccountStatusException("Your account cannot perform this operation right now.");
        }
    }

    public static void confirmOwnedByUser(Long accUserId, Long ownerId) throws RightsViolationException {
        if (!Objects.equals(accUserId, ownerId)) {
            throw new RightsViolationException("Account is not owned by you.");
        }
    }

    public static void confirmAccountsIsNotTheSame(Long accountSenderId, Long accountReceiverId) {
        if (Objects.equals(accountReceiverId, accountSenderId))
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "You cannot transfer from and to same account");
    }


}
