package com.example.atm_moop.repository;

import com.example.atm_moop.domain.Bank;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;
@Transactional(readOnly = true)
public interface BankRepository extends JpaRepository<Bank, Long> {
    Optional<Bank> findByNameIgnoreCase(String name);


}
