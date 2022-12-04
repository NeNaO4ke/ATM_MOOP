package com.example.atm_moop.repository;

import com.example.atm_moop.domain.SavingAccount;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.transaction.annotation.Transactional;

@Transactional(readOnly = true)
public interface SavingAccountRepository extends JpaRepository<SavingAccount, Long> {
}
