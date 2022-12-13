package com.example.atm_moop.service;

import com.example.atm_moop.domain.CardAtmUserDetails;
import com.example.atm_moop.domain.RegularTransaction;
import com.example.atm_moop.domain.TransferTransactionInfo;
import com.example.atm_moop.dto.RegularTransactionDTO;
import com.example.atm_moop.dto.ScheduledTransactionDTO;
import com.example.atm_moop.exception.AccountStatusException;
import com.example.atm_moop.exception.MyAccountNotFoundException;
import com.example.atm_moop.exception.ResourceNotFoundException;
import com.example.atm_moop.exception.RightsViolationException;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.time.Instant;
import java.time.Period;
import java.util.List;

public interface TransactionServiceI {
    List<TransferTransactionInfo> getHistoryOfTransferTransactions(Long userId);

    List<TransferTransactionInfo> getAllTransactionsForAccountById(Long accountId);

    @Transactional
    RegularTransaction createScheduledTransaction(Long userSenderId, BigDecimal sendingAmount, Long senderAccountId, Long receiverAccountId, Instant scheduledTime) throws AccountStatusException, ResourceNotFoundException, RightsViolationException;

    @Transactional
    void fireScheduledTransaction(Long transactionId) throws ResourceNotFoundException;

    @Transactional
    RegularTransaction createRegularTransaction(Long userSenderId, BigDecimal sendingAmount, Long senderAccountId, Long receiverAccountId, Instant scheduledTime, Period period, Integer initialRepeats) throws AccountStatusException, ResourceNotFoundException, RightsViolationException;


        @Transactional
    void fireRegularTransaction(Long transactionId) throws MyAccountNotFoundException, ResourceNotFoundException;
}
