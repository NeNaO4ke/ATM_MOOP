package com.example.atm_moop.domain;

import com.example.atm_moop.domain.enums.USER_ROLE;
import com.example.atm_moop.domain.enums.USER_STATUS;
import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.*;

import javax.persistence.*;
import java.sql.Date;
import java.time.LocalDate;
import java.time.temporal.ChronoUnit;
import java.util.LinkedHashSet;
import java.util.Objects;
import java.util.Set;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
@Entity
@Table(name = "usr")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "usr_seq")
    @SequenceGenerator(name = "usr_seq", allocationSize = 1)
    @Column(name = "id", nullable = false)
    private Long id;

    private String firstName;
    private String middleName;
    private String lastName;
    private Date birthdayDate;

    @Enumerated(EnumType.STRING)
    private USER_STATUS userStatus;

    @JsonInclude(JsonInclude.Include.NON_EMPTY)
    @JsonBackReference
    @ToString.Exclude
    @OneToMany(mappedBy = "user", orphanRemoval = true)
    private Set<Card> cards = new LinkedHashSet<>();

    @ElementCollection(targetClass = USER_ROLE.class, fetch = FetchType.EAGER)
    @Column(name = "role")
    @CollectionTable(name = "usr_role", joinColumns = @JoinColumn(name = "owner_id"))
    private Set<USER_ROLE> role = new LinkedHashSet<>();

    @JsonIgnore
    public String getFullName() {
        return String.format("%s %s %s", Objects.toString(lastName, ""), Objects.toString(firstName, ""), Objects.toString(middleName, ""));
    }

    @JsonIgnore
    public long getFullYears() {
        return ChronoUnit.YEARS.between(
                birthdayDate.toLocalDate(),
                LocalDate.now()
        );
    }

}
