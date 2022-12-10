package com.example.atm_moop.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.FORBIDDEN)
public class RightsViolationException extends Exception {
    public RightsViolationException(String message)  {
        super(message);
    }
}
