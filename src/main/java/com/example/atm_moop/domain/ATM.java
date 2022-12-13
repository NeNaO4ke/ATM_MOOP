package com.example.atm_moop.domain;

import com.example.atm_moop.domain.enums.ATM_STATUS;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;
import java.util.LinkedHashSet;
import java.util.Objects;
import java.util.Set;

@NoArgsConstructor
@Getter
@Setter
@Entity
@AllArgsConstructor
public class ATM implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "atm_seq")
    @SequenceGenerator(name = "atm_seq", allocationSize = 1)
    @Column(name = "id", nullable = false)
    private Long id;

    private String address;

    @Enumerated(EnumType.STRING)
    private ATM_STATUS atmStatus;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof ATM)) return false;
        ATM atm = (ATM) o;
        return getId().equals(atm.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getId());
    }

    // @JsonBackReference
    @ManyToMany(fetch = FetchType.EAGER, mappedBy = "atms")
    private Set<Bank> banks = new LinkedHashSet<>();

}
