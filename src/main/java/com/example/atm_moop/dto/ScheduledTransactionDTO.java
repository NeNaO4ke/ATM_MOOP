package com.example.atm_moop.dto;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.Value;

import javax.validation.constraints.Future;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Positive;
import java.math.BigDecimal;
import java.time.Instant;

@Value
@NoArgsConstructor(force = true, access = AccessLevel.PRIVATE)
@AllArgsConstructor
public class ScheduledTransactionDTO {

    @Positive
    BigDecimal amount;

    @NotNull
    Long senderAccountId;

    @NotNull
    Long receiverAccountId;

    @Future
    Instant scheduledTime;

}
