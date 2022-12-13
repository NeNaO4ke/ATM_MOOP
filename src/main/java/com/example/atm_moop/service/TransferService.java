package com.example.atm_moop.service;

import com.example.atm_moop.domain.*;
import com.example.atm_moop.domain.enums.ACCOUNT_STATUS;
import com.example.atm_moop.domain.enums.ACCOUNT_TYPE;
import com.example.atm_moop.domain.enums.TRANSACTION_STATUS;
import com.example.atm_moop.domain.enums.TRANSACTION_TYPE;
import com.example.atm_moop.exception.AccountStatusException;
import com.example.atm_moop.exception.ResourceNotFoundException;
import com.example.atm_moop.exception.RightsViolationException;
import com.example.atm_moop.repository.AccountRepository;
import com.example.atm_moop.repository.TransactionalAccountRepository;
import com.example.atm_moop.repository.TransferTransactionRepository;
import com.example.atm_moop.util.MoneyUtil;
import lombok.RequiredArgsConstructor;
import org.javamoney.moneta.Money;
import org.springframework.data.util.Pair;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.money.CurrencyUnit;
import javax.money.MonetaryAmount;
import javax.money.convert.CurrencyConversion;
import javax.money.convert.MonetaryConversions;
import java.math.BigDecimal;
import java.math.RoundingMode;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class TransferService {

    private final TransactionalAccountRepository transactionalAccountRepository;

    private final AccountRepository<Account> accountRepository;

    private final TransferTransactionRepository transferTransactionRepository;


    @Transactional
    public TransferTransaction transfer(Long userSenderId, Long accountSenderId, Long accountReceiverId, BigDecimal amount) throws AccountStatusException, ResourceNotFoundException, RightsViolationException {

        Pair<Account, Account> accountAccountPair = checkIfTransferAvailableAndGetAccounts(userSenderId, accountSenderId, accountReceiverId, amount);

        Account senderAcc = accountAccountPair.getFirst();
        Account receiverAcc = accountAccountPair.getSecond();

        MonetaryAmount receiverAccBalance = receiverAcc.getBalance();
        MonetaryAmount senderAccBalance = senderAcc.getBalance();

        CurrencyUnit senderCurrency = senderAccBalance.getCurrency();
        Money senderTransferringAmount = Money.of(amount, senderCurrency);

        Money receiverTransferringAmount = applyConversionIfNecessary(senderTransferringAmount, receiverAccBalance.getCurrency(), senderCurrency);

        Money withFee = senderTransferringAmount;
        BigDecimal fee = null;

        if (senderAcc.getAccountType() == ACCOUNT_TYPE.TRANSACTIONAL) {
            TransactionalAccount tra = (TransactionalAccount) senderAcc;
            withFee = applyFeeIfNecessary(tra, senderAccBalance, senderCurrency, senderTransferringAmount);
            if (!withFee.isEqualTo(senderTransferringAmount)) {
                fee = withFee.subtract(senderTransferringAmount).getNumber().numberValue(BigDecimal.class);
            }
        }

        MonetaryAmount newSenderBalance = senderAccBalance.subtract(withFee);
        MonetaryAmount newReceiverBalance = receiverAccBalance.add(receiverTransferringAmount);

        senderAcc.setBalance(newSenderBalance);
        receiverAcc.setBalance(newReceiverBalance);

        TransferTransaction transferTransaction = TransferTransaction.createTransferTransaction(TRANSACTION_TYPE.TRANSFERRING, senderTransferringAmount, fee, senderAcc, receiverAcc);
        //   transferTransaction = transferTransactionRepository.save(transferTransaction);
        if (receiverAcc.getAccountStatus() == ACCOUNT_STATUS.ACCUMULATING) {
            SavingAccount savingAccount = (SavingAccount) receiverAcc;
            savingAccount.setCumulativeAmount(savingAccount.getCumulativeAmount().add(MoneyUtil.extractAmount(receiverTransferringAmount)));
            savingAccount.setCurrentEstimatedAmount(savingAccount.getCurrentEstimatedAmount().add(MoneyUtil.extractAmount(receiverTransferringAmount)));
            accountRepository.saveAll(List.of(senderAcc, savingAccount));
        } else {
               accountRepository.saveAll(List.of(senderAcc, receiverAcc));
        }

        transferTransaction.setTransactionStatus(TRANSACTION_STATUS.COMMITTED);
        return transferTransactionRepository.save(transferTransaction);
    }

    Pair<Account, Account> checkIfTransferAvailableAndGetAccounts(Long userSenderId, Long accountSenderId, Long accountReceiverId, BigDecimal amount) throws AccountStatusException, RightsViolationException, ResourceNotFoundException {
        AccountService.confirmAccountsIsNotTheSame(accountSenderId, accountReceiverId);
        Account senderAcc = AccountService.getAccountWithOkStatus(accountRepository.findById(accountSenderId));
        AccountService.confirmOwnedByUser(userSenderId, senderAcc.getUser().getId());
        Account receiverAcc = getReceiverAccountWithChecks(accountRepository.findByIdWithUser(accountReceiverId), userSenderId);

        MonetaryAmount senderAccBalance = senderAcc.getBalance();
        CurrencyUnit senderCurrency = senderAccBalance.getCurrency();
        Money senderTransferringAmount = Money.of(amount, senderCurrency);
        if (!senderAccBalance.isGreaterThanOrEqualTo(senderTransferringAmount)) {
            throw new AccountStatusException("Your cannot transfer more than you have right now...");
        }

        if (senderAcc.getAccountType() == ACCOUNT_TYPE.TRANSACTIONAL) {
            TransactionalAccount tra = (TransactionalAccount) senderAcc;
            applyFeeIfNecessary(tra, senderAccBalance, senderCurrency, senderTransferringAmount);
        }

        return Pair.of(senderAcc, receiverAcc);
    }

    private Account getReceiverAccountWithChecks(Optional<Account> optionalReceiver, Long userSenderId) throws ResourceNotFoundException, AccountStatusException, RightsViolationException {
        Account receiverAcc = AccountService.getResourceOrThrowException(optionalReceiver);
        if (receiverAcc.getAccountType() == ACCOUNT_TYPE.SAVING) {
            if (receiverAcc.getAccountStatus() != ACCOUNT_STATUS.OK && receiverAcc.getAccountStatus() != ACCOUNT_STATUS.ACCUMULATING) {
                AccountService.getAccountWithOkStatus(optionalReceiver);
            }
            SavingAccount savingAccount = (SavingAccount) receiverAcc;
            if (!savingAccount.getSavingAccountPlan().isAdditionAllowed()) {
                throw new RightsViolationException("You cannot transfer money to saving account that not have feature for it");
            }
            if (!userSenderId.equals(savingAccount.getUser().getId())) {
                throw new RightsViolationException("You cannot transfer money to saving account that doesn`t belong to you");
            }
        } else {
            receiverAcc = AccountService.getAccountWithOkStatus(optionalReceiver);
        }
        return receiverAcc;
    }

    private Money applyConversionIfNecessary(Money senderTransferringAmount, CurrencyUnit receiverCurrency, CurrencyUnit senderCurrency) {
        if (receiverCurrency != senderCurrency) {
            CurrencyConversion targetCurrency = MonetaryConversions.getConversion(receiverCurrency);
            return senderTransferringAmount.with(targetCurrency);
        }
        return senderTransferringAmount;
    }

    private Money applyFeeIfNecessary(TransactionalAccount senderAcc, MonetaryAmount senderAccBalance, CurrencyUnit senderCurrency, Money senderTransferringAmount) throws AccountStatusException {
        if (senderAcc.isLendingAvailable()) {
            Money credit = Money.of(senderAcc.getCreditMoneyAmount(), senderCurrency);
            if (senderAccBalance.subtract(senderTransferringAmount).isLessThan(credit)) {
                Money subtract = senderTransferringAmount;
                if (senderAccBalance.isGreaterThan(credit))
                    subtract = credit.subtract(senderAccBalance.subtract(senderTransferringAmount));
                Money senderCreditFee = subtract.multiply(senderAcc.getLendingRate().divide(BigDecimal.valueOf(100), 7, RoundingMode.HALF_DOWN));
                senderTransferringAmount = senderTransferringAmount.add(senderCreditFee);
                if (!senderAccBalance.isGreaterThanOrEqualTo(senderTransferringAmount)) {
                    throw new AccountStatusException("Your cannot transfer more than you have right now...");
                }
            }
        }
        return senderTransferringAmount;
    }

    @Transactional
    public void deposit(Card card, BigDecimal amount) throws AccountStatusException, ResourceNotFoundException {
        TransactionalAccount senderAcc = getCardDefaultTransactionalAccount(card);
        MonetaryAmount balance = senderAcc.getBalance();
        Money transferringAmount = Money.of(amount, balance.getCurrency());
        senderAcc.setBalance(balance.add(transferringAmount));
        transactionalAccountRepository.save(senderAcc);
        TransferTransaction transferTransaction = TransferTransaction.createTransferTransaction(TRANSACTION_TYPE.DEPOSIT, transferringAmount, null, senderAcc, senderAcc);
        transferTransaction.setTransactionStatus(TRANSACTION_STATUS.COMMITTED);
        transferTransactionRepository.save(transferTransaction);
    }

    @Transactional
    public void withdraw(Card card, BigDecimal amount) throws AccountStatusException, ResourceNotFoundException {
        TransactionalAccount senderAcc = getCardDefaultTransactionalAccount(card);

        MonetaryAmount balance = senderAcc.getBalance();
        Money transferringAmount = Money.of(amount, balance.getCurrency());

        Money withFee = applyFeeIfNecessary(senderAcc, balance, balance.getCurrency(), transferringAmount);
        BigDecimal fee = null;
        if (!withFee.isEqualTo(transferringAmount)) {
            fee = withFee.subtract(transferringAmount).getNumber().numberValue(BigDecimal.class);
        }

        senderAcc.setBalance(balance.subtract(withFee));

        transactionalAccountRepository.save(senderAcc);
        TransferTransaction transferTransaction = TransferTransaction.createTransferTransaction(TRANSACTION_TYPE.WITHDRAWAL, transferringAmount, fee, senderAcc, senderAcc);
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
