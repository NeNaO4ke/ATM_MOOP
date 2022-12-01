package com.example.atm_moop.repository;

import com.example.atm_moop.domain.TransferTransaction;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TransferTransactionRepository extends JpaRepository<TransferTransaction, Long> {
}
