package com.example.atm_moop.domain;

import com.example.atm_moop.domain.enums.TRANSACTION_STATUS;
import com.example.atm_moop.domain.enums.TRANSACTION_TYPE;
import lombok.*;
import org.hibernate.annotations.Type;

import javax.money.MonetaryAmount;
import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.sql.Timestamp;
import java.time.Period;

@NoArgsConstructor
@Getter
@Setter
@ToString
@Entity
public class RegularTransaction extends Transaction {


    public RegularTransaction(Long id, TRANSACTION_STATUS transactionStatus, TRANSACTION_TYPE transactionType, Timestamp startTime, Timestamp modifyTime, @NotNull(message = "Amount is required") MonetaryAmount amount, Account fromAccount, Account to_account, Period period, Timestamp scheduledTime, Integer initialRepeats, Integer repeatsLeft) {
        super(id, transactionStatus, transactionType, startTime, modifyTime, amount, fromAccount);
        this.to_account = to_account;
        this.period = period;
        this.scheduledTime = scheduledTime;
        this.initialRepeats = initialRepeats;
        this.repeatsLeft = repeatsLeft;
    }

    public static RegularTransaction createRegularTransaction(TRANSACTION_TYPE transactionType, MonetaryAmount amount, Account fromAccount, Account to_account, Period period, Timestamp scheduledTime, Integer initialRepeats, Integer repeatsLeft) {
        return new RegularTransaction(null, TRANSACTION_STATUS.SCHEDULED, transactionType, null, null, amount, fromAccount, to_account, period, scheduledTime, initialRepeats, repeatsLeft);
    }

    public static RegularTransaction createScheduledTransaction(TRANSACTION_TYPE transactionType, MonetaryAmount amount, Account fromAccount, Account to_account, Timestamp scheduledTime) {
        return new RegularTransaction(null, TRANSACTION_STATUS.SCHEDULED, transactionType, null, null, amount, fromAccount, to_account, null, scheduledTime, null, null);
    }

    @ManyToOne(optional = false)
    @JoinColumn(name = "to_account_id", nullable = false)
    private Account to_account;

    @Type(type = "com.example.atm_moop.converter.PeriodUserType")
    private Period period;

    private Timestamp scheduledTime;
    private Integer initialRepeats;
    private Integer repeatsLeft;

}
