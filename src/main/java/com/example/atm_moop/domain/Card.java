package com.example.atm_moop.domain;

import com.example.atm_moop.domain.enums.CARD_STATUS;
import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.*;
import org.hibernate.validator.constraints.CreditCardNumber;
import org.hibernate.validator.constraints.LuhnCheck;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import javax.persistence.*;
import javax.validation.constraints.Digits;
import javax.validation.constraints.Pattern;
import java.util.Collection;
import java.util.Date;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
@Entity
@Table(name = "card")
public class Card {

    @Id
    @Column(name = "number", nullable = false)
    @CreditCardNumber
    @Pattern(regexp="\\d{16}")
    private String number;

    @JsonIgnore
    @Pattern(regexp="\\d{4}")
    private String pin;
    @JsonIgnore
    @Temporal(TemporalType.DATE)
    private Date expiryDate;
    @JsonIgnore
    @Pattern(regexp="\\d{3}")
    private String cvv;

    @Enumerated(EnumType.STRING)
    private CARD_STATUS cardStatus;

    @ToString.Exclude
    @JsonInclude(JsonInclude.Include.NON_EMPTY)
    @JsonManagedReference
    @ManyToOne(optional = false)
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @JsonInclude(JsonInclude.Include.NON_EMPTY)
    @ToString.Exclude
    @JsonManagedReference
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "bank_id", nullable = false)
    private Bank bank;

}
