package com.example.atm_moop.controller;


import com.example.atm_moop.domain.Account;
import com.example.atm_moop.domain.Card;
import com.example.atm_moop.domain.CardAtmUserDetails;
import com.example.atm_moop.domain.TransactionalAccount;
import com.example.atm_moop.dto.TransferInputDTO;
import com.example.atm_moop.repository.AccountRepository;
import com.example.atm_moop.service.AccountService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequiredArgsConstructor
@RequestMapping(value = "/api/account")
public class AccountController {


    private final AccountService accountService;

    @GetMapping(value = "/all-my", produces = MediaType.APPLICATION_JSON_VALUE)
    private List<Account> getAll(@AuthenticationPrincipal CardAtmUserDetails cardAtmUserDetails) {
        return accountService.getAllUserAccounts(cardAtmUserDetails.getCard().getUser().getId());
    }

    @GetMapping(value = "/transactional/{accountId}", produces = MediaType.APPLICATION_JSON_VALUE)
    private ResponseEntity<TransactionalAccount> getTransactionalAccountById(@AuthenticationPrincipal CardAtmUserDetails cardAtmUserDetails, @PathVariable Long accountId) {
        Optional<TransactionalAccount> account = accountService.getTransactionalAccountById(accountId, cardAtmUserDetails.getCard().getNumber());
        return account
                .map(transactionalAccount -> new ResponseEntity<>(transactionalAccount, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }


    @GetMapping(path = "/auth", produces = MediaType.TEXT_PLAIN_VALUE)
    private String getAuth(@AuthenticationPrincipal CardAtmUserDetails cardAtmUserDetails) {
        return cardAtmUserDetails.toString();
    }

}
