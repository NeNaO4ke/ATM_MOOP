package com.example.atm_moop.repository;

import com.example.atm_moop.domain.Account;
import com.example.atm_moop.domain.TransferTransaction;
import com.example.atm_moop.domain.TransferTransactionInfo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

import java.util.Collection;
import java.util.List;
@Transactional(readOnly = true)
public interface TransferTransactionRepository extends JpaRepository<TransferTransaction, Long> {
    @Query("select t from TransferTransaction t where t.fromAccount in ?1 or t.toAccount in ?1")
    List<TransferTransactionInfo> findByFromAccountInOrTo_accountIn(Collection<Account> fromAccounts);

    @Query("select t from TransferTransaction t where t.fromAccount = ?1 or t.toAccount = ?1")
    List<TransferTransactionInfo> findByFromAccountOrTo_account(Account account);

}


