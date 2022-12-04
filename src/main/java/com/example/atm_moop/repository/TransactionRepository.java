package com.example.atm_moop.repository;

import com.example.atm_moop.domain.Account;
import com.example.atm_moop.domain.Transaction;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
@Transactional(readOnly = true)
public interface TransactionRepository<T extends Transaction> extends JpaRepository<Transaction, Long> {

}
