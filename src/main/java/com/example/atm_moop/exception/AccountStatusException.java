package com.example.atm_moop.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.BAD_REQUEST)
public class AccountStatusException extends Exception {
    public AccountStatusException(String message)  {
        super(message);
    }
}
