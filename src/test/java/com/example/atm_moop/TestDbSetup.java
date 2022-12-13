package com.example.atm_moop;


import com.example.atm_moop.domain.*;
import com.example.atm_moop.domain.enums.*;
import com.example.atm_moop.exception.AccountStatusException;
import com.example.atm_moop.exception.ResourceNotFoundException;
import com.example.atm_moop.exception.RightsViolationException;
import com.example.atm_moop.repository.*;
import com.example.atm_moop.service.AccountService;
import com.example.atm_moop.service.CardService;
import com.example.atm_moop.service.TransferService;
import org.javamoney.moneta.Money;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.test.context.ActiveProfiles;

import java.math.BigDecimal;
import java.time.*;
import java.util.Date;
import java.util.Set;

@Component
@ActiveProfiles("test")
public class TestDbSetup {

    @Autowired
    AccountRepository<Account> genAccountRepository;
    @Autowired
    AccountRepository<SavingAccount> savAccountRepository;
    @Autowired
    TransactionRepository<TransferTransaction> transferTransactionTransactionRepository;

    @Autowired
    TransactionRepository<RegularTransaction> regularTransactionTransactionRepository;
    @Autowired
    BankRepository bankRepository;
    @Autowired
    ATMRepository atmRepository;
    @Autowired
    UserRepository userRepository;
    @Autowired
    CardRepository cardRepository;
    @Autowired
    SavingAccountRepository savingAccountRepository;

    @Autowired
    CardService cardService;

    @Autowired
    AccountService accountService;

    @Autowired
    TransferService transferService;

    public void populate() throws AccountStatusException, RightsViolationException, ResourceNotFoundException {
        Bank bank1 = bankRepository.save(new Bank(null, "9 vbyv kozu kulakom", null));
        Bank bank2 = bankRepository.save(new Bank(null, "Ecofascism", null));
        Bank bank3 = bankRepository.save(new Bank(null, "Patron", null));

        ATM atm1 = atmRepository.save(new ATM(null, "Khreschatyk 1 st.", ATM_STATUS.IDLE, Set.of(bank3, bank2, bank1)));
        ATM atm2 = atmRepository.save(new ATM(null, "Psa Patrona 14a st.", ATM_STATUS.IDLE, Set.of(bank3, bank2)));
        ATM atm3 = atmRepository.save(new ATM(null, "Mykoly Parasiuka 88/41 st.", ATM_STATUS.IDLE, Set.of(bank3)));

        User roman = new User();
        roman.setFirstName("Roman");
        roman.setUserStatus(USER_STATUS.OK);

        User bohdan = new User();
        bohdan.setFirstName("Bohdan");
        bohdan.setUserStatus(USER_STATUS.OK);

        User patron = new User(null, "Pes", null, "Patron", java.sql.Date.valueOf(LocalDate.of(2019, Month.AUGUST, 26)), USER_STATUS.OK, null, null);
        User mykola = new User(null, "Mykola", "Olexandrovych", "Parasiuk", java.sql.Date.valueOf(LocalDate.of(1986, Month.DECEMBER, 19)), USER_STATUS.OK, null, null);

        mykola = userRepository.save(mykola);
        patron = userRepository.save(patron);
        roman = userRepository.save(roman);
        bohdan = userRepository.save(bohdan);

        Instant nowPlusYear = new Date().toInstant()
                .atZone(ZoneId.systemDefault())
                .plus(Period.ofYears(1))
                .toInstant();
        Date expiryDate = Date.from(nowPlusYear);
        Card cardRoman = new Card("2440735783328557", "5384", expiryDate, "740", CARD_STATUS.OK, roman, bank1);
        Card cardBohdan = new Card("2711080501813222", "1111", expiryDate, "413", CARD_STATUS.OK, bohdan, bank2);
        Card cardPatron = new Card("5169162679576631", "6969", expiryDate, "666", CARD_STATUS.OK, patron, bank3);
        Card cardMykola = new Card("5169189283112248", "1488", expiryDate, "919", CARD_STATUS.OK, mykola, bank3);
        cardRoman = cardRepository.save(cardRoman);
        cardBohdan = cardRepository.save(cardBohdan);
        cardPatron = cardRepository.save(cardPatron);
        cardMykola = cardRepository.save(cardMykola);

        Money romanMoney = Money.of(10000, "USD");
        Money bohdanMoney = Money.of(300, "USD");
        TransactionalAccount romanAcc = new TransactionalAccount(null, ACCOUNT_STATUS.OK, "Checking acc for Roman", romanMoney, roman, cardRoman, true, true, BigDecimal.valueOf(100), BigDecimal.valueOf(5.5));
        TransactionalAccount bohdanAcc = new TransactionalAccount(null, ACCOUNT_STATUS.OK, "Checking acc Bohdan", bohdanMoney, bohdan, cardBohdan, false, true, null, null);


        TransactionalAccount patronAcc = TransactionalAccount.createFromPlan(TransactionalAccountPlan.MEDIUM, "Credit acc for Patron", "UAH", patron, cardPatron);
        patronAcc.setDefault(true);
        TransactionalAccount mykolaAcc = TransactionalAccount.createFromPlan(TransactionalAccountPlan.MEDIUM, "Mykola current account", "UAH", mykola, cardMykola);
        mykolaAcc.setDefault(true);

        SavingAccount patronSavingAcc = SavingAccount.createFromPlan(SavingAccountPlan.LONG, "Patron`s saving acc", "UAH", patron, cardPatron);
        SavingAccount mykolaSavingAcc = SavingAccount.createFromPlan(SavingAccountPlan.STANDARD, "Mykola`s saving acc", "USD", patron, cardPatron);

        patronAcc = genAccountRepository.save(patronAcc);
        mykolaAcc = genAccountRepository.save(mykolaAcc);
        romanAcc = genAccountRepository.save(romanAcc);
        bohdanAcc = genAccountRepository.save(bohdanAcc);

        patronSavingAcc = genAccountRepository.save(patronSavingAcc);
        accountService.fireAccumulatingSavingAccount(patronSavingAcc.getId(), patron.getId());

        genAccountRepository.save(mykolaSavingAcc);

        transferService.transfer(bohdan.getId(), bohdanAcc.getId(), romanAcc.getId(), BigDecimal.valueOf(15.60));
        transferService.transfer(roman.getId(), romanAcc.getId(), patronSavingAcc.getId(), BigDecimal.valueOf(666));

    }

}
