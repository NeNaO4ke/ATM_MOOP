package com.example.atm_moop.controller;

import com.example.atm_moop.domain.CardAtmUserDetails;
import com.example.atm_moop.domain.RegularTransaction;
import com.example.atm_moop.domain.RegularTransactionInfo;
import com.example.atm_moop.domain.TransferTransactionInfo;
import com.example.atm_moop.dto.RegularTransactionDTO;
import com.example.atm_moop.dto.ScheduledTransactionDTO;
import com.example.atm_moop.exception.AccountStatusException;
import com.example.atm_moop.exception.ResourceNotFoundException;
import com.example.atm_moop.exception.RightsViolationException;
import com.example.atm_moop.service.TransactionService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.projection.ProjectionFactory;
import org.springframework.data.projection.SpelAwareProxyProjectionFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import javax.validation.Valid;
import java.time.Period;
import java.time.format.DateTimeParseException;
import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping(value = "/api/transaction")
@CrossOrigin("http://localhost:4200")
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
    private ResponseEntity<?> createScheduled(@AuthenticationPrincipal CardAtmUserDetails cardAtmUserDetails, @RequestBody @Valid ScheduledTransactionDTO dto) throws AccountStatusException, RightsViolationException, ResourceNotFoundException {
        RegularTransaction scheduledTransaction = transactionService.createScheduledTransaction(cardAtmUserDetails.getCard().getUser().getId(), dto.getAmount(), dto.getSenderAccountId(), dto.getReceiverAccountId(), dto.getScheduledTime());
        ProjectionFactory pf = new SpelAwareProxyProjectionFactory();
        RegularTransactionInfo rp = pf.createProjection(RegularTransactionInfo.class, scheduledTransaction);
        return new ResponseEntity<>(rp, HttpStatus.OK);
    }

    @PostMapping(value = "/regular")
    private ResponseEntity<?> createRegular(@AuthenticationPrincipal CardAtmUserDetails cardAtmUserDetails, @RequestBody @Valid RegularTransactionDTO dto) throws AccountStatusException, RightsViolationException, ResourceNotFoundException {
        Period period = null;
        try {
            period = Period.parse(dto.getPeriod());
        } catch (DateTimeParseException e){
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, e.getMessage());
        }
        RegularTransaction regularTransaction = transactionService.createRegularTransaction(cardAtmUserDetails.getCard().getUser().getId(), dto.getAmount(), dto.getSenderAccountId(), dto.getReceiverAccountId(), dto.getScheduledTime(), period , dto.getInitialRepeats());
        ProjectionFactory pf = new SpelAwareProxyProjectionFactory();
        RegularTransactionInfo rp = pf.createProjection(RegularTransactionInfo.class, regularTransaction);
        return new ResponseEntity<>(rp, HttpStatus.OK);
    }

}
