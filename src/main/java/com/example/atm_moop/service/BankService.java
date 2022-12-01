package com.example.atm_moop.service;


import com.example.atm_moop.domain.Bank;
import com.example.atm_moop.repository.BankRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class BankService {

    private final BankRepository bankRepository;


    public Optional<Bank> getById(Long id){
        return bankRepository.findById(id);
    }

}
