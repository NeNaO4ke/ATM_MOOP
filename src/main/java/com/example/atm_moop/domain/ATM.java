package com.example.atm_moop.domain;

import com.example.atm_moop.domain.enums.ATM_STATUS;
import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.LinkedHashSet;
import java.util.Set;

@NoArgsConstructor
@Getter
@Setter
@Entity
public class ATM {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "atm_seq")
    @SequenceGenerator(name = "atm_seq", allocationSize = 1)
    @Column(name = "id", nullable = false)
    private Long id;

    private String address;

    @Enumerated(EnumType.STRING)
    private ATM_STATUS atmStatus;

    @JsonBackReference
    @ManyToMany(fetch = FetchType.EAGER, mappedBy = "atms")
    private Set<Bank> banks = new LinkedHashSet<>();

}
