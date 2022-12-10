package com.example.atm_moop.service;

import com.example.atm_moop.domain.CardAtmUserDetails;
import com.example.atm_moop.domain.RegularTransaction;
import com.example.atm_moop.domain.TransferTransactionInfo;
import com.example.atm_moop.dto.RegularTransactionDTO;
import com.example.atm_moop.dto.ScheduledTransactionDTO;
import com.example.atm_moop.exception.MyAccountNotFoundException;
import com.example.atm_moop.exception.ResourceNotFoundException;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

public interface TransactionServiceI {
    List<TransferTransactionInfo> getHistoryOfTransferTransactions(Long userId);

    List<TransferTransactionInfo> getAllTransactionsForAccountById(Long accountId);

    @Transactional
    RegularTransaction createScheduledTransaction(ScheduledTransactionDTO transactionDTO, CardAtmUserDetails cardAtmUserDetails);

    @Transactional
    void fireScheduledTransaction(Long transactionId) throws ResourceNotFoundException;

    @Transactional
    RegularTransaction createRegularTransaction(RegularTransactionDTO transactionDTO, CardAtmUserDetails cardAtmUserDetails);

    @Transactional
    void fireRegularTransaction(Long transactionId) throws MyAccountNotFoundException, ResourceNotFoundException;
}
