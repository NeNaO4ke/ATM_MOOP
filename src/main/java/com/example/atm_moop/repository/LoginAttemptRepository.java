package com.example.atm_moop.repository;

import com.example.atm_moop.domain.Card;
import com.example.atm_moop.domain.LoginAttempt;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.sql.Timestamp;
import java.util.List;

@Repository
@Transactional(readOnly = true)
public interface LoginAttemptRepository extends JpaRepository<LoginAttempt, Long> {

    List<LoginAttempt> findTop3ByCardAndAtBetweenOrderByAtDesc(Card card, Timestamp start, Timestamp end);

}
