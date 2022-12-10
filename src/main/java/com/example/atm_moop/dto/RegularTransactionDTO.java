package com.example.atm_moop.dto;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.Value;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Positive;
import java.math.BigDecimal;
import java.time.Instant;

@Value
@NoArgsConstructor(force = true, access = AccessLevel.PRIVATE)
@AllArgsConstructor
@JsonIgnoreProperties(ignoreUnknown = true)
public class RegularTransactionDTO {

    @NotNull
    @Positive
    BigDecimal amount;

    @NotNull
    Long senderAccountId;

    @NotNull
    Long receiverAccountId;

    Instant scheduledTime;

    @NotNull
    String period;

    @NotNull
    Integer initialRepeats;

}
