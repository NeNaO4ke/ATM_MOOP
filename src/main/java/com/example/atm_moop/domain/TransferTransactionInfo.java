package com.example.atm_moop.domain;

import com.example.atm_moop.converter.MonetaryAmountSerializer;
import com.example.atm_moop.domain.enums.TRANSACTION_STATUS;
import com.example.atm_moop.domain.enums.TRANSACTION_TYPE;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;

import javax.money.MonetaryAmount;
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

    AccountInfo getFromAccount();
    AccountInfo getToAccount();

    /**
     * A Projection for the {@link Account} entity
     */
    interface AccountInfo {
        Long getId();
    }
}
