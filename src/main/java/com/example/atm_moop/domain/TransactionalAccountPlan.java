package com.example.atm_moop.domain;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.AllArgsConstructor;
import lombok.Getter;

import java.math.BigDecimal;

@AllArgsConstructor
@Getter
@JsonFormat(shape = JsonFormat.Shape.OBJECT)
public enum TransactionalAccountPlan {

    PLAIN("PLAIN","Plain",false, BigDecimal.ZERO, BigDecimal.ZERO),
    LIGHT("LIGHT","Light",true, BigDecimal.valueOf(1000), BigDecimal.valueOf(5)),
    MEDIUM("MEDIUM","Medium",true, BigDecimal.valueOf(5000), BigDecimal.valueOf(4));

    private final String id;
    private final String planName;
    private final boolean isLendingAvailable;
    private final BigDecimal creditMoneyAmount;
    private final BigDecimal lendingRate;

}
