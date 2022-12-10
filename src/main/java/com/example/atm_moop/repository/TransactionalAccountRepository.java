package com.example.atm_moop.repository;

import com.example.atm_moop.domain.Card;
import com.example.atm_moop.domain.TransactionalAccount;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
@Transactional(readOnly = true)
public interface TransactionalAccountRepository extends JpaRepository<TransactionalAccount, Long> {
    @EntityGraph(attributePaths = {"user"})
    @Query("select t from TransactionalAccount t where t.id = ?1")
    Optional<TransactionalAccount> findAccountByIdWithUser(Long id);

    @Query("select t from TransactionalAccount t where t.card = ?1 and t.isDefault = true")
    List<TransactionalAccount> findTransactionalAccountByCardAndDefaultIsTrue(Card card);


}
