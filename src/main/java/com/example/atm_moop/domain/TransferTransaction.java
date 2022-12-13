package com.example.atm_moop.domain;

import com.example.atm_moop.domain.enums.TRANSACTION_STATUS;
import com.example.atm_moop.domain.enums.TRANSACTION_TYPE;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import javax.money.MonetaryAmount;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.validation.constraints.NotNull;
import java.math.BigDecimal;
import java.sql.Timestamp;

@NoArgsConstructor
@Getter
@Setter
@ToString
@Entity
public class TransferTransaction extends Transaction {


    public TransferTransaction(Long id, TRANSACTION_STATUS transactionStatus, TRANSACTION_TYPE transactionType, Timestamp startTime, Timestamp modifyTime, @NotNull(message = "Amount is required") MonetaryAmount amount, Account fromAccount, Account toAccount, BigDecimal fee) {
        super(id, transactionStatus, transactionType, startTime, modifyTime, amount, fromAccount);
        this.toAccount = toAccount;
        this.fee = fee;
    }

    public static TransferTransaction createTransferTransaction(TRANSACTION_TYPE transactionType, MonetaryAmount amount,BigDecimal fee, Account fromAccount, Account to_account) {
        return new TransferTransaction(null, TRANSACTION_STATUS.PROCESSING, transactionType, null, null, amount, fromAccount, to_account, fee);
    }

    @ManyToOne(optional = false)
    @JoinColumn(name = "to_account_id", nullable = false)
    private Account toAccount;

    @Column(name = "fee", precision = 20, scale = 2)
    private BigDecimal fee;

}
