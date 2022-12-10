package com.example.atm_moop.domain;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.sql.Timestamp;

@NoArgsConstructor
@Getter
@Setter
@Entity
@AllArgsConstructor
public class LoginAttempt {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "login_attempt_gen")
    @SequenceGenerator(name = "login_attempt_gen", sequenceName = "login_attempt_seq", allocationSize = 1)
    @Column(name = "id", nullable = false)
    private Long id;

    private boolean successful;

    @CreationTimestamp
    private Timestamp at;

    @ManyToOne(optional = false)
    @JoinColumn(name = "card_number", nullable = false)
    private Card card;

    @ManyToOne(optional = false)
    @JoinColumn(name = "atm_id", nullable = false)
    private ATM atm;

}
