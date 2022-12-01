package com.example.atm_moop.service;


import com.example.atm_moop.domain.Account;
import com.example.atm_moop.domain.TransactionalAccount;
import com.example.atm_moop.domain.TransferTransaction;
import com.example.atm_moop.domain.User;
import com.example.atm_moop.domain.enums.*;
import com.example.atm_moop.repository.AccountRepository;
import com.example.atm_moop.repository.SavingAccountRepository;
import com.example.atm_moop.repository.TransactionalAccountRepository;
import com.example.atm_moop.repository.TransferTransactionRepository;
import lombok.RequiredArgsConstructor;
import org.javamoney.moneta.Money;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.server.ResponseStatusException;

import javax.money.CurrencyUnit;
import javax.money.MonetaryAmount;
import javax.money.convert.CurrencyConversion;
import javax.money.convert.MonetaryConversions;
import java.math.BigDecimal;
import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class AccountService {

    private final AccountRepository<Account> accountRepository;
    private final TransactionalAccountRepository transactionalAccountRepository;
    private final SavingAccountRepository savingAccountRepository;




    public List<Account> getAllUserAccounts(Long userId) {
        return accountRepository.findByUserId(userId);
    }

    public Optional<TransactionalAccount> getTransactionalAccountById(Long accountId, String cardNumber) {
        Optional<TransactionalAccount> account = transactionalAccountRepository.findById(accountId);
        if (account.isPresent()) {
            TransactionalAccount transactionalAccount = account.get();
            if (!Objects.equals(transactionalAccount.getCard().getNumber(), cardNumber))
                throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Trying to access account that is not associated with this card!");
        }
        return account;
    }



}
