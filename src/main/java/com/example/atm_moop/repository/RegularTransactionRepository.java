package com.example.atm_moop.repository;

import com.example.atm_moop.domain.Account;
import com.example.atm_moop.domain.RegularTransaction;
import com.example.atm_moop.domain.enums.TRANSACTION_STATUS;
import com.example.atm_moop.dto.RegularTransactionInfo;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Transactional(readOnly = true)
public interface RegularTransactionRepository extends JpaRepository<RegularTransaction, Long> {
    @EntityGraph(attributePaths = {"fromAccount.user"})
    @Query("select r from RegularTransaction r where r.id = ?1")
    Optional<RegularTransaction> findByIdWithUser(Long id);

    @Transactional
    @Modifying(clearAutomatically = true)
    @Query("update RegularTransaction r set r.transactionStatus = ?1 where r.id = ?2")
    void updateTransactionStatusById(TRANSACTION_STATUS transactionStatus, Long id);


    @Query("select r from RegularTransaction r where r.fromAccount.id = ?1 order by r.startTime DESC")
    List<RegularTransactionInfo> findByFromAccountOrderByStartTimeDesc(Long accountId);




    @Transactional
    @Modifying
    @Query("update RegularTransaction r set r.transactionStatus = ?1, r.repeatsLeft = ?2 where r.id = ?3")
    void updateTransactionStatusAndRepeatsLeftById(TRANSACTION_STATUS transactionStatus, Integer repeatsLeft, Long id);

    @Transactional
    @Modifying
    @Query("update RegularTransaction r set r.repeatsLeft = ?1 where r.id = ?2")
    void updateRepeatsLeftById(Integer repeatsLeft, Long id);



}
