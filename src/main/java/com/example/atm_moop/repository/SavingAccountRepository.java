package com.example.atm_moop.repository;

import com.example.atm_moop.domain.SavingAccount;
import com.example.atm_moop.domain.SavingAccountPlan;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

@Transactional(readOnly = true)
public interface SavingAccountRepository extends JpaRepository<SavingAccount, Long> {
    @Transactional
    @Modifying
    @Query("update SavingAccount s set s.savingAccountPlan = ?1 where s.id = ?2")
    void updateSavingAccountPlanById(SavingAccountPlan savingAccountPlan, Long id);
}
