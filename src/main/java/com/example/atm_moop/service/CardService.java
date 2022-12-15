package com.example.atm_moop.service;


import com.example.atm_moop.domain.*;
import com.example.atm_moop.domain.enums.CARD_STATUS;
import com.example.atm_moop.repository.ATMRepository;
import com.example.atm_moop.repository.CardRepository;
import com.example.atm_moop.service.interfaces.ICardService;
import com.example.atm_moop.util.CardType;
import com.example.atm_moop.util.PaymentCardGeneratorImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.server.ResponseStatusException;

import javax.transaction.Transactional;
import java.time.Instant;
import java.time.Period;
import java.time.ZoneId;
import java.util.*;

@Service("cardService")
@RequiredArgsConstructor
public class CardService implements UserDetailsService, ICardService {

    private final CardRepository cardRepository;
    private final ATMRepository atmRepository;
    private final PaymentCardGeneratorImpl paymentCardGenerator;



    @Override
    public Optional<Card> getCardByNumber(String number) {
        return cardRepository.findById(number);
    }


    @Override
    public void createCard(Bank bank, User user) {
        String cardNumber = paymentCardGenerator.generateByCardType(CardType.MASTERCARD);

        StringBuilder pin = new StringBuilder();

        for (int i = 0; i < 4; i++) {
            pin.append(new Random().nextInt(10));
        }

        StringBuilder cvv = new StringBuilder();

        for (int i = 0; i < 3; i++) {
            cvv.append(new Random().nextInt(10));
        }

        Instant nowPlusYear = new Date().toInstant()
                .atZone(ZoneId.systemDefault())
                .plus(Period.ofYears(1))
                .toInstant();


        Date expiryDate = Date.from(nowPlusYear);
        Card card = new Card(cardNumber, pin.toString(), expiryDate, cvv.toString(), CARD_STATUS.OK, user, bank);
        cardRepository.save(card);
    }

    @Override
    public void changePin(Card card, String newPin) {
        if (!newPin.matches("\\d+") || newPin.length() != 4)
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Pin code is invalid! Must be exact 4 digits.");
        if (Objects.equals(newPin, card.getPin()))
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Your new and previous pin code should not match.");
        cardRepository.updatePinByNumber(newPin, card.getNumber());
    }

    @Override
    public boolean blockCardByNumber(String number) {
        int updatedRows = cardRepository.updateCardStatusByNumber(CARD_STATUS.BLOCKED, number);
        if(updatedRows == 0)
            throw new ResponseStatusException(HttpStatus.UNAUTHORIZED, "Card blocking failed!");
        return true;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

        String[] usernameAndDomain = StringUtils.split(
                username, "\u2028");
        if (usernameAndDomain == null || usernameAndDomain.length != 2 || !StringUtils.hasText(usernameAndDomain[0]) || !StringUtils.hasText(usernameAndDomain[1])) {
            throw new UsernameNotFoundException("Username and domain must be provided");
        }

        Optional<Card> optionalCard = cardRepository.findCardBankUserDetails(usernameAndDomain[0]);

        if (optionalCard.isEmpty()) {
            throw new UsernameNotFoundException("Such card is not found");
        }

        Optional<ATM> atm = atmRepository.findById(Long.valueOf(usernameAndDomain[1]));

        if (atm.isEmpty()) {
            throw new UsernameNotFoundException("Such atm is not found");
        }

        Card card = optionalCard.get();
        Set<Bank> banks = atm.get().getBanks();

        if (!banks.contains(card.getBank())) {
            throw new UsernameNotFoundException("This ATM does not have support of given bank card");
        }

        return new CardAtmUserDetails(card, atm.get());
    }

    @Override
    @Transactional
    public void verifyAtmSupportBank(String cardNumber, Long atmId) {
        Optional<Card> optionalCard = cardRepository.findCardWithBankByID(cardNumber);
        if (optionalCard.isEmpty())
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Card not found!");
        Optional<ATM> optionalATM = atmRepository.findById(atmId);
        if (optionalATM.isEmpty())
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Your atm does not exist...");

        boolean contains = optionalATM.get().getBanks().contains(optionalCard.get().getBank());
        if (!contains)
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "This card is not supported by this ATM");
    }
}
