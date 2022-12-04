package com.example.atm_moop.controller;

import com.example.atm_moop.domain.CardAtmUserDetails;
import com.example.atm_moop.domain.RegularTransaction;
import com.example.atm_moop.domain.TransferTransaction;
import com.example.atm_moop.domain.TransferTransactionInfo;
import com.example.atm_moop.dto.CardAtmInputDTO;
import com.example.atm_moop.dto.RegularTransactionDTO;
import com.example.atm_moop.dto.ScheduledTransactionDTO;
import com.example.atm_moop.dto.TransferInputDTO;
import com.example.atm_moop.service.TransactionService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
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
        transactionService.createScheduledTransaction(scheduledTransactionDTO, cardAtmUserDetails);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PostMapping(value = "/regular")
    private ResponseEntity<?> createRegular(@AuthenticationPrincipal CardAtmUserDetails cardAtmUserDetails, @RequestBody @Valid RegularTransactionDTO regularTransactionDTO){
        RegularTransaction regularTransaction = transactionService.createRegularTransaction(regularTransactionDTO, cardAtmUserDetails);
        return new ResponseEntity<>(regularTransaction,HttpStatus.OK);
    }

}
