package com.example.atm_moop.service.interfaces;

import com.example.atm_moop.domain.Account;
import com.example.atm_moop.domain.Card;
import com.example.atm_moop.domain.TransferTransaction;
import com.example.atm_moop.exception.AccountStatusException;
import com.example.atm_moop.exception.ResourceNotFoundException;
import com.example.atm_moop.exception.RightsViolationException;
import org.springframework.data.util.Pair;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;

public interface ITransferService {
    @Transactional
    TransferTransaction transfer(Long userSenderId, Long accountSenderId, Long accountReceiverId, BigDecimal amount) throws AccountStatusException, ResourceNotFoundException, RightsViolationException;

    Pair<Account, Account> checkIfTransferAvailableAndGetAccounts(Long userSenderId, Long accountSenderId, Long accountReceiverId, BigDecimal amount) throws AccountStatusException, RightsViolationException, ResourceNotFoundException;

    @Transactional
    void deposit(Card card, BigDecimal amount) throws AccountStatusException, ResourceNotFoundException;

    @Transactional
    void withdraw(Card card, BigDecimal amount) throws AccountStatusException, ResourceNotFoundException;
}
