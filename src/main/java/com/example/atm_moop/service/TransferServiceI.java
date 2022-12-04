package com.example.atm_moop.service;

import com.example.atm_moop.domain.Card;
import com.example.atm_moop.domain.User;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.server.ResponseStatusException;

import java.math.BigDecimal;

public interface TransferServiceI {
    @Transactional
    void transferFromTransactionalToTransactional(User sender, Long accountSenderId, Long accountReceiverId, BigDecimal amount) throws ResponseStatusException;

    @Transactional
    void deposit(Card card, BigDecimal amount);

    @Transactional
    void withdraw(Card card, BigDecimal amount);
}
