package com.example.atm_moop.integration;

import capital.scalable.restdocs.AutoDocumentation;
import capital.scalable.restdocs.jackson.JacksonResultHandlers;
import capital.scalable.restdocs.response.ResponseModifyingPreprocessors;
import com.example.atm_moop.exception.AccountStatusException;
import com.example.atm_moop.exception.ResourceNotFoundException;
import com.example.atm_moop.exception.RightsViolationException;
import com.example.atm_moop.service.AccountService;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestInstance;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.restdocs.RestDocumentationContextProvider;
import org.springframework.restdocs.RestDocumentationExtension;
import org.springframework.restdocs.cli.CliDocumentation;
import org.springframework.restdocs.http.HttpDocumentation;
import org.springframework.restdocs.mockmvc.MockMvcRestDocumentation;
import org.springframework.restdocs.mockmvc.RestDocumentationResultHandler;
import org.springframework.restdocs.operation.preprocess.Preprocessors;
import org.springframework.restdocs.templates.TemplateFormats;
import org.springframework.security.test.context.support.WithUserDetails;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.context.WebApplicationContext;

import static org.springframework.restdocs.mockmvc.MockMvcRestDocumentation.document;
import static org.springframework.restdocs.mockmvc.MockMvcRestDocumentation.documentationConfiguration;
import static org.springframework.restdocs.operation.preprocess.Preprocessors.*;
import static org.springframework.restdocs.payload.PayloadDocumentation.requestBody;
import static org.springframework.security.test.web.servlet.setup.SecurityMockMvcConfigurers.springSecurity;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@Transactional
@ActiveProfiles("presentation")
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@RequiredArgsConstructor
@ExtendWith({RestDocumentationExtension.class, SpringExtension.class})
@TestInstance(TestInstance.Lifecycle.PER_CLASS)
public class TransferTransactionTest {

    private final static String CARD_NUMBER = "2440735783328557";
    private final static String CARD_PIN = "5384";
    private final static String ATM_ID = "1";


    private final static String MOCK_USER = CARD_NUMBER + "\u2028" + ATM_ID;

    private RestDocumentationResultHandler documentationHandler;
    @Autowired
    private WebApplicationContext context;


    @Autowired
    private AccountService accountService;

    @Autowired
    protected ObjectMapper objectMapper;
    private MockMvc mockMvc;

    @BeforeEach
    public void setup(RestDocumentationContextProvider restDocumentation) {

        this.documentationHandler = document("{method-name}/{step}",
                preprocessRequest(prettyPrint()),
                preprocessResponse(prettyPrint()));


        mockMvc = MockMvcBuilders
                .webAppContextSetup(context)
                .apply(springSecurity())
                .apply(documentationConfiguration(restDocumentation)
                        .snippets()
                        .withTemplateFormat(TemplateFormats.asciidoctor())
                        .withDefaults(CliDocumentation.curlRequest(),
                                HttpDocumentation.httpRequest(),
                                HttpDocumentation.httpResponse(),
                                AutoDocumentation.requestFields(),
                                AutoDocumentation.responseFields(),
                                AutoDocumentation.pathParameters(),
                                AutoDocumentation.requestParameters(),
                                AutoDocumentation.description(),
                                AutoDocumentation.methodAndPath(),
                                requestBody(),
                                AutoDocumentation.section()))
                .alwaysDo(JacksonResultHandlers.prepareJackson(objectMapper))
                .alwaysDo(MockMvcRestDocumentation.document("{class-name}/{method-name}",
                        Preprocessors.preprocessRequest(),
                        Preprocessors.preprocessResponse(
                                ResponseModifyingPreprocessors.replaceBinaryContent(),
                                ResponseModifyingPreprocessors.limitJsonArrayLength(objectMapper),
                                Preprocessors.prettyPrint())))
                .build();
    }

    @BeforeAll
    public void setupBeforeAll() throws AccountStatusException, RightsViolationException, ResourceNotFoundException {
     //   testDbSetup.populate();
    }

    @Test
    @WithUserDetails(value = MOCK_USER)
    public void transferFromTransactional() throws Exception {

        mockMvc.perform(put("/api/transfer/")
                        .contentType(MediaType.APPLICATION_JSON_VALUE)
                        .content(String.format("{\"amount\": \"%d\", \"senderAccountId\": %d, \"receiverAccountId\": %d}", 1000000, 1, 3)))
                .andExpect(status().isBadRequest());
        mockMvc.perform(put("/api/transfer/")
                        .contentType(MediaType.APPLICATION_JSON_VALUE)
                        .content(String.format("{\"amount\": \"%d\", \"senderAccountId\": %d, \"receiverAccountId\": %d}", 5, 1, 3)))
                .andExpect(status().isOk())
                .andDo(print());


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
                        .content(String.format("{\"amount\": \"%d\"}", 50)))
                .andExpect(status().isOk());

    }

    @Test
    @WithUserDetails(value = MOCK_USER)
    public void historyOfAllTransfers() throws Exception {

        transferFromTransactional();
        transferFromTransactional();
        mockMvc.perform(get("/api/transaction/history"))
                .andExpect(status().isOk())
                .andReturn();

    }

    @Test
    @WithUserDetails(value = MOCK_USER)
    public void historyOfAccount() throws Exception {
        transferFromTransactional();
        transferFromTransactional();
        mockMvc.perform(get("/api/transaction/history/3"))
                .andExpect(status().isOk())
                .andDo(print());

    }

}
