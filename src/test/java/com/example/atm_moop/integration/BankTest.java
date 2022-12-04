package com.example.atm_moop.integration;

import com.example.atm_moop.TestDbSetup;
import com.example.atm_moop.domain.*;
import com.example.atm_moop.repository.UserRepository;
import com.example.atm_moop.service.BankService;
import lombok.RequiredArgsConstructor;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestInstance;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;

import javax.transaction.Transactional;
import java.util.Optional;

@Transactional
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@ActiveProfiles("test")
@RequiredArgsConstructor
@TestInstance(TestInstance.Lifecycle.PER_CLASS)
public class BankTest {


    @Autowired
    private TestDbSetup testDbSetup;

    @Autowired

    @BeforeAll
    public void setup(){
        testDbSetup.populate();
    }

    @Test
    public void bankTest(@Autowired BankService bankService) throws Exception {

        Optional<Bank> byId = bankService.getById(1L);

    }

}
