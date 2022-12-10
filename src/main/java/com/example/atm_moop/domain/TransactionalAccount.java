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
import javax.validation.constraints.NotNull;
import java.math.BigDecimal;

@NoArgsConstructor
@Getter
@Setter
@ToString
@Entity
public class TransactionalAccount extends Account {
    public TransactionalAccount(Long id, ACCOUNT_STATUS accountStatus, String accountName, @NotNull(message = "Amount is required") MonetaryAmount balance, User user, Card card, boolean isLendingAvailable, boolean isDefault, BigDecimal creditMoneyAmount, BigDecimal lendingRate) {
        super(id, ACCOUNT_TYPE.TRANSACTIONAL, accountStatus, accountName, balance, user, card);
        this.isLendingAvailable = isLendingAvailable;
        this.isDefault = isDefault;
        this.creditMoneyAmount = creditMoneyAmount;
        this.lendingRate = lendingRate;
    }

    public static TransactionalAccount createFromPlan(TransactionalAccountPlan plan, String accountName, String currencyUnitCode, User user, Card card){
        return new TransactionalAccount(null, ACCOUNT_STATUS.OK, accountName, Money.of(plan.getCreditMoneyAmount(), currencyUnitCode), user, card, plan.isLendingAvailable(), false, plan.getCreditMoneyAmount(),plan.getLendingRate());
    }

    private boolean isLendingAvailable;

    private boolean isDefault;

    @Column(name = "credit_money_amount", precision = 20, scale = 3)
    private BigDecimal creditMoneyAmount;

    @Column(name = "landing_rate", precision = 5, scale = 2)
    private BigDecimal lendingRate;

}
