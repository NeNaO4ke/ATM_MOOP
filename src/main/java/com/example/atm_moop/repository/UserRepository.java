package com.example.atm_moop.repository;

import com.example.atm_moop.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
    User findByFirstNameIgnoreCase(String firstName);
}
