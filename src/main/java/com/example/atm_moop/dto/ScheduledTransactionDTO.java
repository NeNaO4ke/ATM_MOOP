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

    @NotNull
    @Positive(message = "Amount must be positive!")
    BigDecimal amount;

    @NotNull(message = "Sender account id must not be null!")
    Long senderAccountId;

    @NotNull(message = "Receiver account id must not be null!")
    Long receiverAccountId;

    @NotNull
    @Future(message = "Scheduled date is not in future!")
    Instant scheduledTime;

}
