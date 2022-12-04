package com.example.atm_moop.service;

import com.example.atm_moop.domain.Bank;
import com.example.atm_moop.domain.Card;
import com.example.atm_moop.domain.User;

import javax.transaction.Transactional;
import java.util.Optional;

public interface CardServiceI {
    Optional<Card> getCardByNumber(String number);

    void createCard(Bank bank, User user);

    void changePin(Card card, String newPin);

    boolean blockCardByNumber(String number) throws Exception;

    @Transactional
    void verifyAtmSupportBank(String cardNumber, Long atmId);
}
