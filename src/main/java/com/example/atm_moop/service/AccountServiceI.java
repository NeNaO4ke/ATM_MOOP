package com.example.atm_moop.service;

import com.example.atm_moop.domain.Account;
import com.example.atm_moop.domain.Card;
import com.example.atm_moop.domain.TransactionalAccount;
import com.example.atm_moop.domain.User;
import com.example.atm_moop.dto.TransactionalPlanInputDTO;
import com.example.atm_moop.exception.ResourceNotFoundException;

import java.util.List;
import java.util.Optional;

public interface AccountServiceI {
    List<Account> getAllUserAccounts(Long userId);

    Optional<TransactionalAccount> getTransactionalAccountById(Long accountId, String cardNumber) throws ResourceNotFoundException;

   TransactionalAccount createTransactionalAccountFromPlan(TransactionalPlanInputDTO planInputDTO, User user, Card card);


}
