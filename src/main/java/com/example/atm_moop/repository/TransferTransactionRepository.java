package com.example.atm_moop.repository;

import com.example.atm_moop.domain.Account;
import com.example.atm_moop.domain.TransferTransaction;
import com.example.atm_moop.dto.TransferTransactionInfo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

import java.sql.Timestamp;
import java.util.Collection;
import java.util.List;
@Transactional(readOnly = true)
public interface TransferTransactionRepository extends JpaRepository<TransferTransaction, Long> {
    @Query("select t from TransferTransaction t where t.fromAccount in ?1 or t.toAccount in ?1")
    List<TransferTransactionInfo> findByFromAccountInOrToAccountIn(Collection<Account> fromAccounts);

    @Query("select t from TransferTransaction t where t.fromAccount = ?1 or t.toAccount = ?1")
    List<TransferTransactionInfo> findByFromAccountOrToAccountSingle(Account account);

    @Query("select t from TransferTransaction t where t.fromAccount = ?1 and t.startTime between ?2 and ?3")
    List<TransferTransaction> findByFromAccountAndStartTimeBetween(Account fromAccount, Timestamp startTimeStart, Timestamp startTimeEnd);




}


