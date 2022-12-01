package com.example.atm_moop.domain;

import com.example.atm_moop.domain.enums.ACCOUNT_STATUS;
import com.example.atm_moop.domain.enums.ACCOUNT_TYPE;
import lombok.*;

import javax.money.MonetaryAmount;
import javax.persistence.Column;
import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;
import javax.validation.constraints.NotNull;
import java.math.BigDecimal;


@NoArgsConstructor
@ToString
@Getter
@Setter
@Entity
public class SavingAccount extends Account {

    public SavingAccount(Long id, ACCOUNT_STATUS accountStatus, String accountName, @NotNull(message = "Amount is required") MonetaryAmount balance, User user, Card card, BigDecimal interestRate) {
        super(id, ACCOUNT_TYPE.SAVING, accountStatus, accountName, balance, user, card);
        this.interestRate = interestRate;
    }

    @Column(name = "interest_rate", precision = 5, scale = 2)
    private BigDecimal interestRate;

}
