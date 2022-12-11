package com.example.atm_moop;

import com.example.atm_moop.domain.*;
import com.example.atm_moop.domain.enums.*;
import com.example.atm_moop.repository.*;
import com.example.atm_moop.service.CardService;
import org.javamoney.moneta.Money;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

import javax.annotation.PostConstruct;
import java.math.BigDecimal;
import java.time.Instant;
import java.time.Period;
import java.time.ZoneId;
import java.util.Date;
import java.util.Set;

@SpringBootApplication
public class AtmMoopApplication {

    public static void main(String[] args) {
        SpringApplication.run(AtmMoopApplication.class, args);
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
    private BankRepository bankRepository;
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

    @PostConstruct
    public void postConstruct() {
        Bank bank1 = new Bank();
        bank1.setName("9 vbyv kozu kulakom");
        bank1 = bankRepository.save(bank1);
        Bank bank2 = bankRepository.save(new Bank(null, "Bank number2", null));

        ATM atm1 = new ATM();
        atm1.setAtmStatus(ATM_STATUS.IDLE);
        atm1.setAddress("Street numero uno");
        atm1 = atmRepository.save(atm1);
        ATM atm2 = new ATM();
        atm2.setAtmStatus(ATM_STATUS.IDLE);
        atm2.setAddress("Street numero dos");
        atm2 = atmRepository.save(atm2);



        bank1.setAtms(Set.of(atm1,atm2));
        bank2.setAtms(Set.of(atm2));
        bank1 = bankRepository.save(bank1);
        bank2 = bankRepository.save(bank2);

        User roman = new User();
        roman.setFirstName("Roman");
        roman.setUserStatus(USER_STATUS.OK);
        roman.setRole(Set.of(USER_ROLE.ROLE_USER));

        User bohdan = new User();
        bohdan.setFirstName("Bohdan");
        bohdan.setUserStatus(USER_STATUS.OK);

        roman = userRepository.save(roman);
        bohdan = userRepository.save(bohdan);

        //     cardService.createCard(bank1, roman);
        //     cardService.createCard(bank1, bohdan);

        Instant nowPlusYear = new Date().toInstant()
                .atZone(ZoneId.systemDefault())
                .plus(Period.ofYears(1))
                .toInstant();
        Date expiryDate = Date.from(nowPlusYear);
        Card cardRoman = new Card("2440735783328557","5384", expiryDate, "111", CARD_STATUS.OK, roman, bank1);
        Card cardBohdan = new Card("2711080501813222","1111", expiryDate, "111", CARD_STATUS.OK, bohdan, bank2);
        cardRoman = cardRepository.save(cardRoman);
        cardBohdan = cardRepository.save(cardBohdan);

        Money romanMoney = Money.of(10000, "USD");
        Money bohdanMoney = Money.of(150, "USD");
        TransactionalAccount transactionalAccountRoman = new TransactionalAccount(null, ACCOUNT_STATUS.OK, "Checking acc for Roman", romanMoney, roman, cardRoman, true, true, BigDecimal.valueOf(100), BigDecimal.valueOf(5.5));
        TransactionalAccount transactionalAccountBohdan = new TransactionalAccount(null, ACCOUNT_STATUS.OK, "Checking acc Bohdan", bohdanMoney, bohdan, cardBohdan, false, true, null, null);


        genAccountRepository.save(transactionalAccountRoman);
        genAccountRepository.save(transactionalAccountBohdan);

    }

}
