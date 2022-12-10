package com.example.atm_moop.repository;

import com.example.atm_moop.domain.Transaction;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.transaction.annotation.Transactional;
@Transactional(readOnly = true)
public interface TransactionRepository<T extends Transaction> extends JpaRepository<Transaction, Long> {

}
