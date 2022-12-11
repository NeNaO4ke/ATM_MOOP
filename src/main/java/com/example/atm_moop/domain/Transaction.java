package com.example.atm_moop.domain;


import com.example.atm_moop.converter.MonetaryAmountSerializer;
import com.example.atm_moop.domain.enums.TRANSACTION_STATUS;
import com.example.atm_moop.domain.enums.TRANSACTION_TYPE;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import lombok.*;
import org.hibernate.annotations.Columns;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.Type;
import org.hibernate.annotations.UpdateTimestamp;

import javax.money.MonetaryAmount;
import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.sql.Timestamp;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
@Entity
@Table(name = "transaction")
@Inheritance(strategy = InheritanceType.JOINED)
public abstract class Transaction {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "transaction_seq")
    @SequenceGenerator(name = "transaction_gen", sequenceName = "transaction_seq", allocationSize = 1)
    @Column(name = "id", nullable = false)
    private Long id;

    @Enumerated(EnumType.STRING)
    private TRANSACTION_STATUS transactionStatus;
    @Enumerated(EnumType.STRING)
    private TRANSACTION_TYPE transactionType;

    @CreationTimestamp
    @Temporal(TemporalType.TIMESTAMP)
    private Timestamp startTime;

    @UpdateTimestamp
    private Timestamp modifyTime;

    @JsonSerialize(using = MonetaryAmountSerializer.class)
    @NotNull(message = "Amount is required")
    @Columns(columns = {@Column(name = "amount"), @Column(name = "currency")})
    @Type(type = "com.example.atm_moop.converter.MonetaryAmountUserType")
    private MonetaryAmount amount;

    @ManyToOne(optional = false)
    @JoinColumn(name = "from_account_id", nullable = false, updatable = false)
    private Account fromAccount;

}
