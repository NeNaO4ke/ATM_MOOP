package com.example.atm_moop.config;

import com.example.atm_moop.domain.*;
import com.example.atm_moop.domain.enums.ACCOUNT_STATUS;
import com.example.atm_moop.domain.enums.ATM_STATUS;
import com.example.atm_moop.domain.enums.CARD_STATUS;
import com.example.atm_moop.domain.enums.USER_STATUS;
import com.example.atm_moop.exception.AccountStatusException;
import com.example.atm_moop.exception.ResourceNotFoundException;
import com.example.atm_moop.exception.RightsViolationException;
import com.example.atm_moop.repository.*;
import com.example.atm_moop.service.AccountService;
import com.example.atm_moop.service.CardService;
import com.example.atm_moop.service.TransferService;
import org.javamoney.moneta.Money;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Profile;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;
import java.math.BigDecimal;
import java.time.*;
import java.util.Date;
import java.util.List;
import java.util.Set;

@Component
@Profile("presentation")
public class DbDataInserter {

    @PostConstruct
    private void setup() throws AccountStatusException, RightsViolationException, ResourceNotFoundException {
        populate();
    }

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

        ATM atm1 = atmRepository.save(new ATM(null, "Khreschatyk 1 st.", ATM_STATUS.IDLE, null));
        ATM atm2 = atmRepository.save(new ATM(null, "Psa Patrona 14a st.", ATM_STATUS.IDLE, null));
        ATM atm3 = atmRepository.save(new ATM(null, "Mykoly Parasiuka 88/41 st.", ATM_STATUS.IDLE, null));

        bank1.setAtms(Set.of(atm1));
        bank2.setAtms(Set.of(atm1, atm2));
        bank3.setAtms(Set.of(atm1, atm2, atm3));
        bankRepository.saveAll(List.of(bank1, bank2, bank3));

        User roman = new User();
        roman.setFirstName("Roman");
        roman.setUserStatus(USER_STATUS.OK);

        User bohdan = new User();
        bohdan.setFirstName("Bohdan");
        bohdan.setUserStatus(USER_STATUS.OK);

        User patron = new User(null, "Pes", null, "Patron", java.sql.Date.valueOf(LocalDate.of(2019, Month.AUGUST, 26)), USER_STATUS.OK, null, null);
        User mykola = new User(null, "Mykola", "Olexandrovych", "Parasiuk", java.sql.Date.valueOf(LocalDate.of(1986, Month.DECEMBER, 19)), USER_STATUS.OK, null, null);

        roman = userRepository.save(roman);
        bohdan = userRepository.save(bohdan);
        mykola = userRepository.save(mykola);
        patron = userRepository.save(patron);

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

        Money romanMoney = Money.of(10000, "UAH");
        Money bohdanMoney = Money.of(300, "USD");
        TransactionalAccount romanAcc = new TransactionalAccount(null, ACCOUNT_STATUS.OK, "Checking acc for Roman", romanMoney, roman, cardRoman, true, true, BigDecimal.valueOf(100), BigDecimal.valueOf(5.5));
        TransactionalAccount bohdanAcc = new TransactionalAccount(null, ACCOUNT_STATUS.OK, "Checking acc Bohdan", bohdanMoney, bohdan, cardBohdan, false, true, null, null);


        TransactionalAccount patronAcc = TransactionalAccount.createFromPlan(TransactionalAccountPlan.MEDIUM, "Credit acc for Patron", "UAH", patron, cardPatron);
        patronAcc.setDefault(true);
        TransactionalAccount mykolaAcc = TransactionalAccount.createFromPlan(TransactionalAccountPlan.MEDIUM, "Mykola current account", "UAH", mykola, cardMykola);
        mykolaAcc.setDefault(true);
        TransactionalAccount mykolaUsdAcc = TransactionalAccount.createFromPlan(TransactionalAccountPlan.LIGHT, "Mykola current USD account", "USD", mykola, cardMykola);

        SavingAccount patronSavingAcc = SavingAccount.createFromPlan(SavingAccountPlan.LONG, "Patron`s saving acc", "UAH", patron, cardPatron);
        SavingAccount mykolaSavingAcc = SavingAccount.createFromPlan(SavingAccountPlan.STANDARD, "Mykola`s saving acc", "USD", mykola, cardMykola);

        romanAcc = genAccountRepository.save(romanAcc);
        bohdanAcc = genAccountRepository.save(bohdanAcc);
        patronAcc = genAccountRepository.save(patronAcc);
        mykolaAcc = genAccountRepository.save(mykolaAcc);

        patronSavingAcc = genAccountRepository.save(patronSavingAcc);
        transferService.transfer(patron.getId(), patronAcc.getId(), patronSavingAcc.getId(), BigDecimal.valueOf(3000));
        accountService.fireSavingContract(patronSavingAcc.getId(), patron.getId());
        transferService.transfer(patron.getId(), patronAcc.getId(), patronSavingAcc.getId(), BigDecimal.valueOf(400));

        mykolaUsdAcc = genAccountRepository.save(mykolaUsdAcc);
        genAccountRepository.save(mykolaSavingAcc);

        transferService.transfer(mykola.getId(), mykolaUsdAcc.getId(), mykolaSavingAcc.getId(), BigDecimal.valueOf(170));

        transferService.transfer(roman.getId(), romanAcc.getId(), mykolaAcc.getId(), BigDecimal.valueOf(666));

        transferService.transfer(patron.getId(), patronAcc.getId(), romanAcc.getId(), BigDecimal.valueOf(500));



        transferService.withdraw(cardMykola, BigDecimal.valueOf(1666));

        TransactionalAccount patronEuroAcc = TransactionalAccount.createFromPlan(TransactionalAccountPlan.LIGHT, "Credit EURO acc for Patron", "EUR", patron, cardPatron);
        patronEuroAcc = genAccountRepository.save(patronEuroAcc);
        transferService.transfer(bohdan.getId(), bohdanAcc.getId(), mykolaUsdAcc.getId(), BigDecimal.valueOf(300));

    //    Money conversion might take a long time and not so much currencies supported
    //    transferService.transferFromTransactional(patron.getId(), patronEuroAcc.getId(), mykolaSavingAcc.getId(), BigDecimal.valueOf(200));

    //    UAH conversion is not supported with default providers
    //    transferService.transferFromTransactional(patron.getId(), patronEuroAcc.getId(), romanAcc.getId(), BigDecimal.valueOf(100));

    }


}
