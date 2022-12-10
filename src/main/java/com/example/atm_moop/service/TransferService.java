package com.example.atm_moop.service;

import com.example.atm_moop.domain.*;
import com.example.atm_moop.domain.enums.TRANSACTION_STATUS;
import com.example.atm_moop.domain.enums.TRANSACTION_TYPE;
import com.example.atm_moop.exception.AccountStatusException;
import com.example.atm_moop.exception.ResourceNotFoundException;
import com.example.atm_moop.exception.RightsViolationException;
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

@Service
@RequiredArgsConstructor
public class TransferService {

    private final TransactionalAccountRepository transactionalAccountRepository;

    private final AccountRepository<Account> accountRepository;

    private final TransferTransactionRepository transferTransactionRepository;


    @Transactional
    public TransferTransaction transferFromTransactional(Long userSenderId, Long accountSenderId, Long accountReceiverId, BigDecimal amount) throws AccountStatusException, ResourceNotFoundException, RightsViolationException {

        AccountService.confirmAccountsIsNotTheSame(accountSenderId, accountReceiverId);

        TransactionalAccount senderAcc = AccountService.getAccountWithOkStatus(transactionalAccountRepository.findById(accountSenderId));
        AccountService.confirmOwnedByUser(userSenderId, senderAcc.getUser().getId());
        Account receiverAcc = AccountService.getAccountWithOkStatus(accountRepository.findByIdWithUser(accountReceiverId));


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

        accountRepository.saveAll(List.of(senderAcc, receiverAcc));

        TransferTransaction transferTransaction = TransferTransaction.createTransferTransaction(TRANSACTION_TYPE.TRANSFERRING, senderTransferringAmount, senderAcc, receiverAcc);
        transferTransaction.setTransactionStatus(TRANSACTION_STATUS.COMMITTED);
        return transferTransactionRepository.save(transferTransaction);


    }





    private Money applyFeeIfNecessary(TransactionalAccount senderAcc, MonetaryAmount senderAccBalance, CurrencyUnit senderCurrency, Money senderTransferringAmount) {
        if (senderAcc.isLendingAvailable()) {
            Money credit = Money.of(senderAcc.getCreditMoneyAmount(), senderCurrency);
            if (senderAccBalance.subtract(senderTransferringAmount).isLessThan(credit)) {
                Money subtract = senderTransferringAmount;
                if(senderAccBalance.isGreaterThan(credit))
                    subtract = credit.subtract(senderAccBalance.subtract(senderTransferringAmount));
                Money senderCreditFee = subtract.multiply(senderAcc.getLendingRate().divide(BigDecimal.valueOf(100), 7, RoundingMode.HALF_DOWN));
                senderTransferringAmount = senderTransferringAmount.add(senderCreditFee);
                if (!senderAccBalance.isGreaterThan(senderTransferringAmount)) {
                    throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Your cannot transfer more than you have right now...");
                }
            }
        }
        return senderTransferringAmount;
    }

    @Transactional
    public void deposit(Card card, BigDecimal amount) {
        TransactionalAccount senderAcc;
        try {
            senderAcc = getCardDefaultTransactionalAccount(card);
        } catch (AccountStatusException e) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, e.getMessage());
        } catch (ResourceNotFoundException e) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, e.getMessage());
        }

        MonetaryAmount balance = senderAcc.getBalance();
        Money transferringAmount = Money.of(amount, balance.getCurrency());
        senderAcc.setBalance(balance.add(transferringAmount));
        transactionalAccountRepository.save(senderAcc);
        TransferTransaction transferTransaction = TransferTransaction.createTransferTransaction(TRANSACTION_TYPE.DEPOSIT, transferringAmount, senderAcc, senderAcc);
        transferTransaction.setTransactionStatus(TRANSACTION_STATUS.COMMITTED);
        transferTransactionRepository.save(transferTransaction);

    }

    @Transactional
    public void withdraw(Card card, BigDecimal amount) {
        TransactionalAccount senderAcc;
        try {
            senderAcc = getCardDefaultTransactionalAccount(card);
        } catch (AccountStatusException e) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, e.getMessage());
        } catch (ResourceNotFoundException e) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, e.getMessage());
        }

        MonetaryAmount balance = senderAcc.getBalance();
        Money transferringAmount = Money.of(amount, balance.getCurrency());

        transferringAmount = applyFeeIfNecessary(senderAcc, balance, balance.getCurrency(), transferringAmount);
        senderAcc.setBalance(balance.subtract(transferringAmount));

        transactionalAccountRepository.save(senderAcc);
        TransferTransaction transferTransaction = TransferTransaction.createTransferTransaction(TRANSACTION_TYPE.WITHDRAWAL, transferringAmount, senderAcc, senderAcc);
        transferTransaction.setTransactionStatus(TRANSACTION_STATUS.COMMITTED);
        transferTransactionRepository.save(transferTransaction);

    }

    private TransactionalAccount getCardDefaultTransactionalAccount(Card card) throws AccountStatusException, ResourceNotFoundException {
        List<TransactionalAccount> result = transactionalAccountRepository.findTransactionalAccountByCardAndDefaultIsTrue(card);
        if (result.isEmpty())
            throw new ResourceNotFoundException("This account does not exist.");
        TransactionalAccount account = result.get(0);

        switch (account.getAccountStatus()) {
            case FROZEN:
                throw new AccountStatusException("This account is temporarily frozen.");
            case TERMINATED:
                throw new AccountStatusException("This account has been terminated.");
            default:
                break;
        }
        return account;
    }


}
