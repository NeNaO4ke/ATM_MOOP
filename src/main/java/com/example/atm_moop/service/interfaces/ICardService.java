package com.example.atm_moop.service.interfaces;

import com.example.atm_moop.domain.Bank;
import com.example.atm_moop.domain.Card;
import com.example.atm_moop.domain.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

import javax.transaction.Transactional;
import java.util.Optional;

public interface ICardService {
    Optional<Card> getCardByNumber(String number);

    void createCard(Bank bank, User user);

    void changePin(Card card, String newPin);

    boolean blockCardByNumber(String number);

    UserDetails loadUserByUsername(String username) throws UsernameNotFoundException;

    @Transactional
    void verifyAtmSupportBank(String cardNumber, Long atmId);
}
