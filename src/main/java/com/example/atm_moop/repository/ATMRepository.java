package com.example.atm_moop.repository;

import com.example.atm_moop.domain.ATM;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
@Transactional(readOnly = true)
public interface ATMRepository extends JpaRepository<ATM, Long> {
    @EntityGraph(attributePaths = {"banks"})
    @Query("select a from ATM a")
    List<ATM> findAllAtmsWithBank();

}
