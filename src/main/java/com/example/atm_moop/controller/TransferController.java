package com.example.atm_moop.controller;

import com.example.atm_moop.domain.CardAtmUserDetails;
import com.example.atm_moop.dto.AmountDTO;
import com.example.atm_moop.dto.TransferInputDTO;
import com.example.atm_moop.service.TransferService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequiredArgsConstructor
@RequestMapping(value = "/api/transfer")
public class TransferController {

    private final TransferService transferService;

    @PutMapping(value = "/", consumes = MediaType.APPLICATION_JSON_VALUE)
    private ResponseEntity<?> transfer(@AuthenticationPrincipal CardAtmUserDetails cardAtmUserDetails, @RequestBody @Valid TransferInputDTO transferInputDTO) {
        transferService.transferFromTransactionalToTransactional(cardAtmUserDetails.getCard().getUser(), transferInputDTO.getSenderAccountId(), transferInputDTO.getReceiverAccountId(), transferInputDTO.getAmount());
        return new ResponseEntity<>(HttpStatus.OK);
    }


    @PostMapping(value = "/deposit", consumes = MediaType.APPLICATION_JSON_VALUE)
    private ResponseEntity<?> deposit(@AuthenticationPrincipal CardAtmUserDetails cardAtmUserDetails, @RequestBody @Valid AmountDTO amountDTO) {
        transferService.deposit(cardAtmUserDetails.getCard(), amountDTO.getAmount());
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PostMapping(value = "/withdraw", consumes = MediaType.APPLICATION_JSON_VALUE)
    private ResponseEntity<?> withdraw(@AuthenticationPrincipal CardAtmUserDetails cardAtmUserDetails, @RequestBody @Valid AmountDTO amountDTO) {
        transferService.withdraw(cardAtmUserDetails.getCard(), amountDTO.getAmount());
        return new ResponseEntity<>(HttpStatus.OK);
    }


}
