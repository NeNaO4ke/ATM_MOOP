package com.example.atm_moop.domain;

import com.example.atm_moop.converter.MonetaryAmountSerializer;
import com.example.atm_moop.domain.enums.ACCOUNT_STATUS;
import com.example.atm_moop.domain.enums.ACCOUNT_TYPE;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import lombok.*;
import org.hibernate.annotations.Columns;
import org.hibernate.annotations.Type;

import javax.money.MonetaryAmount;
import javax.persistence.*;
import javax.validation.constraints.NotNull;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
@Entity
@Table(name = "account")
@Inheritance(strategy = InheritanceType.JOINED)
public abstract class Account {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "account_seq")
    @SequenceGenerator(name = "account_gen", sequenceName = "account_seq", allocationSize = 1)
    @Column(name = "id", nullable = false)
    private Long id;

    @Enumerated(EnumType.STRING)
    private ACCOUNT_TYPE accountType;
    @Enumerated(EnumType.STRING)
    private ACCOUNT_STATUS accountStatus;

    @Column(name = "account_name", nullable = false, length = 64)
    private String accountName;

    @JsonSerialize(using = MonetaryAmountSerializer.class)
    @NotNull(message = "Amount is required")
    @Columns(columns = {@Column(name = "balance"), @Column(name = "currency")})
    @Type(type = "com.example.atm_moop.converter.MonetaryAmountUserType")
    private MonetaryAmount balance;

    @JsonInclude(JsonInclude.Include.NON_EMPTY)
    @ManyToOne(optional = false)
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @JsonInclude(JsonInclude.Include.NON_EMPTY)
    @ToString.Exclude
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "card_number", nullable = false)
    private Card card;
}
