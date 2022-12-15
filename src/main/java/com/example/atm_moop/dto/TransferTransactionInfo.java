package com.example.atm_moop.dto;

import com.example.atm_moop.converter.MonetaryAmountSerializer;
import com.example.atm_moop.domain.Account;
import com.example.atm_moop.domain.TransferTransaction;
import com.example.atm_moop.domain.enums.TRANSACTION_STATUS;
import com.example.atm_moop.domain.enums.TRANSACTION_TYPE;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;

import javax.money.MonetaryAmount;
import java.math.BigDecimal;
import java.sql.Timestamp;

/**
 * A Projection for the {@link TransferTransaction} entity
 */
public interface TransferTransactionInfo {
    Long getId();

    TRANSACTION_STATUS getTransactionStatus();

    TRANSACTION_TYPE getTransactionType();

    Timestamp getStartTime();

    Timestamp getModifyTime();

    @JsonSerialize(using = MonetaryAmountSerializer.class)
    MonetaryAmount getAmount();

    BigDecimal getFee();

    AccountInfo getFromAccount();
    AccountInfo getToAccount();

    /**
     * A Projection for the {@link Account} entity
     */
    interface AccountInfo {
        Long getId();
    }
}
