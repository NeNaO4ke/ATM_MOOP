package com.example.atm_moop.integration;

import com.example.atm_moop.TestDbSetup;
import com.example.atm_moop.domain.Bank;
import com.example.atm_moop.repository.UserRepository;
import com.example.atm_moop.service.BankService;
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
import java.util.Optional;

import static org.springframework.security.test.web.servlet.setup.SecurityMockMvcConfigurers.springSecurity;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.put;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@Transactional
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@ActiveProfiles("test")
@RequiredArgsConstructor
@TestInstance(TestInstance.Lifecycle.PER_CLASS)
public class CardTest {

    private final static String CARD_NUMBER = "2440735783328557";
    private final static String CARD_PIN = "5384";
    private final static String ATM_ID = "1";


    private final static String MOCK_USER = CARD_NUMBER + "\u2028" + ATM_ID;


    @Autowired
    private WebApplicationContext context;

    @Autowired
    private TestDbSetup testDbSetup;

    @Autowired
    private CardService cardService;


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
        testDbSetup.populate();
    }

    @Test
    @WithUserDetails(value = MOCK_USER)
    public void updatePin() throws Exception {
        mockMvc.perform(put("/api/card/update-pin")
                        .contentType(MediaType.MULTIPART_FORM_DATA_VALUE)
                        .requestAttr("pin", "1111"))
                .andExpect(status().isOk());
    }

    @Test
    public void verifyAtmSupportBank() throws Exception {

        mockMvc.perform(post("/api/card/verify-atm-support-bank")
                        .contentType(MediaType.APPLICATION_JSON_VALUE)
                        .content(String.format("{\"cardNumber\": \"%s\", \"atmId\": %d}", CARD_NUMBER, 1)))
                .andExpect(status().isOk());

        //Valid input body, but cardNumber is not present in DB
        mockMvc.perform(post("/api/card/verify-atm-support-bank")
                        .contentType(MediaType.APPLICATION_JSON_VALUE)
                        .content(String.format("{\"cardNumber\": \"%s\", \"atmId\": %d}", "4024007160774062", 1)))
                .andExpect(status().isNotFound());

        //Valid input body, but atmId is not present in DB
        mockMvc.perform(post("/api/card/verify-atm-support-bank")
                        .contentType(MediaType.APPLICATION_JSON_VALUE)
                        .content(String.format("{\"cardNumber\": \"%s\", \"atmId\": %d}", CARD_NUMBER, 112345453)))
                .andExpect(status().isNotFound());

        //Invalid body: cardNumber
        mockMvc.perform(post("/api/card/verify-atm-support-bank")
                        .contentType(MediaType.APPLICATION_JSON_VALUE)
                        .content(String.format("{\"cardNumber\": \"%s\", \"atmId\": %d}", "0000", 1)))
                .andExpect(status().isBadRequest());

        //Invalid body: atmId
        mockMvc.perform(post("/api/card/verify-atm-support-bank")
                        .contentType(MediaType.APPLICATION_JSON_VALUE)
                        .content(String.format("{\"cardNumber\": \"%s\", \"atmId\": %d}", CARD_NUMBER, -1)))
                .andExpect(status().isBadRequest());
    }


}
