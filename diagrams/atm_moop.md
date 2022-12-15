classDiagram
direction BT
class ACCOUNT_STATUS {
<<enumeration>>
  + ACCOUNT_STATUS() 
  +  OK
  +  FROZEN
  +  TERMINATED
  +  ACCUMULATING
  + valueOf(String) ACCOUNT_STATUS
  + values() ACCOUNT_STATUS[]
}
class ACCOUNT_TYPE {
<<enumeration>>
  + ACCOUNT_TYPE() 
  +  TRANSACTIONAL
  +  SAVING
  + valueOf(String) ACCOUNT_TYPE
  + values() ACCOUNT_TYPE[]
}
class ATM {
  + ATM(Long, String, ATM_STATUS, Set~Bank~) 
  + ATM() 
  - Long id
  - ATM_STATUS atmStatus
  - String address
  - Set~Bank~ banks
  + getId() Long
  + getAddress() String
  + getAtmStatus() ATM_STATUS
  + getBanks() Set~Bank~
  + setId(Long) void
  + setAddress(String) void
  + setAtmStatus(ATM_STATUS) void
  + setBanks(Set~Bank~) void
  + hashCode() int
  + equals(Object) boolean
}
class ATMRepository {
<<Interface>>
  + findAllAtmsWithBank() List~ATM~
}
class ATM_STATUS {
<<enumeration>>
  + ATM_STATUS() 
  +  UPDATING
  +  IDLE
  +  IN_USAGE
  +  DOWN
  + values() ATM_STATUS[]
  + valueOf(String) ATM_STATUS
}
class Account {
  + Account() 
  + Account(Long, ACCOUNT_TYPE, ACCOUNT_STATUS, String, MonetaryAmount, User, Card) 
  - String accountName
  - ACCOUNT_STATUS accountStatus
  - Card card
  - MonetaryAmount balance
  - Long id
  - User user
  - ACCOUNT_TYPE accountType
  + getId() Long
  + getAccountType() ACCOUNT_TYPE
  + setAccountName(String) void
  + setCard(Card) void
  + getAccountStatus() ACCOUNT_STATUS
  + setAccountStatus(ACCOUNT_STATUS) void
  + setUser(User) void
  + getAccountName() String
  + getBalance() MonetaryAmount
  + toString() String
  + getUser() User
  + getCard() Card
  + setId(Long) void
  + setBalance(MonetaryAmount) void
  + setAccountType(ACCOUNT_TYPE) void
}
class AccountController {
  + AccountController(AccountService) 
  - AccountService accountService
  - getSavingAccountById(CardAtmUserDetails, Long) ResponseEntity~SavingAccount~
  - getCurrency() List~String~
  - getTransactionalPlans() ResponseEntity~?~
  - getTransactionalAccountById(CardAtmUserDetails, Long) ResponseEntity~TransactionalAccount~
  - getAll(CardAtmUserDetails) List~Account~
  - terminateSavingContract(CardAtmUserDetails, Long) ResponseEntity~SavingAccount~
  - createTransactionalAccountFromPlan(CardAtmUserDetails, TransactionalPlanInputDTO) ResponseEntity~?~
  - createSavingAccountFromPlan(CardAtmUserDetails, SavingPlanInputDTO) ResponseEntity~SavingAccount~
  - getAuth(CardAtmUserDetails) CardAtmUserDetails
  - getAccountById(CardAtmUserDetails, Long) ResponseEntity~Account~
  - fireAccumulatingSavingAccount(CardAtmUserDetails, Long) ResponseEntity~SavingAccount~
  - changeSavingPlan(CardAtmUserDetails, Long, SavingAccountPlan) ResponseEntity~?~
}
class AccountInfo {
<<Interface>>
  + getId() Long
  + getAccountName() String
}
class AccountInfo {
<<Interface>>
  + getId() Long
}
class AccountRepository~T~ {
<<Interface>>
  + findByUserId(Long) List~Account~
  + findByIdWithUser(Long) Optional~Account~
}
class AccountService {
  + AccountService(AccountRepository~Account~, TransactionalAccountRepository, SavingAccountRepository, TransactionService) 
  - AccountRepository~Account~ accountRepository
  - TransactionalAccountRepository transactionalAccountRepository
  - SavingAccountRepository savingAccountRepository
  - TransactionService transactionService
  + getAccountById(Long, Long) Account
  + getSavingAccountById(Long, Long) SavingAccount
  + createTransactionalAccountFromPlan(TransactionalPlanInputDTO, User, Card) TransactionalAccount
  + getTransactionalAccountById(Long, Long) TransactionalAccount
  + changeSavingPlan(Long, Long, SavingAccountPlan) SavingAccount
  + save(Account) Account
  + createSavingAccountFromPlan(SavingPlanInputDTO, User, Card) SavingAccount
  + fireSavingContract(Long, Long) SavingAccount
  + getAllUserAccounts(Long) List~Account~
  + terminateSavingContract(Long, Long) SavingAccount
}
class AccountStatusException {
  + AccountStatusException(String) 
}
class AmountDTO {
  + AmountDTO(BigDecimal) 
  - AmountDTO() 
  - BigDecimal amount
  + getAmount() BigDecimal
  + equals(Object) boolean
  + hashCode() int
  + toString() String
}
class AtmController {
  + AtmController(ATMRepository) 
  - ATMRepository atmRepository
  - getAll() List~ATM~
}
class AtmMoopApplication {
  + AtmMoopApplication() 
  + main(String[]) void
}
class AuthSuccessHandler {
  + AuthSuccessHandler() 
  ~ ObjectMapper objectMapper
  + onAuthenticationSuccess(HttpServletRequest, HttpServletResponse, Authentication) void
}
class BadCredentialsHelper {
  + BadCredentialsHelper() 
  ~ ObjectMapper objectMapper
  + onAuthenticationFailure(HttpServletRequest, HttpServletResponse, AuthenticationException) void
}
class Bank {
  + Bank(Long, String, Set~ATM~) 
  + Bank() 
  - Long id
  - String name
  - Set~ATM~ atms
  + getId() Long
  + getName() String
  + getAtms() Set~ATM~
  + setId(Long) void
  + setName(String) void
  + setAtms(Set~ATM~) void
  + toString() String
  + hashCode() int
  + equals(Object) boolean
}
class BankRepository {
<<Interface>>
  + findByNameIgnoreCase(String) Optional~Bank~
}
class BankService {
  + BankService(BankRepository) 
  - BankRepository bankRepository
  + getById(Long) Optional~Bank~
}
class CARD_STATUS {
<<enumeration>>
  + CARD_STATUS() 
  +  CHEWED
  +  OK
  +  IN_USAGE
  +  BLOCKED
  + values() CARD_STATUS[]
  + valueOf(String) CARD_STATUS
}
class Card {
  + Card(String, String, Date, String, CARD_STATUS, User, Bank) 
  + Card() 
  - User user
  - Date expiryDate
  - Bank bank
  - String pin
  - CARD_STATUS cardStatus
  - String cvv
  - String number
  + getPin() String
  + setPin(String) void
  + getNumber() String
  + getExpiryDate() Date
  + getCvv() String
  + getCardStatus() CARD_STATUS
  + setCardStatus(CARD_STATUS) void
  + setCvv(String) void
  + getUser() User
  + getBank() Bank
  + toString() String
  + setExpiryDate(Date) void
  + setUser(User) void
  + setBank(Bank) void
  + setNumber(String) void
}
class CardAtmInputDTO {
  + CardAtmInputDTO(String, Long) 
  - CardAtmInputDTO() 
  - String cardNumber
  - Long atmId
  + getCardNumber() String
  + getAtmId() Long
  + equals(Object) boolean
  + hashCode() int
  + toString() String
}
class CardAtmUserDetails {
  + CardAtmUserDetails(Card, ATM) 
  - Card card
  - ATM atm
  + isCredentialsNonExpired() boolean
  + isEnabled() boolean
  + getCard() Card
  + getAtm() ATM
  + getAuthorities() Collection~GrantedAuthority~
  + getPassword() String
  + getUsername() String
  + isAccountNonExpired() boolean
  + isAccountNonLocked() boolean
}
class CardController {
  + CardController(CardService) 
  - CardService cardService
  - verifyAtmBank(CardAtmInputDTO) ResponseEntity~?~
  - updatePin(CardAtmUserDetails, PinDTO) ResponseEntity~?~
}
class CardRepository {
<<Interface>>
  + findCardWithBankByID(String) Optional~Card~
  + findCardBankUserDetails(String) Optional~Card~
  + updateCardStatusByNumber(CARD_STATUS, String) int
  + updatePinByNumber(String, String) void
}
class CardService {
  + CardService(CardRepository, ATMRepository, PaymentCardGeneratorImpl) 
  - CardRepository cardRepository
  - ATMRepository atmRepository
  - PaymentCardGeneratorImpl paymentCardGenerator
  + getCardByNumber(String) Optional~Card~
  + blockCardByNumber(String) boolean
  + changePin(Card, String) void
  + loadUserByUsername(String) UserDetails
  + verifyAtmSupportBank(String, Long) void
  + createCard(Bank, User) void
}
class CardType {
<<enumeration>>
  - CardType(Set~Long~, List~Integer~) 
  +  MASTERCARD
  - List~Integer~ lengths
  +  AMERICAN_EXPRESS
  - Set~Long~ prefixes
  +  VISA
  +  DISCOVER
  + valueOf(String) CardType
  - prefixesFromRange(Range[]) Set~Long~
  - list(T[]) List~T~
  + values() CardType[]
  + getPrefixes() Set~Long~
  + getLengths() List~Integer~
}
class DbDataInserter {
  + DbDataInserter() 
  ~ TransactionRepository~RegularTransaction~ regularTransactionTransactionRepository
  ~ ATMRepository atmRepository
  ~ UserRepository userRepository
  ~ AccountRepository~SavingAccount~ savAccountRepository
  ~ TransactionRepository~TransferTransaction~ transferTransactionTransactionRepository
  ~ TransferService transferService
  ~ SavingAccountRepository savingAccountRepository
  ~ AccountService accountService
  ~ BankRepository bankRepository
  ~ CardRepository cardRepository
  ~ AccountRepository~Account~ genAccountRepository
  ~ CardService cardService
  + populate() void
  - setup() void
}
class EncryptionConfig {
  + EncryptionConfig() 
  + passwordEncoder() PasswordEncoder
}
class HomePageController {
  + HomePageController() 
  + homePage() String
}
class IAccountService {
<<Interface>>
  + confirmOwnedByUser(Long, Long) void
  + fireSavingContract(Long, Long) SavingAccount
  + createSavingAccountFromPlan(SavingPlanInputDTO, User, Card) SavingAccount
  + getSavingAccountById(Long, Long) SavingAccount
  + changeSavingPlan(Long, Long, SavingAccountPlan) SavingAccount
  + getAccountWithOkStatus(Optional~T~) T
  + confirmAccountsIsNotTheSame(Long, Long) void
  + getResourceOrThrowException(Optional~T~) T
  + terminateSavingContract(Long, Long) SavingAccount
  + getAccountById(Long, Long) Account
  + save(Account) Account
  + createTransactionalAccountFromPlan(TransactionalPlanInputDTO, User, Card) TransactionalAccount
  + getAllUserAccounts(Long) List~Account~
  + getTransactionalAccountById(Long, Long) TransactionalAccount
}
class IBankService {
<<Interface>>
  + getById(Long) Optional~Bank~
}
class ICardService {
<<Interface>>
  + verifyAtmSupportBank(String, Long) void
  + loadUserByUsername(String) UserDetails
  + getCardByNumber(String) Optional~Card~
  + createCard(Bank, User) void
  + changePin(Card, String) void
  + blockCardByNumber(String) boolean
}
class ITransactionService {
<<Interface>>
  + getAllRegularTransactionsByFromAccountId(Long, Long) List~RegularTransactionInfo~
  + cancelRegularTransaction(Long, Long) void
  + getHistoryOfTransferTransactions(Long) List~TransferTransactionInfo~
  + createScheduledTransaction(Long, BigDecimal, Long, Long, Instant) RegularTransaction
  + save(TransferTransaction) TransferTransaction
  + getAllTransferTransactionsByFromAccountAndStartTimeBetween(Account, Timestamp, Timestamp) List~TransferTransaction~
  + fireScheduledTransaction(Long) void
  + createRegularTransaction(Long, BigDecimal, Long, Long, Instant, Period, Integer) RegularTransaction
  + fireRegularTransaction(Long, JobExecutionContext) void
  + getAllTransferTransactionsForAccountById(Long) List~TransferTransactionInfo~
}
class ITransferService {
<<Interface>>
  + deposit(Card, BigDecimal) void
  + withdraw(Card, BigDecimal) void
  + transfer(Long, Long, Long, BigDecimal) TransferTransaction
  + checkIfTransferAvailableAndGetAccounts(Long, Long, Long, BigDecimal) Pair~Account, Account~
}
class JacksonConfig {
  + JacksonConfig() 
  + objectMapper() ObjectMapper
}
class LoginAttempt {
  + LoginAttempt(Long, boolean, Timestamp, Card, ATM) 
  + LoginAttempt() 
  - ATM atm
  - Long id
  - boolean successful
  - Card card
  - Timestamp at
  + getAt() Timestamp
  + setAtm(ATM) void
  + getId() Long
  + isSuccessful() boolean
  + getCard() Card
  + getAtm() ATM
  + setId(Long) void
  + setSuccessful(boolean) void
  + setAt(Timestamp) void
  + setCard(Card) void
}
class LoginAttemptRepository {
<<Interface>>
  + findTop3ByCardAndAtBetweenOrderByAtDesc(Card, Timestamp, Timestamp) List~LoginAttempt~
}
class MonetaryAmountSerializer {
  + MonetaryAmountSerializer() 
  # MonetaryAmountSerializer(Class~MonetaryAmount~) 
  + serialize(MonetaryAmount, JsonGenerator, SerializerProvider) void
}
class MonetaryAmountUserType {
  + MonetaryAmountUserType() 
  - int[] SQL_TYPES
  + equals(Object, Object) boolean
  + disassemble(Object) Serializable
  + returnedClass() Class
  + assemble(Serializable, Object) Object
  + nullSafeGet(ResultSet, String[], SharedSessionContractImplementor, Object) Object
  + replace(Object, Object, Object) Object
  + isMutable() boolean
  + hashCode(Object) int
  + deepCopy(Object) Object
  + nullSafeSet(PreparedStatement, Object, int, SharedSessionContractImplementor) void
  + sqlTypes() int[]
}
class MoneyUtil {
  - MoneyUtil() 
  + extractCurrencyCode(MonetaryAmount) String
  + extractAmount(MonetaryAmount) BigDecimal
  + getAllCurrencies() List~String~
}
class MvcConfig {
  + MvcConfig() 
  + addResourceHandlers(ResourceHandlerRegistry) void
  + getRestTemplate() RestTemplate
}
class MyAccountNotFoundException {
  + MyAccountNotFoundException(String) 
}
class MyDaoProvider {
  + MyDaoProvider(LoginAttemptRepository, CardService) 
  - CardService cardService
  - LoginAttemptRepository loginAttemptRepository
  + setUserDetailsService(UserDetailsService) void
  + authenticate(Authentication) Authentication
}
class PaymentCardGenerator {
<<Interface>>
  + generateMapByCardTypes(int, CardType[]) Map~CardType, List~String~~
  + generateListByCardType(int, CardType) List~String~
  + generateByCardType(CardType) String
  + generateByPrefix(int, List~Integer~, Set~Long~) Map~Long, List~String~~
  + passesLuhnCheck(String) boolean
}
class PaymentCardGeneratorImpl {
  + PaymentCardGeneratorImpl() 
  - randomFromSet(Set~T~) T
  - calculateCheckDigit(String) int
  + passesLuhnCheck(String) boolean
  - generateCardNumber(Long, int) String
  - calculateLuhnSum(String, boolean) int
  - calculateCheckDigit(int) int
  + generateByPrefix(int, List~Integer~, Set~Long~) Map~Long, List~String~~
  + generateListByCardType(int, CardType) List~String~
  + generateByCardType(CardType) String
  - generateCardNumber(CardType) String
  - removeVarargDuplicates(T[]) Set~T~
  + generateMapByCardTypes(int, CardType[]) Map~CardType, List~String~~
}
class PeriodSerializer {
  # PeriodSerializer(Class~Period~) 
  + PeriodSerializer() 
  + format(Period) String
  + serialize(Period, JsonGenerator, SerializerProvider) void
}
class PeriodUserType {
  + PeriodUserType() 
  - int[] SQL_TYPES
  + disassemble(Object) Serializable
  + assemble(Serializable, Object) Object
  + sqlTypes() int[]
  + isMutable() boolean
  + nullSafeGet(ResultSet, String[], SharedSessionContractImplementor, Object) Object
  + deepCopy(Object) Object
  + replace(Object, Object, Object) Object
  + nullSafeSet(PreparedStatement, Object, int, SharedSessionContractImplementor) void
  + equals(Object, Object) boolean
  + returnedClass() Class
  + hashCode(Object) int
}
class PinDTO {
  + PinDTO(String) 
  - PinDTO() 
  - String pin
  + getPin() String
  + equals(Object) boolean
  + hashCode() int
  + toString() String
}
class QuartzRegularTransaction {
  + QuartzRegularTransaction() 
  - TransactionService transactionService
  + execute(JobExecutionContext) void
}
class QuartzScheduledTransaction {
  + QuartzScheduledTransaction() 
  - TransactionService transactionService
  + execute(JobExecutionContext) void
}
class Range {
  + Range(long, long) 
  - long end
  - long start
  + getEnd() long
  + size() long
  + getStart() long
}
class RegularTransaction {
  + RegularTransaction() 
  + RegularTransaction(Long, TRANSACTION_STATUS, TRANSACTION_TYPE, Timestamp, Timestamp, MonetaryAmount, Account, Account, Period, Timestamp, Integer, Integer) 
  - Period period
  - Timestamp scheduledTime
  - Integer repeatsLeft
  - Account toAccount
  - Integer initialRepeats
  + getRepeatsLeft() Integer
  + getToAccount() Account
  + getPeriod() Period
  + getScheduledTime() Timestamp
  + getInitialRepeats() Integer
  + setToAccount(Account) void
  + toString() String
  + setRepeatsLeft(Integer) void
  + setPeriod(Period) void
  + setScheduledTime(Timestamp) void
  + setInitialRepeats(Integer) void
  + createRegularTransaction(TRANSACTION_TYPE, MonetaryAmount, Account, Account, Period, Timestamp, Integer, Integer) RegularTransaction
  + createScheduledTransactionOf(TRANSACTION_TYPE, MonetaryAmount, Account, Account, Timestamp) RegularTransaction
}
class RegularTransactionDTO {
  + RegularTransactionDTO(BigDecimal, Long, Long, Instant, String, Integer) 
  - RegularTransactionDTO() 
  - Long senderAccountId
  - String period
  - Instant scheduledTime
  - Integer initialRepeats
  - BigDecimal amount
  - Long receiverAccountId
  + getAmount() BigDecimal
  + getSenderAccountId() Long
  + getReceiverAccountId() Long
  + getScheduledTime() Instant
  + getPeriod() String
  + getInitialRepeats() Integer
  + equals(Object) boolean
  + hashCode() int
  + toString() String
}
class RegularTransactionInfo {
<<Interface>>
  + getInitialRepeats() Integer
  + getTransactionStatus() TRANSACTION_STATUS
  + getAmount() MonetaryAmount
  + getFromAccount() AccountInfo
  + getRepeatsLeft() Integer
  + getTransactionType() TRANSACTION_TYPE
  + getScheduledTime() Timestamp
  + getPeriod() Period
  + getId() Long
  + getStartTime() Timestamp
  + getModifyTime() Timestamp
  + getToAccount() AccountInfo
}
class RegularTransactionRepository {
<<Interface>>
  + findByIdWithUser(Long) Optional~RegularTransaction~
  + updateRepeatsLeftById(Integer, Long) void
  + updateTransactionStatusById(TRANSACTION_STATUS, Long) void
  + findByFromAccountOrderByStartTimeDesc(Long) List~RegularTransactionInfo~
  + updateTransactionStatusAndRepeatsLeftById(TRANSACTION_STATUS, Integer, Long) void
}
class ResourceNotFoundException {
  + ResourceNotFoundException(String) 
}
class RightsViolationException {
  + RightsViolationException(String) 
}
class SavingAccount {
  + SavingAccount() 
  + SavingAccount(Long, ACCOUNT_STATUS, String, MonetaryAmount, User, Card, SavingAccountPlan, Integer, Timestamp, boolean, boolean, BigDecimal, BigDecimal, Integer) 
  - SavingAccountPlan savingAccountPlan
  - Integer paymentStepsLeft
  - Integer daysUntilNextPayment
  - BigDecimal currentEstimatedAmount
  - BigDecimal cumulativeAmount
  - boolean isCapitalizationOn
  - Timestamp accumulateStartTime
  - boolean autoRenewal
  + getAccumulateStartTime() Timestamp
  + setAutoRenewal(boolean) void
  + setDaysUntilNextPayment(Integer) void
  + getSavingAccountPlan() SavingAccountPlan
  + getPaymentStepsLeft() Integer
  + setCumulativeAmount(BigDecimal) void
  + isAutoRenewal() boolean
  + isCapitalizationOn() boolean
  + getCumulativeAmount() BigDecimal
  + toString() String
  + getCurrentEstimatedAmount() BigDecimal
  + getDaysUntilNextPayment() Integer
  + setCapitalizationOn(boolean) void
  + setPaymentStepsLeft(Integer) void
  + setAccumulateStartTime(Timestamp) void
  + setSavingAccountPlan(SavingAccountPlan) void
  + setCurrentEstimatedAmount(BigDecimal) void
  + applyPlanToAccount(SavingAccountPlan) void
  + resetSavingPlanToPlain() void
  + createFromPlan(SavingAccountPlan, String, String, User, Card) SavingAccount
}
class SavingAccountPlan {
<<enumeration>>
  - SavingAccountPlan(String, String, BigDecimal, Period, Period, Integer, boolean) 
  - Period totalPeriod
  +  PLAIN
  +  EXTRA_QUICK
  - Integer initialSteps
  +  QUICK
  +  STANDARD
  - BigDecimal interestRate
  +  LONG
  - boolean isAdditionAllowed
  - String id
  - String planName
  - Period paymentStepPeriod
  + getId() String
  + getPlanName() String
  + getInterestRate() BigDecimal
  + getPaymentStepPeriod() Period
  + getTotalPeriod() Period
  + getInitialSteps() Integer
  + isAdditionAllowed() boolean
  + valueOf(String) SavingAccountPlan
  + evaluateDaysUntilNextPayment() int
  + values() SavingAccountPlan[]
}
class SavingAccountRepository {
<<Interface>>
  + updateSavingAccountPlanById(SavingAccountPlan, Long) void
}
class SavingPlanInputDTO {
  + SavingPlanInputDTO(SavingAccountPlan, String, String) 
  - SavingPlanInputDTO() 
  - String currencyUnitCode
  - String accountName
  - SavingAccountPlan plan
  + getPlan() SavingAccountPlan
  + getCurrencyUnitCode() String
  + getAccountName() String
  + equals(Object) boolean
  + hashCode() int
  + toString() String
}
class ScheduledTransactionDTO {
  + ScheduledTransactionDTO(BigDecimal, Long, Long, Instant) 
  - ScheduledTransactionDTO() 
  - BigDecimal amount
  - Instant scheduledTime
  - Long senderAccountId
  - Long receiverAccountId
  + getAmount() BigDecimal
  + getSenderAccountId() Long
  + getReceiverAccountId() Long
  + getScheduledTime() Instant
  + equals(Object) boolean
  + hashCode() int
  + toString() String
}
class SimpleAuthenticationFilter {
  + SimpleAuthenticationFilter() 
  + String SPRING_SECURITY_FORM_DOMAIN_KEY
  + attemptAuthentication(HttpServletRequest, HttpServletResponse) Authentication
  - getAuthRequest(HttpServletRequest) UsernamePasswordAuthenticationToken
  - obtainDomain(HttpServletRequest) String
}
class TRANSACTION_STATUS {
<<enumeration>>
  + TRANSACTION_STATUS() 
  +  SCHEDULED
  +  CANCELED
  +  PROCESSING
  +  REJECTED
  +  COMMITTED
  + values() TRANSACTION_STATUS[]
  + valueOf(String) TRANSACTION_STATUS
}
class TRANSACTION_TYPE {
<<enumeration>>
  + TRANSACTION_TYPE() 
  +  DEPOSIT
  +  WITHDRAWAL
  +  TRANSFERRING
  + valueOf(String) TRANSACTION_TYPE
  + values() TRANSACTION_TYPE[]
}
class Transaction {
  + Transaction(Long, TRANSACTION_STATUS, TRANSACTION_TYPE, Timestamp, Timestamp, MonetaryAmount, Account) 
  + Transaction() 
  - Account fromAccount
  - Long id
  - MonetaryAmount amount
  - Timestamp modifyTime
  - Timestamp startTime
  - TRANSACTION_TYPE transactionType
  - TRANSACTION_STATUS transactionStatus
  + toString() String
  + getId() Long
  + getTransactionStatus() TRANSACTION_STATUS
  + getTransactionType() TRANSACTION_TYPE
  + setTransactionStatus(TRANSACTION_STATUS) void
  + setTransactionType(TRANSACTION_TYPE) void
  + getStartTime() Timestamp
  + getModifyTime() Timestamp
  + setFromAccount(Account) void
  + setModifyTime(Timestamp) void
  + setAmount(MonetaryAmount) void
  + setStartTime(Timestamp) void
  + getAmount() MonetaryAmount
  + getFromAccount() Account
  + setId(Long) void
}
class TransactionController {
  + TransactionController(TransactionService) 
  - TransactionService transactionService
  - history(CardAtmUserDetails) ResponseEntity~?~
  - getRegularForAccount(CardAtmUserDetails, Long) ResponseEntity~?~
  - createScheduled(CardAtmUserDetails, ScheduledTransactionDTO) ResponseEntity~?~
  - historyOfAccount(Long) ResponseEntity~?~
  - createRegular(CardAtmUserDetails, RegularTransactionDTO) ResponseEntity~?~
  - cancelRegularById(CardAtmUserDetails, Long) ResponseEntity~?~
}
class TransactionRepository~T~ {
<<Interface>>

}
class TransactionService {
  + TransactionService(TransferTransactionRepository, RegularTransactionRepository, TransactionalAccountRepository, AccountRepository~Account~, TransferService, Scheduler) 
  - TransferTransactionRepository transferTransactionRepository
  - TransferService transferService
  - Scheduler scheduler
  - RegularTransactionRepository regularTransactionRepository
  - AccountRepository~Account~ accountRepository
  - TransactionalAccountRepository transactionalAccountRepository
  + getAllTransferTransactionsByFromAccountAndStartTimeBetween(Account, Timestamp, Timestamp) List~TransferTransaction~
  - buildJobTriggerForRegular(JobDetail, Instant) Trigger
  + save(TransferTransaction) TransferTransaction
  + createRegularTransaction(Long, BigDecimal, Long, Long, Instant, Period, Integer) RegularTransaction
  - buildJobDetailForRegular(long) JobDetail
  - scheduleNext(Instant, RegularTransaction) void
  + fireRegularTransaction(Long, JobExecutionContext) void
  + getAllRegularTransactionsByFromAccountId(Long, Long) List~RegularTransactionInfo~
  - buildJobDetailForScheduled(long) JobDetail
  + fireScheduledTransaction(Long) void
  + createScheduledTransaction(Long, BigDecimal, Long, Long, Instant) RegularTransaction
  + getHistoryOfTransferTransactions(Long) List~TransferTransactionInfo~
  - buildJobTriggerForScheduled(JobDetail, Instant) Trigger
  + cancelRegularTransaction(Long, Long) void
  + getAllTransferTransactionsForAccountById(Long) List~TransferTransactionInfo~
  - deleteJobById(Long) void
}
class TransactionalAccount {
  + TransactionalAccount() 
  + TransactionalAccount(Long, ACCOUNT_STATUS, String, MonetaryAmount, User, Card, boolean, boolean, BigDecimal, BigDecimal) 
  - BigDecimal creditMoneyAmount
  - BigDecimal lendingRate
  - boolean isDefault
  - boolean isLendingAvailable
  + isLendingAvailable() boolean
  + isDefault() boolean
  + getCreditMoneyAmount() BigDecimal
  + getLendingRate() BigDecimal
  + setLendingAvailable(boolean) void
  + setDefault(boolean) void
  + setCreditMoneyAmount(BigDecimal) void
  + setLendingRate(BigDecimal) void
  + toString() String
  + createFromPlan(TransactionalAccountPlan, String, String, User, Card) TransactionalAccount
}
class TransactionalAccountPlan {
<<enumeration>>
  - TransactionalAccountPlan(String, String, boolean, BigDecimal, BigDecimal) 
  - String planName
  - BigDecimal creditMoneyAmount
  - BigDecimal lendingRate
  - String id
  - boolean isLendingAvailable
  +  PLAIN
  +  LIGHT
  +  MEDIUM
  + getId() String
  + getPlanName() String
  + isLendingAvailable() boolean
  + getCreditMoneyAmount() BigDecimal
  + getLendingRate() BigDecimal
  + values() TransactionalAccountPlan[]
  + valueOf(String) TransactionalAccountPlan
}
class TransactionalAccountRepository {
<<Interface>>
  + findTransactionalAccountByCardAndDefaultIsTrue(Card) List~TransactionalAccount~
  + findAccountByIdWithUser(Long) Optional~TransactionalAccount~
}
class TransactionalPlanInputDTO {
  + TransactionalPlanInputDTO(TransactionalAccountPlan, String, String) 
  - TransactionalPlanInputDTO() 
  - TransactionalAccountPlan plan
  - String currencyUnitCode
  - String accountName
  + getPlan() TransactionalAccountPlan
  + getCurrencyUnitCode() String
  + getAccountName() String
  + equals(Object) boolean
  + hashCode() int
  + toString() String
}
class TransferController {
  + TransferController(TransferService) 
  - TransferService transferService
  - deposit(CardAtmUserDetails, AmountDTO) ResponseEntity~?~
  - transfer(CardAtmUserDetails, TransferInputDTO) ResponseEntity~?~
  - withdraw(CardAtmUserDetails, AmountDTO) ResponseEntity~?~
}
class TransferInputDTO {
  + TransferInputDTO(BigDecimal, Long, Long) 
  - TransferInputDTO() 
  - Long senderAccountId
  - BigDecimal amount
  - Long receiverAccountId
  + getAmount() BigDecimal
  + getSenderAccountId() Long
  + getReceiverAccountId() Long
  + equals(Object) boolean
  + hashCode() int
  + toString() String
}
class TransferService {
  + TransferService(TransactionalAccountRepository, AccountRepository~Account~, TransferTransactionRepository) 
  - TransactionalAccountRepository transactionalAccountRepository
  - AccountRepository~Account~ accountRepository
  - TransferTransactionRepository transferTransactionRepository
  + deposit(Card, BigDecimal) void
  + checkIfTransferAvailableAndGetAccounts(Long, Long, Long, BigDecimal) Pair~Account, Account~
  - applyFeeIfNecessary(TransactionalAccount, MonetaryAmount, CurrencyUnit, Money) Money
  + withdraw(Card, BigDecimal) void
  - getCardDefaultTransactionalAccount(Card) TransactionalAccount
  + transfer(Long, Long, Long, BigDecimal) TransferTransaction
  - applyConversionIfNecessary(Money, CurrencyUnit, CurrencyUnit) Money
  - getReceiverAccountWithChecks(Optional~Account~, Long) Account
}
class TransferTransaction {
  + TransferTransaction() 
  + TransferTransaction(Long, TRANSACTION_STATUS, TRANSACTION_TYPE, Timestamp, Timestamp, MonetaryAmount, Account, Account, BigDecimal) 
  - Account toAccount
  - BigDecimal fee
  + createTransferTransaction(TRANSACTION_TYPE, MonetaryAmount, BigDecimal, Account, Account) TransferTransaction
  + getToAccount() Account
  + getFee() BigDecimal
  + setToAccount(Account) void
  + setFee(BigDecimal) void
  + toString() String
}
class TransferTransactionInfo {
<<Interface>>
  + getStartTime() Timestamp
  + getId() Long
  + getModifyTime() Timestamp
  + getTransactionStatus() TRANSACTION_STATUS
  + getFee() BigDecimal
  + getAmount() MonetaryAmount
  + getToAccount() AccountInfo
  + getTransactionType() TRANSACTION_TYPE
  + getFromAccount() AccountInfo
}
class TransferTransactionRepository {
<<Interface>>
  + findByFromAccountAndStartTimeBetween(Account, Timestamp, Timestamp) List~TransferTransaction~
  + findByFromAccountInOrToAccountIn(Collection~Account~) List~TransferTransactionInfo~
  + findByFromAccountOrToAccountSingle(Account) List~TransferTransactionInfo~
}
class USER_ROLE {
<<enumeration>>
  + USER_ROLE() 
  +  ROLE_MANAGER
  +  ROLE_SUPERUSER
  +  ROLE_USER
  + values() USER_ROLE[]
  + valueOf(String) USER_ROLE
  + getAuthority() String
}
class USER_STATUS {
<<enumeration>>
  + USER_STATUS() 
  +  FROZEN
  +  BLOCKED
  +  SUSPENDED
  +  OK
  + valueOf(String) USER_STATUS
  + values() USER_STATUS[]
}
class User {
  + User(Long, String, String, String, Date, USER_STATUS, Set~Card~, Set~USER_ROLE~) 
  + User() 
  - Set~USER_ROLE~ role
  - String firstName
  - String middleName
  - Date birthdayDate
  - String lastName
  - Long id
  - USER_STATUS userStatus
  - Set~Card~ cards
  + getMiddleName() String
  + setRole(Set~USER_ROLE~) void
  + setBirthdayDate(Date) void
  + getId() Long
  + getFirstName() String
  + setMiddleName(String) void
  + setFirstName(String) void
  + toString() String
  + getLastName() String
  + setLastName(String) void
  + setCards(Set~Card~) void
  + getBirthdayDate() Date
  + setUserStatus(USER_STATUS) void
  + getUserStatus() USER_STATUS
  + getCards() Set~Card~
  + getRole() Set~USER_ROLE~
  + setId(Long) void
  + getFullYears() long
  + getFullName() String
}
class UserRepository {
<<Interface>>
  + findByFirstNameIgnoreCase(String) User
}
class WebSecurityConfig {
  + WebSecurityConfig() 
  - PasswordEncoder passwordEncoder
  - CardService cardService
  - LoginAttemptRepository loginAttemptRepository
  - String corsProxyUrl
  + configureGlobal(AuthenticationManagerBuilder) void
  + authenticationFilter(AuthenticationManager) SimpleAuthenticationFilter
  + authFailureHandler() BadCredentialsHelper
  + webSecurityConfig() WebSecurityConfig
  + authProvider() AuthenticationProvider
  + configure(HttpSecurity) void
  + corsConfigurationSource() CorsConfigurationSource
  + authSuccessHandler() AuthSuccessHandler
  + securityFilterChain(HttpSecurity) SecurityFilterChain
}

ATM "1" *--> "atmStatus 1" ATM_STATUS 
ATM "1" *--> "banks *" Bank 
Account "1" *--> "accountStatus 1" ACCOUNT_STATUS 
Account "1" *--> "accountType 1" ACCOUNT_TYPE 
Account "1" *--> "card 1" Card 
Account "1" *--> "user 1" User 
AccountController "1" *--> "accountService 1" AccountService 
RegularTransactionInfo  -->  AccountInfo 
TransferTransactionInfo  -->  AccountInfo 
AccountRepository~T~  ..>  Account 
AccountService "1" *--> "accountRepository 1" AccountRepository~T~ 
AccountService  ..>  AccountStatusException : «create»
AccountService  ..>  IAccountService 
AccountService "1" *--> "savingAccountRepository 1" SavingAccountRepository 
AccountService "1" *--> "transactionService 1" TransactionService 
AccountService "1" *--> "transactionalAccountRepository 1" TransactionalAccountRepository 
AtmController "1" *--> "atmRepository 1" ATMRepository 
Bank "1" *--> "atms *" ATM 
BankService "1" *--> "bankRepository 1" BankRepository 
BankService  ..>  IBankService 
Card "1" *--> "bank 1" Bank 
Card "1" *--> "cardStatus 1" CARD_STATUS 
Card "1" *--> "user 1" User 
CardAtmUserDetails "1" *--> "atm 1" ATM 
CardAtmUserDetails "1" *--> "card 1" Card 
CardController "1" *--> "cardService 1" CardService 
CardService "1" *--> "atmRepository 1" ATMRepository 
CardService  ..>  Card : «create»
CardService  ..>  CardAtmUserDetails : «create»
CardService "1" *--> "cardRepository 1" CardRepository 
CardService  ..>  ICardService 
CardService "1" *--> "paymentCardGenerator 1" PaymentCardGeneratorImpl 
CardType  ..>  Range : «create»
DbDataInserter  ..>  ATM : «create»
DbDataInserter "1" *--> "atmRepository 1" ATMRepository 
DbDataInserter "1" *--> "genAccountRepository 1" AccountRepository~T~ 
DbDataInserter "1" *--> "accountService 1" AccountService 
DbDataInserter  ..>  Bank : «create»
DbDataInserter "1" *--> "bankRepository 1" BankRepository 
DbDataInserter  ..>  Card : «create»
DbDataInserter "1" *--> "cardRepository 1" CardRepository 
DbDataInserter "1" *--> "cardService 1" CardService 
DbDataInserter "1" *--> "savingAccountRepository 1" SavingAccountRepository 
DbDataInserter "1" *--> "transferTransactionTransactionRepository 1" TransactionRepository~T~ 
DbDataInserter  ..>  TransactionalAccount : «create»
DbDataInserter "1" *--> "transferService 1" TransferService 
DbDataInserter  ..>  User : «create»
DbDataInserter "1" *--> "userRepository 1" UserRepository 
IAccountService  ..>  AccountStatusException : «create»
IAccountService  ..>  ResourceNotFoundException : «create»
IAccountService  ..>  RightsViolationException : «create»
LoginAttempt "1" *--> "atm 1" ATM 
LoginAttempt "1" *--> "card 1" Card 
MyDaoProvider  ..>  ATM : «create»
MyDaoProvider  ..>  Card : «create»
MyDaoProvider "1" *--> "cardService 1" CardService 
MyDaoProvider  ..>  LoginAttempt : «create»
MyDaoProvider "1" *--> "loginAttemptRepository 1" LoginAttemptRepository 
PaymentCardGeneratorImpl  ..>  PaymentCardGenerator 
QuartzRegularTransaction "1" *--> "transactionService 1" TransactionService 
QuartzScheduledTransaction "1" *--> "transactionService 1" TransactionService 
RegularTransaction "1" *--> "toAccount 1" Account 
RegularTransaction  -->  Transaction 
SavingAccount  -->  Account 
SavingAccount "1" *--> "savingAccountPlan 1" SavingAccountPlan 
SavingPlanInputDTO "1" *--> "plan 1" SavingAccountPlan 
Transaction "1" *--> "fromAccount 1" Account 
Transaction "1" *--> "transactionStatus 1" TRANSACTION_STATUS 
Transaction "1" *--> "transactionType 1" TRANSACTION_TYPE 
TransactionController "1" *--> "transactionService 1" TransactionService 
TransactionRepository~T~  ..>  Transaction 
TransactionService "1" *--> "accountRepository 1" AccountRepository~T~ 
TransactionService  ..>  ITransactionService 
TransactionService "1" *--> "regularTransactionRepository 1" RegularTransactionRepository 
TransactionService  ..>  ResourceNotFoundException : «create»
TransactionService "1" *--> "transactionalAccountRepository 1" TransactionalAccountRepository 
TransactionService "1" *--> "transferService 1" TransferService 
TransactionService "1" *--> "transferTransactionRepository 1" TransferTransactionRepository 
TransactionalAccount  -->  Account 
TransactionalPlanInputDTO "1" *--> "plan 1" TransactionalAccountPlan 
TransferController "1" *--> "transferService 1" TransferService 
TransferService "1" *--> "accountRepository 1" AccountRepository~T~ 
TransferService  ..>  AccountStatusException : «create»
TransferService  ..>  ITransferService 
TransferService  ..>  ResourceNotFoundException : «create»
TransferService  ..>  RightsViolationException : «create»
TransferService "1" *--> "transactionalAccountRepository 1" TransactionalAccountRepository 
TransferService "1" *--> "transferTransactionRepository 1" TransferTransactionRepository 
TransferTransaction "1" *--> "toAccount 1" Account 
TransferTransaction  -->  Transaction 
User "1" *--> "cards *" Card 
User "1" *--> "role *" USER_ROLE 
User "1" *--> "userStatus 1" USER_STATUS 
WebSecurityConfig  ..>  AuthSuccessHandler : «create»
WebSecurityConfig  ..>  BadCredentialsHelper : «create»
WebSecurityConfig "1" *--> "cardService 1" CardService 
WebSecurityConfig "1" *--> "loginAttemptRepository 1" LoginAttemptRepository 
WebSecurityConfig  ..>  MyDaoProvider : «create»
WebSecurityConfig  ..>  SimpleAuthenticationFilter : «create»
