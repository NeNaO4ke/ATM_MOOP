package com.example.atm_moop.repository;

import com.example.atm_moop.domain.Transaction;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TransactionRepository<T extends Transaction> extends JpaRepository<T, Long> {
}
