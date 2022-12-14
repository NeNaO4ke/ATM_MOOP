package com.example.atm_moop.integration;

import capital.scalable.restdocs.AutoDocumentation;
import capital.scalable.restdocs.jackson.JacksonResultHandlers;
import capital.scalable.restdocs.response.ResponseModifyingPreprocessors;
import com.example.atm_moop.TestDbSetup;
import com.example.atm_moop.domain.*;
import com.example.atm_moop.domain.enums.TRANSACTION_STATUS;
import com.example.atm_moop.domain.enums.TRANSACTION_TYPE;
import com.example.atm_moop.dto.SavingPlanInputDTO;
import com.example.atm_moop.exception.AccountStatusException;
import com.example.atm_moop.exception.ResourceNotFoundException;
import com.example.atm_moop.exception.RightsViolationException;
import com.example.atm_moop.service.AccountService;
import com.example.atm_moop.service.TransactionService;
import com.example.atm_moop.service.TransferService;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import org.javamoney.moneta.Money;
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

import java.math.BigDecimal;
import java.util.Objects;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.springframework.restdocs.mockmvc.MockMvcRestDocumentation.document;
import static org.springframework.restdocs.mockmvc.MockMvcRestDocumentation.documentationConfiguration;
import static org.springframework.restdocs.operation.preprocess.Preprocessors.*;
import static org.springframework.restdocs.operation.preprocess.Preprocessors.prettyPrint;
import static org.springframework.restdocs.payload.PayloadDocumentation.requestBody;
import static org.springframework.security.test.web.servlet.setup.SecurityMockMvcConfigurers.springSecurity;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@Transactional
@ActiveProfiles("presentation")
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@RequiredArgsConstructor
@ExtendWith({RestDocumentationExtension.class, SpringExtension.class})
@TestInstance(TestInstance.Lifecycle.PER_CLASS)
public class AccountTest {

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
    @Autowired
    private TransferService transferService;
    @Autowired
    private TransactionService transactionService;
    @Autowired
    protected ObjectMapper objectMapper;
    private RestDocumentationResultHandler documentationHandler;

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
                                //        AutoDocumentation.responseFields(),
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
    public void setupBeforeAll() {
        //testDbSetup.populate();
    }

    @Test
    @WithUserDetails(value = MOCK_USER)
    public void getTransactionalById() throws Exception {
        mockMvc.perform(get("/api/account/transactional/1"))
                .andExpect(status().isOk());
    }

    @Test
    @WithUserDetails(value = MOCK_USER)
    public void getSavingById() throws Exception {
        SavingAccount savingAccount = createSaveAccWithMoney();
        savingAccount = accountService.fireAccumulatingSavingAccount(savingAccount.getId(), 1L);
        mockMvc.perform(get("/api/account/saving/" + savingAccount.getId()))
                .andExpect(status().isOk()).andDo(print());
    }

    @Test
    @WithUserDetails(value = MOCK_USER)
    public void getTransactionalAccountById() throws Exception {
        mockMvc.perform(get("/api/account/1"))
                .andExpect(status().isOk()).andDo(print());

    }

    @Test
    @WithUserDetails(value = MOCK_USER)
    public void createTransactionalFromPlan() throws Exception {
        mockMvc.perform(post("/api/account/transactional/plan")
                        .contentType(MediaType.APPLICATION_JSON_VALUE)
                        .content(String.format("{\"plan\": \"%s\", \"currencyUnitCode\": \"%s\", \"accountName\": \"%s\"}", "MEDIUM", "USD", "Test acc")))
                .andExpect(status().isOk());
    }

    @Test
    @WithUserDetails(value = MOCK_USER)
    public void createSavingFromPlan() throws Exception {
        SavingPlanInputDTO savingPlanInputDTO = new SavingPlanInputDTO(SavingAccountPlan.LONG, "UAH", "New acc");
        User user = new User();
        user.setId(1L);
        Card card = new Card();
        card.setNumber(CARD_NUMBER);
        TransactionalAccount jarAcc = new TransactionalAccount();
        jarAcc.setId(2L);
        SavingAccount savingAccount = accountService.createSavingAccountFromPlan(savingPlanInputDTO, user, card);
        Long savAccId = savingAccount.getId();
        transferService.transfer(1L, 1L, savAccId, BigDecimal.valueOf(60));
        savingAccount = accountService.fireAccumulatingSavingAccount(savAccId, 1L);
        TransferTransaction transferTransaction = TransferTransaction.createTransferTransaction(TRANSACTION_TYPE.TRANSFERRING, Money.of(BigDecimal.valueOf(25), savingAccount.getBalance().getCurrency()), null, savingAccount, jarAcc);
        transferTransaction.setTransactionStatus(TRANSACTION_STATUS.COMMITTED);
        TransferTransaction transferTransaction2 = TransferTransaction.createTransferTransaction(TRANSACTION_TYPE.TRANSFERRING, Money.of(BigDecimal.valueOf(25), savingAccount.getBalance().getCurrency()), null, savingAccount, jarAcc);
        transferTransaction.setTransactionStatus(TRANSACTION_STATUS.COMMITTED);
        savingAccount.setPaymentStepsLeft(1);
        accountService.save(savingAccount);
        transactionService.save(transferTransaction);
        transactionService.save(transferTransaction2);
        accountService.terminateSavingContract(savAccId, user.getId());

        mockMvc.perform(post("/api/account/saving/plan")
                        .contentType(MediaType.APPLICATION_JSON_VALUE)
                        .content(String.format("{\"plan\": %d, \"currencyUnitCode\": \"%s\", \"accountName\": \"%s\"}", 2, "USD", "Test acc name")))
                .andExpect(status().isOk())
                .andDo(print());

    }

    @Test
    @WithUserDetails(value = MOCK_USER)
    public void fireSavingContract() throws Exception{
        SavingAccount savingAccount = createSaveAccWithMoney();
        savingAccount = accountService.fireAccumulatingSavingAccount(savingAccount.getId(), 1L);

        mockMvc.perform(patch("/api/account/saving/fire-contract/" + savingAccount.getId()))
                .andExpect(status().isBadRequest())
                .andExpect(result -> assertEquals("Your account already accumulating.", Objects.requireNonNull(result.getResolvedException()).getMessage()));


        SavingAccount savingAccount2 = createSaveAccWithMoney();

        mockMvc.perform(patch("/api/account/saving/fire-contract/" + savingAccount2.getId()))
                .andExpect(status().isOk());



    }

    @Test
    @WithUserDetails(value = MOCK_USER)
    public void terminateSavingContract() throws Exception{
        SavingAccount savingAccount = createSaveAccWithMoney();

        mockMvc.perform(patch("/api/account/saving/terminate-contract/" + savingAccount.getId()))
                .andExpect(status().isBadRequest())
                .andExpect(result -> assertEquals("You don`t have any contract.", Objects.requireNonNull(result.getResolvedException()).getMessage()));


        savingAccount = accountService.fireAccumulatingSavingAccount(savingAccount.getId(), 1L);

        mockMvc.perform(patch("/api/account/saving/terminate-contract/" + savingAccount.getId()))
                .andExpect(status().isOk());



    }

    @Test
    @WithUserDetails(value = MOCK_USER)
    public void changeSavingPlan() throws Exception{
        SavingAccount savingAccount = createSaveAccWithMoney();

        mockMvc.perform(patch("/api/account/saving/change-plan/"+savingAccount.getId()+"/" + SavingAccountPlan.EXTRA_QUICK.getId()))
                .andExpect(status().isOk())
                .andDo(print());


        savingAccount = accountService.fireAccumulatingSavingAccount(savingAccount.getId(), 1L);

        mockMvc.perform(patch("/api/account/saving/change-plan/"+savingAccount.getId()+"/" + SavingAccountPlan.EXTRA_QUICK.getId()))
                .andExpect(status().isBadRequest())
                .andDo(print());

        SavingAccount savingAccount2 = createSaveAccWithMoney();

        mockMvc.perform(patch("/api/account/saving/change-plan/"+savingAccount2.getId()+"/" + SavingAccountPlan.EXTRA_QUICK.getId()))
                .andExpect(status().isOk())
                .andDo(print());

    }

    private SavingAccount createSaveAccWithMoney() throws AccountStatusException, ResourceNotFoundException, RightsViolationException {
        SavingPlanInputDTO savingPlanInputDTO = new SavingPlanInputDTO(SavingAccountPlan.LONG, "UAH", "New acc");
        User user = new User();
        user.setId(1L);
        Card card = new Card();
        card.setNumber(CARD_NUMBER);
        TransactionalAccount jarAcc = new TransactionalAccount();
        jarAcc.setId(2L);
        SavingAccount savingAccount = accountService.createSavingAccountFromPlan(savingPlanInputDTO, user, card);
        Long savAccId = savingAccount.getId();
        transferService.transfer(1L, 1L, savAccId, BigDecimal.valueOf(60));
        return savingAccount;
    }

    @Test
    @WithUserDetails(value = MOCK_USER)
    public void getAllAccounts() throws Exception {
        mockMvc.perform(get("/api/account/all-my"))
                .andExpect(status().isOk());
    }

    @Test
    @WithUserDetails(value = MOCK_USER)
    public void getPlans() throws Exception {
        mockMvc.perform(get("/api/account/plans"))
                .andExpect(status().isOk());
    }

    @Test
    @WithUserDetails(value = MOCK_USER)
    public void getCurrencies() throws Exception {
        mockMvc.perform(get("/api/account/currency"))
                .andExpect(status().isOk());
    }


}
