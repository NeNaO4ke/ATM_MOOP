package com.example.atm_moop.service.interfaces;

import com.example.atm_moop.domain.Bank;

import java.util.Optional;

public interface IBankService {
    Optional<Bank> getById(Long id);
}
