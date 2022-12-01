package com.example.atm_moop.repository;

import com.example.atm_moop.domain.Bank;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface BankRepository extends JpaRepository<Bank, Long> {
    Optional<Bank> findByNameIgnoreCase(String name);


}
