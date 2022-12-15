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
import com.example.atm_moop.service.interfaces.IAccountService;
import lombok.RequiredArgsConstructor;
import org.javamoney.moneta.Money;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.money.MonetaryAmount;
import java.math.BigDecimal;
import java.sql.Timestamp;
import java.util.Date;
import java.util.List;
import java.util.Objects;

@Service
@RequiredArgsConstructor
public class AccountService implements IAccountService {

    private final AccountRepository<Account> accountRepository;
    private final TransactionalAccountRepository transactionalAccountRepository;
    private final SavingAccountRepository savingAccountRepository;
    private final TransactionService transactionService;


    @Override
    public List<Account> getAllUserAccounts(Long userId) {
        return accountRepository.findByUserId(userId);
    }

    @Override
    public Account save(Account account) {
        return accountRepository.save(account);
    }

    @Override
    public TransactionalAccount getTransactionalAccountById(Long accountId, Long userId) throws ResourceNotFoundException, RightsViolationException {
        TransactionalAccount acc = IAccountService.getResourceOrThrowException(transactionalAccountRepository.findById(accountId));
        IAccountService.confirmOwnedByUser(acc.getUser().getId(), userId);
        return acc;
    }

    @Override
    public SavingAccount getSavingAccountById(Long accountId, Long userId) throws ResourceNotFoundException, RightsViolationException {
        SavingAccount acc = IAccountService.getResourceOrThrowException(savingAccountRepository.findById(accountId));
        IAccountService.confirmOwnedByUser(acc.getUser().getId(), userId);
        return acc;
    }

    @Override
    public Account getAccountById(Long accountId, Long userId) throws ResourceNotFoundException, RightsViolationException {
        Account acc = IAccountService.getResourceOrThrowException(accountRepository.findById(accountId));
        IAccountService.confirmOwnedByUser(acc.getUser().getId(), userId);
        return acc;
    }

    @Override
    public TransactionalAccount createTransactionalAccountFromPlan(TransactionalPlanInputDTO planInputDTO, User user, Card card) {
        TransactionalAccount fromPlan = TransactionalAccount.createFromPlan(planInputDTO.getPlan(), planInputDTO.getAccountName(), planInputDTO.getCurrencyUnitCode(), user, card);
        return transactionalAccountRepository.save(fromPlan);
    }

    @Override
    public SavingAccount createSavingAccountFromPlan(SavingPlanInputDTO inputDTO, User user, Card card) {
        SavingAccount fromPlan = SavingAccount.createFromPlan(inputDTO.getPlan(), inputDTO.getAccountName(), inputDTO.getCurrencyUnitCode(), user, card);
        return savingAccountRepository.save(fromPlan);
    }

    @Override
    @Transactional
    public SavingAccount fireSavingContract(Long accountId, Long accountOwnerId) throws RightsViolationException, AccountStatusException, ResourceNotFoundException {
        SavingAccount account = IAccountService.getAccountWithOkStatus(savingAccountRepository.findById(accountId));
        IAccountService.confirmOwnedByUser(account.getUser().getId(), accountOwnerId);
        if (account.getSavingAccountPlan() == SavingAccountPlan.PLAIN)
            throw new AccountStatusException("You must choose plan.");
        MonetaryAmount balance = account.getBalance();
        if (balance.isLessThan(Money.of(1, balance.getCurrency())))
            throw new AccountStatusException("You must have at least 1 money unit at your account.");
        account.applyPlanToAccount(account.getSavingAccountPlan());
        account.setAccountStatus(ACCOUNT_STATUS.ACCUMULATING);
        return savingAccountRepository.save(account);
    }

    @Override
    @Transactional
    public SavingAccount terminateSavingContract(Long accountId, Long accountOwnerId) throws RightsViolationException, AccountStatusException, ResourceNotFoundException {
        SavingAccount account = IAccountService.getResourceOrThrowException(savingAccountRepository.findById(accountId));
        IAccountService.confirmOwnedByUser(account.getUser().getId(), accountOwnerId);
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

    @Override
    @Transactional
    public SavingAccount changeSavingPlan(Long accountId, Long userId, SavingAccountPlan plan) throws AccountStatusException, ResourceNotFoundException, RightsViolationException {
        SavingAccount account = IAccountService.getAccountWithOkStatus(savingAccountRepository.findById(accountId));
        IAccountService.confirmOwnedByUser(account.getUser().getId(), userId);
        if(account.getSavingAccountPlan() == plan)
            throw new AccountStatusException("New plan mut not match previous.");
        account.setSavingAccountPlan(plan);
        return savingAccountRepository.save(account);
    }


}
