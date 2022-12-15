package com.example.atm_moop.service;


import com.example.atm_moop.domain.Bank;
import com.example.atm_moop.repository.BankRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class BankService implements com.example.atm_moop.service.interfaces.IBankService {

    private final BankRepository bankRepository;



    @Override
    public Optional<Bank> getById(Long id){
        return bankRepository.findById(id);
    }

}
