package com.example.atm_moop.controller;

import com.example.atm_moop.domain.CardAtmUserDetails;
import com.example.atm_moop.domain.RegularTransaction;
import com.example.atm_moop.domain.RegularTransactionInfo;
import com.example.atm_moop.domain.TransferTransactionInfo;
import com.example.atm_moop.dto.RegularTransactionDTO;
import com.example.atm_moop.dto.ScheduledTransactionDTO;
import com.example.atm_moop.service.TransactionService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.projection.ProjectionFactory;
import org.springframework.data.projection.SpelAwareProxyProjectionFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping(value = "/api/transaction")
public class TransactionController {

    private final TransactionService transactionService;

    @GetMapping(value = "/history/{accountId}")
    private ResponseEntity<?> historyOfAccount(@PathVariable Long accountId) {
        List<TransferTransactionInfo> transactions = transactionService.getAllTransactionsForAccountById(accountId);
        return new ResponseEntity<>(transactions, HttpStatus.OK);
    }

    @GetMapping(value = "/history")
    private ResponseEntity<?> history(@AuthenticationPrincipal CardAtmUserDetails cardAtmUserDetails) {
        List<TransferTransactionInfo> transactions = transactionService.getHistoryOfTransferTransactions(cardAtmUserDetails.getCard().getUser().getId());
        return new ResponseEntity<>(transactions, HttpStatus.OK);
    }

    @PostMapping(value = "/scheduled")
    private ResponseEntity<?> createScheduled(@AuthenticationPrincipal CardAtmUserDetails cardAtmUserDetails, @RequestBody @Valid ScheduledTransactionDTO scheduledTransactionDTO){
        RegularTransaction scheduledTransaction = transactionService.createScheduledTransaction(scheduledTransactionDTO, cardAtmUserDetails);
        ProjectionFactory pf = new SpelAwareProxyProjectionFactory();
        RegularTransactionInfo rp = pf.createProjection(RegularTransactionInfo.class, scheduledTransaction);
        return new ResponseEntity<>(rp,HttpStatus.OK);
    }

    @PostMapping(value = "/regular")
    private ResponseEntity<?> createRegular(@AuthenticationPrincipal CardAtmUserDetails cardAtmUserDetails, @RequestBody @Valid RegularTransactionDTO regularTransactionDTO){
        RegularTransaction regularTransaction = transactionService.createRegularTransaction(regularTransactionDTO, cardAtmUserDetails);
        ProjectionFactory pf = new SpelAwareProxyProjectionFactory();
        RegularTransactionInfo rp = pf.createProjection(RegularTransactionInfo.class, regularTransaction);
        return new ResponseEntity<>(rp,HttpStatus.OK);
    }

}