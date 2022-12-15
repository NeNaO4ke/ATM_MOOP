package com.example.atm_moop.service.interfaces;

import com.example.atm_moop.domain.*;
import com.example.atm_moop.dto.SavingPlanInputDTO;
import com.example.atm_moop.dto.TransactionalPlanInputDTO;
import com.example.atm_moop.exception.AccountStatusException;
import com.example.atm_moop.exception.ResourceNotFoundException;
import com.example.atm_moop.exception.RightsViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Objects;
import java.util.Optional;

public interface IAccountService {
    static <T> T getResourceOrThrowException(Optional<T> optional) throws ResourceNotFoundException {
        if (optional.isEmpty())
            throw new ResourceNotFoundException("This resource is not found.");
        return optional.get();
    }

    static <T extends Account> T getAccountWithOkStatus(Optional<T> optionalAccount) throws AccountStatusException, ResourceNotFoundException {
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

    static void confirmOwnedByUser(Long accUserId, Long ownerId) throws RightsViolationException {
        if (!Objects.equals(accUserId, ownerId)) {
            throw new RightsViolationException("Account is not owned by you.");
        }
    }

    static void confirmAccountsIsNotTheSame(Long accountSenderId, Long accountReceiverId) {
        if (Objects.equals(accountReceiverId, accountSenderId))
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "You cannot transfer from and to same account");
    }

    List<Account> getAllUserAccounts(Long userId);

    Account save(Account account);

    TransactionalAccount getTransactionalAccountById(Long accountId, Long userId) throws ResourceNotFoundException, RightsViolationException;

    SavingAccount getSavingAccountById(Long accountId, Long userId) throws ResourceNotFoundException, RightsViolationException;

    Account getAccountById(Long accountId, Long userId) throws ResourceNotFoundException, RightsViolationException;

    TransactionalAccount createTransactionalAccountFromPlan(TransactionalPlanInputDTO planInputDTO, User user, Card card);

    SavingAccount createSavingAccountFromPlan(SavingPlanInputDTO inputDTO, User user, Card card);

    @Transactional
    SavingAccount fireSavingContract(Long accountId, Long accountOwnerId) throws RightsViolationException, AccountStatusException, ResourceNotFoundException;

    @Transactional
    SavingAccount terminateSavingContract(Long accountId, Long accountOwnerId) throws RightsViolationException, AccountStatusException, ResourceNotFoundException;

    @Transactional
    SavingAccount changeSavingPlan(Long accountId, Long userId, SavingAccountPlan plan) throws AccountStatusException, ResourceNotFoundException, RightsViolationException;
}
