package com.example.atm_moop.service;

import com.example.atm_moop.domain.Card;
import com.example.atm_moop.exception.AccountStatusException;
import com.example.atm_moop.exception.ResourceNotFoundException;
import com.example.atm_moop.exception.RightsViolationException;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.server.ResponseStatusException;

import java.math.BigDecimal;

public interface TransferServiceI {
    @Transactional
    void transferFromTransactional(Long userSenderId, Long accountSenderId, Long accountReceiverId, BigDecimal amount) throws ResponseStatusException, AccountStatusException, ResourceNotFoundException, RightsViolationException;

    @Transactional
    void deposit(Card card, BigDecimal amount);

    @Transactional
    void withdraw(Card card, BigDecimal amount);
}
