package com.example.atm_moop.service;

import com.example.atm_moop.domain.Account;
import com.example.atm_moop.domain.TransactionalAccount;

import java.util.List;
import java.util.Optional;

public interface AccountServiceI {
    List<Account> getAllUserAccounts(Long userId);

    Optional<TransactionalAccount> getTransactionalAccountById(Long accountId, String cardNumber);
}
