package com.example.atm_moop.domain;

import com.example.atm_moop.converter.PeriodSerializer;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import lombok.AllArgsConstructor;
import lombok.Getter;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.Period;
import java.time.temporal.ChronoUnit;

@AllArgsConstructor
@Getter
@JsonFormat(shape = JsonFormat.Shape.OBJECT)
public enum SavingAccountPlan {

    PLAIN("PLAIN", "Plain", null, null, null, null, true),
    STANDARD("STANDARD","Standard", BigDecimal.valueOf(7), Period.ofMonths(1), Period.ofMonths(3), 3, true),
    LONG("LONG","Long", BigDecimal.valueOf(9), Period.ofMonths(1), Period.ofMonths(9), 9, true),
    QUICK("QUICK","Quick", BigDecimal.valueOf(4), Period.ofWeeks(1), Period.ofWeeks(3), 3, false),
    EXTRA_QUICK("EXTRA_QUICK","QuickExtra", BigDecimal.valueOf(3), Period.ofDays(1), Period.ofDays(7), 7, false);

    private final String id;
    private final String planName;

    private final BigDecimal interestRate;

    @JsonSerialize(using = PeriodSerializer.class)
    private final Period paymentStepPeriod;

    @JsonSerialize(using = PeriodSerializer.class)
    private final Period totalPeriod;

    private final Integer initialSteps;

    private final boolean isAdditionAllowed;

    @JsonIgnore
    public int evaluateDaysUntilNextPayment() {
        LocalDate today = LocalDate.now();
        return (int) ChronoUnit.DAYS.between(today, today.plus(paymentStepPeriod));
    }

}
