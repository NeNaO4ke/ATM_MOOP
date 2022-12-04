package com.example.atm_moop.controller;

import com.example.atm_moop.domain.ATM;
import com.example.atm_moop.domain.Account;
import com.example.atm_moop.domain.CardAtmUserDetails;
import com.example.atm_moop.repository.ATMRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping(value = "/api/atm")
public class AtmController {


    private final ATMRepository atmRepository;


    @GetMapping(value = "/all", produces = MediaType.APPLICATION_JSON_VALUE)
    private List<ATM> getAll() {
        return atmRepository.findAllAtmsWithBank();
    }

}
