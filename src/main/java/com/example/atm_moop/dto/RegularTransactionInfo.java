package com.example.atm_moop.dto;

import com.example.atm_moop.converter.MonetaryAmountSerializer;
import com.example.atm_moop.converter.PeriodSerializer;
import com.example.atm_moop.domain.Account;
import com.example.atm_moop.domain.RegularTransaction;
import com.example.atm_moop.domain.enums.TRANSACTION_STATUS;
import com.example.atm_moop.domain.enums.TRANSACTION_TYPE;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;

import javax.money.MonetaryAmount;
import java.sql.Timestamp;
import java.time.Period;

/**
 * A Projection for the {@link RegularTransaction} entity
 */
public interface RegularTransactionInfo {
    Long getId();

    TRANSACTION_STATUS getTransactionStatus();

    TRANSACTION_TYPE getTransactionType();

    Timestamp getStartTime();

    Timestamp getModifyTime();
    @JsonSerialize(using = MonetaryAmountSerializer.class)
    MonetaryAmount getAmount();

    @JsonSerialize(using = PeriodSerializer.class)
    Period getPeriod();

    Timestamp getScheduledTime();

    Integer getInitialRepeats();

    Integer getRepeatsLeft();

    AccountInfo getFromAccount();
    AccountInfo getToAccount();

    /**
     * A Projection for the {@link Account} entity
     */
    interface AccountInfo {
        Long getId();

        String getAccountName();
    }
}
