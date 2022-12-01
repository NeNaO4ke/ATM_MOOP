package com.example.atm_moop;

import com.example.atm_moop.domain.*;
import com.example.atm_moop.domain.enums.*;
import com.example.atm_moop.repository.*;
import com.example.atm_moop.service.CardService;
import org.javamoney.moneta.Money;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import javax.annotation.PostConstruct;
import java.math.BigDecimal;
import java.time.Instant;
import java.time.Period;
import java.time.ZoneId;
import java.util.Date;
import java.util.List;
import java.util.Optional;
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

    @PostConstruct
    private void postConstruct() {
    /*    Bank bank = new Bank();
        bank.setName("Shukhliada");
        Bank bank1 = bankRepository.save(bank);

        ATM atm = new ATM();
        atm.setAtmStatus(ATM_STATUS.IDLE);
        //  atm.setBanks(Set.of(bank1));
        atmRepository.save(atm);

        Optional<ATM> atm1 = atmRepository.findById(1L);

        Optional<Bank> bank2 = bankRepository.findById(1L);

        bank2.get().setAtms(Set.of(atm1.get()));
        bankRepository.save(bank2.get());

        User user = new User();
        user.setFirstName("Roman");
        user.setUserStatus(USER_STATUS.OK);

        User user1 = new User();
        user.setFirstName("Bohdan");
        user.setUserStatus(USER_STATUS.OK);

        userRepository.save(user);
        userRepository.save(user1);

        Bank shukhliada = bankRepository.findById(1L).get();
        User roman = userRepository.findById(1L).get();
        User bohdan = userRepository.findById(2L).get();

        cardService.createCard(shukhliada, roman);
        cardService.createCard(shukhliada, bohdan);

        Instant nowPlusYear = new Date().toInstant()
                .atZone(ZoneId.systemDefault())
                .plus(Period.ofYears(1))
                .toInstant();
        Date expiryDate = Date.from(nowPlusYear);
        Card cardRoman = new Card("2440735783328557","5384", expiryDate, "111", CARD_STATUS.OK, roman, shukhliada);
        Card cardBohdan = new Card("2711080501813222","1111", expiryDate, "111", CARD_STATUS.OK, bohdan, shukhliada);
        cardRepository.save(cardRoman);
        cardRepository.save(cardBohdan);

        Money romanMoney = Money.of(100, "USD");
        Money bohdanMoney = Money.of(50, "USD");
        TransactionalAccount transactionalAccountRoman = new TransactionalAccount(null, ACCOUNT_STATUS.OK, "Checking acc for Roman", romanMoney, roman, cardRoman, false);
        TransactionalAccount transactionalAccountBohdan = new TransactionalAccount(null, ACCOUNT_STATUS.OK, "Checking acc Bohdan", bohdanMoney, roman, cardRoman, false);
        SavingAccount savingAccount = new SavingAccount(null, ACCOUNT_STATUS.OK, "Saving acc", romanMoney, roman, cardRoman, BigDecimal.ONE);

        TransferTransaction transferTransaction = TransferTransaction.createTransferTransaction(TRANSACTION_TYPE.TRANSFERRING, Money.of(12, "USD"), transactionalAccountRoman, savingAccount);
        RegularTransaction regularTransaction = RegularTransaction.createRegularTransaction(TRANSACTION_TYPE.TRANSFERRING, Money.of(10, "USD"), savingAccount, transactionalAccountRoman, Period.ofDays(3));


        genAccountRepository.save(transactionalAccountRoman);
        genAccountRepository.save(transactionalAccountBohdan);
        savingAccountRepository.save(savingAccount);


        transferTransactionTransactionRepository.save(transferTransaction);
        regularTransactionTransactionRepository.save(regularTransaction);*/

    }

}
