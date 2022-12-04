package com.example.atm_moop.repository;

import com.example.atm_moop.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.transaction.annotation.Transactional;

@Transactional(readOnly = true)
public interface UserRepository extends JpaRepository<User, Long> {
    User findByFirstNameIgnoreCase(String firstName);
}
