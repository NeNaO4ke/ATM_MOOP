package com.example.atm_moop.dto;


import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.Value;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Positive;
import java.math.BigDecimal;

@Value
@NoArgsConstructor(force = true, access = AccessLevel.PRIVATE)
@AllArgsConstructor
public class TransferInputDTO {

    @NotNull
    @Positive
    BigDecimal amount;

    @NotNull
    Long senderAccountId;

    @NotNull
    Long receiverAccountId;

}
