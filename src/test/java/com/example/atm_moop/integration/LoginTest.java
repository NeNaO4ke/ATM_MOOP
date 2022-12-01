package com.example.atm_moop.integration;

import com.example.atm_moop.TestDbSetup;
import com.example.atm_moop.domain.Card;
import com.example.atm_moop.domain.LoginAttempt;
import com.example.atm_moop.repository.LoginAttemptRepository;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestInstance;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.security.test.context.support.WithUserDetails;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.jdbc.Sql;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;

import javax.transaction.Transactional;

import static org.hamcrest.CoreMatchers.containsString;
import static org.springframework.security.test.web.servlet.request.SecurityMockMvcRequestBuilders.formLogin;
import static org.springframework.security.test.web.servlet.response.SecurityMockMvcResultMatchers.unauthenticated;
import static org.springframework.security.test.web.servlet.setup.SecurityMockMvcConfigurers.springSecurity;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;


@Transactional
@ActiveProfiles("test")
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@TestInstance(TestInstance.Lifecycle.PER_CLASS)
public class LoginTest {

    private final static String CARD_NUMBER = "2440735783328557";
    private final static String CARD_PIN = "5384";
    private final static String ATM_ID = "1";


    private final static String MOCK_USER = CARD_NUMBER + "\u2028" + ATM_ID;


    @Autowired
    private WebApplicationContext context;

    @Autowired
    private TestDbSetup testDbSetup;

    @Autowired
    private LoginAttemptRepository loginAttemptRepository;

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
    public void loginAvailableForAll() throws Exception {
        mockMvc
                .perform(get("/login"))
                .andExpect(status().isOk());
    }

    @Test
    public void adminCanLog() throws Exception {
        mockMvc
                .perform(formLogin()
                        .user("number", "2322010770142855")
                        .password("pin", "6708")
                )
                .andExpect(status().isOk());
        //       .andExpect(redirectedUrl("/"))
        //        .andExpect(authenticated().withUsername(AppSecurityAdmin.ADMIN_USERNAME));

//        mockMvc
//                .perform(logout())
//                .andExpect(status().isFound())
//                .andExpect(redirectedUrl("/"));
    }


    @Test
    @WithUserDetails(value = MOCK_USER)
    public void getAuth() throws Exception {
        mockMvc
                .perform(get("/api/account/auth"))
                .andExpect(status().isOk());
    }

    @Test
    public void login() throws Exception {
        mockMvc.perform(post("/login")
                        .contentType(MediaType.APPLICATION_FORM_URLENCODED_VALUE)
                        .param("number", CARD_NUMBER)
                        .param("pin", CARD_PIN)
                        .param("atm", ATM_ID))
                .andExpect(status().isOk())
                .andDo(print());
    }

    @Test
    public void invalidLogin() throws Exception {
        mockMvc.perform(post("/login")
                        .contentType(MediaType.APPLICATION_FORM_URLENCODED_VALUE)
                        .param("number", CARD_NUMBER)
                        .param("pin", "9999")
                        .param("atm", ATM_ID))
                .andDo(print());
    }


    @Test
    public void invalidLoginWithCardBlock() throws Exception {
        invalidLogin();
        invalidLogin();
        login();
        invalidLogin();
        invalidLogin();
        invalidLogin();
    }


}
