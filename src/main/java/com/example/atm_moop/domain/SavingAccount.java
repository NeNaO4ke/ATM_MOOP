package com.example.atm_moop.domain;

import com.example.atm_moop.domain.enums.ACCOUNT_STATUS;
import com.example.atm_moop.domain.enums.ACCOUNT_TYPE;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
import org.javamoney.moneta.Money;

import javax.money.MonetaryAmount;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.validation.constraints.NotNull;
import java.math.BigDecimal;
import java.sql.Timestamp;
import java.util.Date;


@NoArgsConstructor
@ToString
@Getter
@Setter
@Entity
public class SavingAccount extends Account {

    public SavingAccount(Long id, ACCOUNT_STATUS accountStatus, String accountName, @NotNull(message = "Amount is required") MonetaryAmount balance, User user, Card card, SavingAccountPlan savingAccountPlan, Integer paymentStepsLeft, Timestamp accumulateStartTime, boolean autoRenewal, boolean isCapitalizationOn, BigDecimal cumulativeAmount, BigDecimal currentEstimatedAmount, Integer daysUntilNextPayment) {
        super(id, ACCOUNT_TYPE.SAVING, accountStatus, accountName, balance, user, card);
        this.savingAccountPlan = savingAccountPlan;
        this.paymentStepsLeft = paymentStepsLeft;
        this.accumulateStartTime = accumulateStartTime;
        this.autoRenewal = autoRenewal;
        this.isCapitalizationOn = isCapitalizationOn;
        this.cumulativeAmount = cumulativeAmount;
        this.currentEstimatedAmount = currentEstimatedAmount;
        this.daysUntilNextPayment = daysUntilNextPayment;
    }

    public static SavingAccount createFromPlan(SavingAccountPlan plan, String accountName, String currencyUnitCode, User user, Card card) {
        return new SavingAccount(null, ACCOUNT_STATUS.OK, accountName, Money.of(0, currencyUnitCode), user, card, plan, null, null, false, true, null, null, null);
    }


    @Enumerated(EnumType.STRING)
    @Column(name = "saving_account_plan", nullable = false)
    private SavingAccountPlan savingAccountPlan;

    private Integer paymentStepsLeft;


    private Timestamp accumulateStartTime;
    private boolean autoRenewal;
    private boolean isCapitalizationOn;

    @Column(precision = 26, scale = 7)
    private BigDecimal cumulativeAmount;
    private BigDecimal currentEstimatedAmount;
    private Integer daysUntilNextPayment;

    public void applyPlanToAccount(SavingAccountPlan plan){
        this.paymentStepsLeft = plan.getInitialSteps();
        this.accumulateStartTime = new Timestamp(new Date().getTime());
        this.cumulativeAmount = this.getBalance().getNumber().numberValue(BigDecimal.class);
        this.currentEstimatedAmount = this.getBalance().getNumber().numberValue(BigDecimal.class);
        this.daysUntilNextPayment = plan.evaluateDaysUntilNextPayment();
    }
    public void resetSavingPlanToPlain(){
        this.savingAccountPlan = SavingAccountPlan.PLAIN;
        this.setAccountStatus(ACCOUNT_STATUS.OK);
        this.paymentStepsLeft = null;
        this.accumulateStartTime = new Timestamp(new Date().getTime());
        this.cumulativeAmount = null;
        this.currentEstimatedAmount = null;
        this.daysUntilNextPayment = null;
    }



}
