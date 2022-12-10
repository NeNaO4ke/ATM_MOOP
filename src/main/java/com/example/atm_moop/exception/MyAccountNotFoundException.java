package com.example.atm_moop.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class MyAccountNotFoundException extends Exception {
    public MyAccountNotFoundException(String message) {
        super(message);
    }

}
