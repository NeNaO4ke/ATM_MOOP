package com.example.atm_moop.repository;

import com.example.atm_moop.domain.Account;
import com.example.atm_moop.domain.enums.ACCOUNT_TYPE;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;


@Transactional(readOnly = true)
public interface AccountRepository<T extends Account> extends JpaRepository<T, Long> {
    List<Account> findByUserId(Long userId);

    @EntityGraph(attributePaths = {"user"})
    @Query("select t from Account t where t.id = ?1")
    Optional<Account> findByIdWithUser(Long id);


}
