package com.example.atm_moop.repository;

import com.example.atm_moop.domain.ATM;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ATMRepository extends JpaRepository<ATM, Long> {
}
