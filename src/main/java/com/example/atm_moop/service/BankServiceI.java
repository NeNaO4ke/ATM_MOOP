package com.example.atm_moop.service;

import com.example.atm_moop.domain.Bank;

import java.util.Optional;

public interface BankServiceI {
    Optional<Bank> getById(Long id);
}
