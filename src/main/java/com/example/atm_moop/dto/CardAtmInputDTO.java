package com.example.atm_moop.dto;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.Value;
import org.hibernate.validator.constraints.CreditCardNumber;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Positive;

@Value
@NoArgsConstructor(force = true, access = AccessLevel.PRIVATE)
@AllArgsConstructor
public class CardAtmInputDTO {

    @Pattern(regexp = "\\d{16}")
    @CreditCardNumber
    @NotNull
    String cardNumber;

    @NotNull
    @Positive
    Long atmId;
}
