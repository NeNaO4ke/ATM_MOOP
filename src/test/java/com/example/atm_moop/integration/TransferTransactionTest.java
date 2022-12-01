package com.example.atm_moop.integration;

import com.example.atm_moop.TestDbSetup;
import com.example.atm_moop.domain.User;
import com.example.atm_moop.domain.enums.USER_STATUS;
import com.example.atm_moop.service.AccountService;
import com.example.atm_moop.service.CardService;
import lombok.RequiredArgsConstructor;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestInstance;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.security.test.context.support.WithUserDetails;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;

import javax.transaction.Transactional;

import java.math.BigDecimal;

import static org.springframework.security.test.web.servlet.setup.SecurityMockMvcConfigurers.springSecurity;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.put;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

//@Transactional
//@ActiveProfiles("test")
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@RequiredArgsConstructor
@TestInstance(TestInstance.Lifecycle.PER_CLASS)
public class TransferTransactionTest {

    private final static String CARD_NUMBER = "2440735783328557";
    private final static String CARD_PIN = "5384";
    private final static String ATM_ID = "1";


    private final static String MOCK_USER = CARD_NUMBER + "\u2028" + ATM_ID;


    @Autowired
    private WebApplicationContext context;

    @Autowired
    private TestDbSetup testDbSetup;

    @Autowired
    private AccountService accountService;


    private MockMvc mockMvc;

    @BeforeEach
    public void setup() {
        mockMvc = MockMvcBuilders
                .webAppContextSetup(context)
                .apply(springSecurity())
                .alwaysDo(print())
                .build();
    }

    @BeforeAll
    public void setupBeforeAll() {
      //  testDbSetup.populate();
    }

    @Test
    @WithUserDetails(value = MOCK_USER)
    public void transferFromTransactionalToTransactional() throws Exception {

        mockMvc.perform(put("/api/transfer")
                        .contentType(MediaType.APPLICATION_JSON_VALUE)
                        .content(String.format("{\"amount\": \"%d\", \"senderAccountId\": %d, \"receiverAccountId\": %d}", 5, 1, 2)))
                .andExpect(status().isOk());

        mockMvc.perform(put("/api/transfer")
                        .contentType(MediaType.APPLICATION_JSON_VALUE)
                        .content(String.format("{\"amount\": \"%d\", \"senderAccountId\": %d, \"receiverAccountId\": %d}", 96, 1, 2)))
                .andExpect(status().isBadRequest());

    }

    @Test
    @WithUserDetails(value = MOCK_USER)
    public void deposit() throws Exception {

        mockMvc.perform(post("/api/transfer/deposit")
                        .contentType(MediaType.APPLICATION_JSON_VALUE)
                        .content(String.format("{\"amount\": \"%d\"}", 50)))
                .andExpect(status().isOk());


    }

    @Test
    @WithUserDetails(value = MOCK_USER)
    public void withdraw() throws Exception {

        mockMvc.perform(post("/api/transfer/withdraw")
                        .contentType(MediaType.APPLICATION_JSON_VALUE)
                        .content(String.format("{\"amount\": \"%d\"}", 289)))
                .andExpect(status().isOk());
        deposit();
        deposit();
        deposit();


    }

}
