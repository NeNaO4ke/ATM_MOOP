package com.example.atm_moop.service.interfaces;

import com.example.atm_moop.domain.Account;
import com.example.atm_moop.domain.RegularTransaction;
import com.example.atm_moop.domain.TransferTransaction;
import com.example.atm_moop.dto.RegularTransactionInfo;
import com.example.atm_moop.dto.TransferTransactionInfo;
import com.example.atm_moop.exception.AccountStatusException;
import com.example.atm_moop.exception.ResourceNotFoundException;
import com.example.atm_moop.exception.RightsViolationException;
import org.quartz.SchedulerException;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.sql.Timestamp;
import java.time.Instant;
import java.time.Period;
import java.util.List;

public interface ITransactionService {
    List<TransferTransactionInfo> getHistoryOfTransferTransactions(Long userId);

    TransferTransaction save(TransferTransaction transferTransaction);

    List<TransferTransactionInfo> getAllTransferTransactionsForAccountById(Long accountId);

    List<TransferTransaction> getAllTransferTransactionsByFromAccountAndStartTimeBetween(Account accountId, Timestamp start, Timestamp end);

    List<RegularTransactionInfo> getAllRegularTransactionsByFromAccountId(Long accountId, Long userId) throws ResourceNotFoundException, RightsViolationException;

    void cancelRegularTransaction(Long transactionId, Long userId) throws ResourceNotFoundException, RightsViolationException, SchedulerException;

    @Transactional
    RegularTransaction createScheduledTransaction(Long userSenderId, BigDecimal sendingAmount, Long senderAccountId, Long receiverAccountId, Instant scheduledTime) throws AccountStatusException, ResourceNotFoundException, RightsViolationException;

    @Transactional
    void fireScheduledTransaction(Long transactionId) throws ResourceNotFoundException;

    @Transactional
    RegularTransaction createRegularTransaction(Long userSenderId, BigDecimal sendingAmount, Long senderAccountId, Long receiverAccountId, Instant scheduledTime, Period period, Integer initialRepeats) throws AccountStatusException, ResourceNotFoundException, RightsViolationException;

    @Transactional
    void fireRegularTransaction(Long transactionId) throws ResourceNotFoundException;
}
