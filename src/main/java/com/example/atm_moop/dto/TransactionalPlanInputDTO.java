package com.example.atm_moop.dto;

import com.example.atm_moop.domain.TransactionalAccountPlan;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.Value;
import org.hibernate.validator.constraints.Length;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

@Value
@NoArgsConstructor(force = true, access = AccessLevel.PRIVATE)
@AllArgsConstructor
@JsonIgnoreProperties(ignoreUnknown = true)
public class TransactionalPlanInputDTO {

    @NotNull
    TransactionalAccountPlan plan;
    @NotBlank
    String currencyUnitCode;
    @Length(min = 1, max = 64)
    String accountName;

}
