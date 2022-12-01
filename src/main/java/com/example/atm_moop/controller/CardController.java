package com.example.atm_moop.controller;

import com.example.atm_moop.domain.CardAtmUserDetails;
import com.example.atm_moop.dto.CardAtmInputDTO;
import com.example.atm_moop.service.CardService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;

@RequiredArgsConstructor
@RestController
@RequestMapping(path = "/api/card")
public class CardController {

    private final CardService cardService;

    @PutMapping(value = "/update-pin", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    private ResponseEntity<?> updatePin(@AuthenticationPrincipal CardAtmUserDetails cardAtmUserDetails, @RequestAttribute String pin){
        cardService.changePin(cardAtmUserDetails.getCard(), pin);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PostMapping(value = "/verify-atm-support-bank", consumes = MediaType.APPLICATION_JSON_VALUE)
    private ResponseEntity<?> verifyAtmBank(@RequestBody @Valid CardAtmInputDTO cardAtmInputDTO){
        cardService.verifyAtmSupportBank(cardAtmInputDTO.getCardNumber(), cardAtmInputDTO.getAtmId());
        return new ResponseEntity<>(HttpStatus.OK);
    }




}
