package com.example.atm_moop.domain;

import com.example.atm_moop.domain.enums.ACCOUNT_STATUS;
import com.example.atm_moop.domain.enums.ACCOUNT_TYPE;
import lombok.*;

import javax.money.MonetaryAmount;
import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.math.BigDecimal;

@NoArgsConstructor
@Getter
@Setter
@ToString
@Entity
public class TransactionalAccount extends Account {
    public TransactionalAccount(Long id, ACCOUNT_STATUS accountStatus, String accountName, @NotNull(message = "Amount is required") MonetaryAmount balance, User user, Card card, boolean isLendingAvailable, boolean isDefault, BigDecimal creditMoneyAmount, BigDecimal landingRate) {
        super(id, ACCOUNT_TYPE.TRANSACTIONAL, accountStatus, accountName, balance, user, card);
        this.isLendingAvailable = isLendingAvailable;
        this.isDefault = isDefault;
        this.creditMoneyAmount = creditMoneyAmount;
        this.landingRate = landingRate;
    }

    private boolean isLendingAvailable;

    private boolean isDefault;

    @Column(name = "credit_money_amount", precision = 20, scale = 3)
    private BigDecimal creditMoneyAmount;

    @Column(name = "landing_rate", precision = 5, scale = 2)
    private BigDecimal landingRate;

}
