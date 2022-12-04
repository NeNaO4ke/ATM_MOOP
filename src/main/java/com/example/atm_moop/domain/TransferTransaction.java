package com.example.atm_moop.domain;

import com.example.atm_moop.domain.enums.TRANSACTION_STATUS;
import com.example.atm_moop.domain.enums.TRANSACTION_TYPE;
import lombok.*;

import javax.money.MonetaryAmount;
import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.sql.Timestamp;

@NoArgsConstructor
@Getter
@Setter
@ToString
@Entity
public class TransferTransaction extends Transaction {


    public TransferTransaction(Long id, TRANSACTION_STATUS transactionStatus, TRANSACTION_TYPE transactionType, Timestamp startTime, Timestamp modifyTime, @NotNull(message = "Amount is required") MonetaryAmount amount, Account fromAccount, Account toAccount) {
        super(id, transactionStatus, transactionType, startTime, modifyTime, amount, fromAccount);
        this.toAccount = toAccount;
    }

    public static TransferTransaction createTransferTransaction(TRANSACTION_TYPE transactionType,MonetaryAmount amount, Account fromAccount, Account to_account) {
        return new TransferTransaction(null, TRANSACTION_STATUS.PROCESSING, transactionType, null, null, amount, fromAccount, to_account);
    }

    @ManyToOne(optional = false)
    @JoinColumn(name = "to_account_id", nullable = false)
    private Account toAccount;

}
