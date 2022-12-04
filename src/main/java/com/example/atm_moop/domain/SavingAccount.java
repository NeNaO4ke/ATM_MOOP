package com.example.atm_moop.domain;

import com.example.atm_moop.domain.enums.ACCOUNT_STATUS;
import com.example.atm_moop.domain.enums.ACCOUNT_TYPE;
import lombok.*;
import org.hibernate.annotations.Type;

import javax.money.MonetaryAmount;
import javax.persistence.Column;
import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;
import javax.validation.constraints.NotNull;
import java.math.BigDecimal;
import java.time.Period;


@NoArgsConstructor
@ToString
@Getter
@Setter
@Entity
public class SavingAccount extends Account {

    public SavingAccount(Long id, ACCOUNT_TYPE accountType, ACCOUNT_STATUS accountStatus, String accountName, @NotNull(message = "Amount is required") MonetaryAmount balance, User user, Card card, BigDecimal interestRate, Period paymentStepPeriod, Period totalPeriod, boolean isAdditionAllowed, boolean autoRenewal, boolean isCapitalizationOn) {
        super(id, accountType, accountStatus, accountName, balance, user, card);
        this.interestRate = interestRate;
        this.paymentStepPeriod = paymentStepPeriod;
        this.totalPeriod = totalPeriod;
        this.isAdditionAllowed = isAdditionAllowed;
        this.autoRenewal = autoRenewal;
        this.isCapitalizationOn = isCapitalizationOn;
    }

    @Column(name = "interest_rate", precision = 5, scale = 2)
    private BigDecimal interestRate;

    @Type(type = "com.example.atm_moop.converter.PeriodUserType")
    private Period paymentStepPeriod;

    @Type(type = "com.example.atm_moop.converter.PeriodUserType")
    private Period totalPeriod;

    private Integer stepsLeft;

    private boolean isAdditionAllowed;
    private boolean autoRenewal;
    private boolean isCapitalizationOn;


}
