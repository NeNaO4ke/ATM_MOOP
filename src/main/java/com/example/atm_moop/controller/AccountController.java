package com.example.atm_moop.controller;


import com.example.atm_moop.domain.*;
import com.example.atm_moop.dto.SavingPlanInputDTO;
import com.example.atm_moop.dto.TransactionalPlanInputDTO;
import com.example.atm_moop.exception.AccountStatusException;
import com.example.atm_moop.exception.ResourceNotFoundException;
import com.example.atm_moop.exception.RightsViolationException;
import com.example.atm_moop.service.AccountService;
import com.example.atm_moop.util.MoneyUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.EnumSet;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

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
    private ResponseEntity<TransactionalAccount> getTransactionalAccountById(@AuthenticationPrincipal CardAtmUserDetails cardAtmUserDetails, @PathVariable Long accountId) throws RightsViolationException, ResourceNotFoundException {
        return new ResponseEntity<>(accountService.getTransactionalAccountById(accountId, cardAtmUserDetails.getCard().getUser().getId()), HttpStatus.OK);
    }

    @GetMapping(value = "/saving/{accountId}", produces = MediaType.APPLICATION_JSON_VALUE)
    private ResponseEntity<SavingAccount> getSavingAccountById(@AuthenticationPrincipal CardAtmUserDetails cardAtmUserDetails, @PathVariable Long accountId) throws RightsViolationException, ResourceNotFoundException {
        return new ResponseEntity<>(accountService.getSavingAccountById(accountId, cardAtmUserDetails.getCard().getUser().getId()), HttpStatus.OK);
    }

    @GetMapping(value = "/{accountId}", produces = MediaType.APPLICATION_JSON_VALUE)
    private ResponseEntity<Account> getAccountById(@AuthenticationPrincipal CardAtmUserDetails cardAtmUserDetails, @PathVariable Long accountId) throws RightsViolationException, ResourceNotFoundException {
        return new ResponseEntity<>(accountService.getAccountById(accountId, cardAtmUserDetails.getCard().getUser().getId()), HttpStatus.OK);
    }

    @PreAuthorize("hasRole('USER')")
    @GetMapping(value = "/plans", produces = MediaType.APPLICATION_JSON_VALUE)
    private ResponseEntity<?> getTransactionalPlans() {
        Map<String, Object> response = new HashMap<>();
        Map<String, Object> plans = new HashMap<>();
        plans.put("transactional", EnumSet.allOf(TransactionalAccountPlan.class));
        plans.put("saving", EnumSet.allOf(SavingAccountPlan.class));
        response.put("plans", plans);
        response.put("currencies", MoneyUtil.getAllCurrencies());
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @PostMapping(value = "/transactional/plan", produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
    private ResponseEntity<?> createTransactionalAccountFromPlan(@AuthenticationPrincipal CardAtmUserDetails cardAtmUserDetails,
                                                                 @RequestBody @Valid TransactionalPlanInputDTO inputDTO) {
        return new ResponseEntity<>(
                accountService.createTransactionalAccountFromPlan(
                        inputDTO,
                        cardAtmUserDetails.getCard().getUser(),
                        cardAtmUserDetails.getCard()),
                HttpStatus.OK);
    }

    @PostMapping(value = "/saving/plan", produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
    private ResponseEntity<SavingAccount> createSavingAccountFromPlan(@AuthenticationPrincipal CardAtmUserDetails cardAtmUserDetails,
                                                                      @RequestBody @Valid SavingPlanInputDTO inputDTO) {
        return new ResponseEntity<>(
                accountService.createSavingAccountFromPlan(
                        inputDTO,
                        cardAtmUserDetails.getCard().getUser(),
                        cardAtmUserDetails.getCard()),
                HttpStatus.OK);
    }

    @GetMapping(value = "/currency", produces = MediaType.APPLICATION_JSON_VALUE)
    private List<String> getTransactionalCurrency() {
        return MoneyUtil.getAllCurrencies();
    }

    @PatchMapping(value = "/saving/terminate-contract/{accountId}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<SavingAccount> terminateSavingContract(@AuthenticationPrincipal CardAtmUserDetails cardAtmUserDetails, @PathVariable Long accountId) throws AccountStatusException, RightsViolationException, ResourceNotFoundException {
        return new ResponseEntity<>(accountService.terminateSavingContract(accountId, cardAtmUserDetails.getCard().getUser().getId()), HttpStatus.OK);
    }

    @PatchMapping(value = "/saving/fire-contract/{accountId}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<SavingAccount> fireAccumulatingSavingAccount(@AuthenticationPrincipal CardAtmUserDetails cardAtmUserDetails, @PathVariable Long accountId) throws AccountStatusException, RightsViolationException, ResourceNotFoundException {
        return new ResponseEntity<>(accountService.fireAccumulatingSavingAccount(accountId, cardAtmUserDetails.getCard().getUser().getId()), HttpStatus.OK);
    }

    @GetMapping(path = "/auth", produces = MediaType.APPLICATION_JSON_VALUE)
    private CardAtmUserDetails getAuth(@AuthenticationPrincipal CardAtmUserDetails cardAtmUserDetails) {
        return cardAtmUserDetails;
    }


}
