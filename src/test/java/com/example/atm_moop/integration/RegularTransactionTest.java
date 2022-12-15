package com.example.atm_moop.integration;

import capital.scalable.restdocs.AutoDocumentation;
import capital.scalable.restdocs.jackson.JacksonResultHandlers;
import capital.scalable.restdocs.response.ResponseModifyingPreprocessors;
import com.example.atm_moop.TestDbSetup;
import com.example.atm_moop.domain.Transaction;
import com.example.atm_moop.domain.enums.TRANSACTION_STATUS;
import com.example.atm_moop.dto.RegularTransactionInfo;
import com.example.atm_moop.exception.AccountStatusException;
import com.example.atm_moop.exception.ResourceNotFoundException;
import com.example.atm_moop.exception.RightsViolationException;
import com.example.atm_moop.repository.TransactionRepository;
import com.example.atm_moop.service.AccountService;
import com.example.atm_moop.service.TransactionService;
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

import java.time.Instant;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
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
public class RegularTransactionTest {

    private final static String CARD_NUMBER = "2440735783328557";
    private final static String CARD_PIN = "5384";
    private final static String ATM_ID = "1";


    private final static String MOCK_USER = CARD_NUMBER + "\u2028" + ATM_ID;


    private RestDocumentationResultHandler documentationHandler;
    @Autowired
    private WebApplicationContext context;

    @Autowired
    private TestDbSetup testDbSetup;

    @Autowired
    private AccountService accountService;

    @Autowired
    private TransactionService transactionService;

    @Autowired
    private TransactionRepository<Transaction> transactionRepository;

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
    public void scheduleTransaction() throws Exception {
        //Invalid input
        mockMvc.perform(post("/api/transaction/scheduled")
                        .contentType(MediaType.APPLICATION_JSON_VALUE)
                        .content(String.format("{\"amount\": \"%d\", \"senderAccountId\": %d, \"receiverAccountId\": %d, \"scheduledTime\": %d}", 5, 1, 2, Instant.now().getEpochSecond() - 20)))
                .andExpect(status().isBadRequest());

        mockMvc.perform(post("/api/transaction/scheduled")
                        .contentType(MediaType.APPLICATION_JSON_VALUE)
                        .content(String.format("{\"amount\": \"%d\", \"senderAccountId\": %d, \"receiverAccountId\": %d, \"scheduledTime\": %d}", 5, 1, 2, Instant.now().getEpochSecond() + 3)))
                .andExpect(status().isOk());
    }

    @Test
    @WithUserDetails(value = MOCK_USER)
    public void regularTransaction() throws Exception {
        //Invalid input
        mockMvc.perform(post("/api/transaction/regular")
                        .contentType(MediaType.APPLICATION_JSON_VALUE)
                        .content(String.format("{\"amount\": \"%d\", \"senderAccountId\": %d, \"receiverAccountId\": %d, \"scheduledTime\": %d, \"period\": %s, \"initialRepeats\": %d}", -20, 1, 2, Instant.now().getEpochSecond() + 3, "\"P2Y\"", 0)))
                .andExpect(status().isBadRequest());

        mockMvc.perform(post("/api/transaction/regular")
                        .contentType(MediaType.APPLICATION_JSON_VALUE)
                        .content(String.format("{\"amount\": %d, \"senderAccountId\": %d, \"receiverAccountId\": %d, \"scheduledTime\": %d, \"period\": %s, \"initialRepeats\": %d}", 5, 1, 2, Instant.now().getEpochSecond() + 3, "\"P1M\"", 0)))
                .andDo(print())
                .andExpect(status().isOk());

    }

    @Test
    @WithUserDetails(value = MOCK_USER)
    public void getAllRegularTransactions() throws Exception {

        scheduleTransaction();

        regularTransaction();

        List<RegularTransactionInfo> allRegularTransactionsByFromAccountId = transactionService.getAllRegularTransactionsByFromAccountId(1L, 1L);
        System.out.println(allRegularTransactionsByFromAccountId);
        Long id = allRegularTransactionsByFromAccountId.get(0).getFromAccount().getId();
        mockMvc.perform(get("/api/transaction/regular/" + id))
                .andDo(print())
                .andExpect(status().isOk());


    }

    @Test
    @WithUserDetails(value = MOCK_USER)
    public void cancelRegularTransaction() throws Exception {

        scheduleTransaction();

        regularTransaction();

        List<RegularTransactionInfo> allRegularTransactionsByFromAccountId = transactionService.getAllRegularTransactionsByFromAccountId(1L, 1L);
        System.out.println(allRegularTransactionsByFromAccountId);
        Long transactionId1 = allRegularTransactionsByFromAccountId.get(0).getId();
        Long transactionId2 = allRegularTransactionsByFromAccountId.get(1).getId();

        transactionService.cancelRegularTransaction(transactionId1, 1L);
        assertEquals(TRANSACTION_STATUS.CANCELED, transactionRepository.findById(transactionId1).get().getTransactionStatus());

        mockMvc.perform(patch("/api/transaction/regular/cancel/" + transactionId2))
                .andDo(print())
                .andExpect(status().isOk());

        assertEquals(TRANSACTION_STATUS.CANCELED, transactionRepository.findById(transactionId2).get().getTransactionStatus());
    }


}
