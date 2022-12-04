package com.example.atm_moop.service;

import com.example.atm_moop.domain.*;
import com.example.atm_moop.domain.enums.TRANSACTION_STATUS;
import com.example.atm_moop.domain.enums.TRANSACTION_TYPE;
import com.example.atm_moop.domain.enums.USER_STATUS;
import com.example.atm_moop.repository.AccountRepository;
import com.example.atm_moop.repository.TransactionalAccountRepository;
import com.example.atm_moop.repository.TransferTransactionRepository;
import lombok.RequiredArgsConstructor;
import org.javamoney.moneta.Money;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.server.ResponseStatusException;

import javax.money.CurrencyUnit;
import javax.money.MonetaryAmount;
import javax.money.convert.CurrencyConversion;
import javax.money.convert.MonetaryConversions;
import java.math.BigDecimal;
import java.math.RoundingMode;
import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class TransferService implements TransferServiceI {

    private final AccountRepository<Account> accountRepository;
    private final TransactionalAccountRepository transactionalAccountRepository;

    private final TransferTransactionRepository transferTransactionRepository;


    @Override
    @Transactional
    public void transferFromTransactionalToTransactional(User sender, Long accountSenderId, Long accountReceiverId, BigDecimal amount) throws ResponseStatusException {

        if (Objects.equals(accountReceiverId, accountSenderId))
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "You cannot transfer from and to same account");
        if (sender.getUserStatus() != USER_STATUS.OK)
            throw new ResponseStatusException(HttpStatus.FORBIDDEN, "You has cannot use any operations right now. Refer to closest bank branch.");

        TransactionalAccount receiverAcc = getTransactionalAccount(transactionalAccountRepository.findAccountByIdWithUser(accountReceiverId), "This account does not exist.", "This account cannot accept transactions right now.", "This account has been terminated.");

        TransactionalAccount senderAcc = getTransactionalAccount(transactionalAccountRepository.findById(accountSenderId), "Your account does not exist.", "Your account cannot send transactions right now.", "Your account has been terminated.");

        MonetaryAmount receiverAccBalance = receiverAcc.getBalance();
        MonetaryAmount senderAccBalance = senderAcc.getBalance();


        CurrencyUnit senderCurrency = senderAccBalance.getCurrency();

        Money senderTransferringAmount = Money.of(amount, senderCurrency);
        if (!senderAccBalance.isGreaterThan(senderTransferringAmount)) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Your cannot transfer more than you have right now...");
        }

        CurrencyUnit receiverCurrency = receiverAccBalance.getCurrency();

        Money receiverTransferringAmount = senderTransferringAmount;

        if (receiverCurrency != senderCurrency) {
            CurrencyConversion targetCurrency = MonetaryConversions.getConversion(receiverCurrency);
            receiverTransferringAmount = senderTransferringAmount.with(targetCurrency);
        }

        senderTransferringAmount = applyFeeIfNecessary(senderAcc, senderAccBalance, senderCurrency, senderTransferringAmount);


        MonetaryAmount newSenderBalance = senderAccBalance.subtract(senderTransferringAmount);
        MonetaryAmount newReceiverBalance = receiverAccBalance.add(receiverTransferringAmount);

        senderAcc.setBalance(newSenderBalance);
        receiverAcc.setBalance(newReceiverBalance);

        transactionalAccountRepository.saveAll(List.of(senderAcc, receiverAcc));

        TransferTransaction transferTransaction = TransferTransaction.createTransferTransaction(TRANSACTION_TYPE.TRANSFERRING, senderTransferringAmount, senderAcc, receiverAcc);
        transferTransaction.setTransactionStatus(TRANSACTION_STATUS.COMMITTED);
        transferTransactionRepository.save(transferTransaction);


    }

    private TransactionalAccount getTransactionalAccount(Optional<TransactionalAccount> transactionalAccountRepository, String reason, String reason1, String reason2) {

        if (transactionalAccountRepository.isEmpty())
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, reason);
        TransactionalAccount account = transactionalAccountRepository.get();


        switch (account.getAccountStatus()) {
            case FROZEN:
                throw new ResponseStatusException(HttpStatus.BAD_REQUEST, reason1);
            case TERMINATED:
                throw new ResponseStatusException(HttpStatus.BAD_REQUEST, reason2);
            default:
                break;
        }
        return account;
    }

    private Money applyFeeIfNecessary(TransactionalAccount senderAcc, MonetaryAmount senderAccBalance, CurrencyUnit senderCurrency, Money senderTransferringAmount) {
        if (senderAcc.isLendingAvailable()) {
            Money credit = Money.of(senderAcc.getCreditMoneyAmount(), senderCurrency);
            if (senderAccBalance.subtract(senderTransferringAmount).isLessThan(credit)) {
                Money subtract = senderTransferringAmount;
                if(senderAccBalance.isGreaterThan(credit))
                    subtract = credit.subtract(senderAccBalance.subtract(senderTransferringAmount));
                Money senderCreditFee = subtract.multiply(senderAcc.getLandingRate().divide(BigDecimal.valueOf(100), 7, RoundingMode.HALF_DOWN));
                senderTransferringAmount = senderTransferringAmount.add(senderCreditFee);
                if (!senderAccBalance.isGreaterThan(senderTransferringAmount)) {
                    throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Your cannot transfer more than you have right now...");
                }
            }
        }
        return senderTransferringAmount;
    }

    @Override
    @Transactional
    public void deposit(Card card, BigDecimal amount) {
        TransactionalAccount senderAcc = getCardDefaultTransactionalAccount(card);

        MonetaryAmount balance = senderAcc.getBalance();
        Money transferringAmount = Money.of(amount, balance.getCurrency());
        senderAcc.setBalance(balance.add(transferringAmount));
        transactionalAccountRepository.save(senderAcc);
        TransferTransaction transferTransaction = TransferTransaction.createTransferTransaction(TRANSACTION_TYPE.DEPOSIT, transferringAmount, senderAcc, senderAcc);
        transferTransaction.setTransactionStatus(TRANSACTION_STATUS.COMMITTED);
        transferTransactionRepository.save(transferTransaction);

    }

    @Override
    @Transactional
    public void withdraw(Card card, BigDecimal amount) {
        TransactionalAccount senderAcc = getCardDefaultTransactionalAccount(card);

        MonetaryAmount balance = senderAcc.getBalance();
        Money transferringAmount = Money.of(amount, balance.getCurrency());

        transferringAmount = applyFeeIfNecessary(senderAcc, balance, balance.getCurrency(), transferringAmount);
        senderAcc.setBalance(balance.subtract(transferringAmount));

        transactionalAccountRepository.save(senderAcc);
        TransferTransaction transferTransaction = TransferTransaction.createTransferTransaction(TRANSACTION_TYPE.WITHDRAWAL, transferringAmount, senderAcc, senderAcc);
        transferTransaction.setTransactionStatus(TRANSACTION_STATUS.COMMITTED);
        transferTransactionRepository.save(transferTransaction);

    }

    private TransactionalAccount getCardDefaultTransactionalAccount(Card card) {
        if (card.getUser().getUserStatus() != USER_STATUS.OK)
            throw new ResponseStatusException(HttpStatus.FORBIDDEN, "This user currently cannot make this operation");
        List<TransactionalAccount> result = transactionalAccountRepository.findTransactionalAccountByCardAndDefaultIsTrue(card);
        if (result.isEmpty())
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "This account does not exist.");
        TransactionalAccount account = result.get(0);

        switch (account.getAccountStatus()) {
            case FROZEN:
                throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "This account is temporarily frozen.");
            case TERMINATED:
                throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "This account has been terminated.");
            default:
                break;
        }
        return account;
    }


}
