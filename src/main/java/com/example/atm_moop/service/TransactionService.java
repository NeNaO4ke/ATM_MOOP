package com.example.atm_moop.service;

import com.example.atm_moop.domain.*;
import com.example.atm_moop.domain.enums.TRANSACTION_STATUS;
import com.example.atm_moop.domain.enums.TRANSACTION_TYPE;
import com.example.atm_moop.dto.RegularTransactionDTO;
import com.example.atm_moop.dto.ScheduledTransactionDTO;
import com.example.atm_moop.exception.AccountStatusException;
import com.example.atm_moop.exception.ResourceNotFoundException;
import com.example.atm_moop.exception.RightsViolationException;
import com.example.atm_moop.repository.AccountRepository;
import com.example.atm_moop.repository.RegularTransactionRepository;
import com.example.atm_moop.repository.TransactionalAccountRepository;
import com.example.atm_moop.repository.TransferTransactionRepository;
import com.example.atm_moop.task.QuartzRegularTransaction;
import com.example.atm_moop.task.QuartzScheduledTransaction;
import lombok.RequiredArgsConstructor;
import org.javamoney.moneta.Money;
import org.quartz.*;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.server.ResponseStatusException;

import java.math.BigDecimal;
import java.sql.Timestamp;
import java.time.Instant;
import java.time.Period;
import java.time.ZoneId;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class TransactionService implements TransactionServiceI {

    private final TransferTransactionRepository transferTransactionRepository;
    private final RegularTransactionRepository regularTransactionRepository;
    private final TransactionalAccountRepository transactionalAccountRepository;

    private final AccountRepository<Account> accountRepository;

    private final TransferService transferService;

    private final Scheduler scheduler;


    @Override
    public List<TransferTransactionInfo> getHistoryOfTransferTransactions(Long userId) {
        List<Account> allUserAccountsIds = accountRepository.findByUserId(userId);
        return transferTransactionRepository.findByFromAccountInOrToAccountIn(allUserAccountsIds);
    }

    public TransferTransaction save(TransferTransaction transferTransaction){
        return transferTransactionRepository.save(transferTransaction);
    }

    @Override
    public List<TransferTransactionInfo> getAllTransactionsForAccountById(Long accountId) {
        return accountRepository.findById(accountId)
                .map(transferTransactionRepository::findByFromAccountOrToAccountSingle)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.BAD_REQUEST));
    }

    public List<TransferTransaction> getAllTransferTransactionsByFromAccountAndStartTimeBetween(Account accountId, Timestamp start,Timestamp end ) {
        return transferTransactionRepository.findByFromAccountAndStartTimeBetween(accountId, start, end);
    }

    @Override
    @Transactional
    public RegularTransaction createScheduledTransaction(ScheduledTransactionDTO transactionDTO, CardAtmUserDetails cardAtmUserDetails) {
        AccountService.confirmAccountsIsNotTheSame(transactionDTO.getSenderAccountId(), transactionDTO.getReceiverAccountId());
        Optional<Account> senderAccount = accountRepository.findById(transactionDTO.getSenderAccountId());
        return senderAccount.map(account -> {
            Optional<Account> receiverAccount = accountRepository.findById(transactionDTO.getReceiverAccountId());
            return receiverAccount.map(receiverAcc -> {
                Money amount = Money.of(transactionDTO.getAmount(), account.getBalance().getCurrency());
                Timestamp timestamp = new Timestamp(transactionDTO.getScheduledTime().toEpochMilli());
                RegularTransaction regularTransaction = regularTransactionRepository.save(RegularTransaction.createScheduledTransactionOf(TRANSACTION_TYPE.TRANSFERRING, amount, account, receiverAcc, timestamp));
                JobDetail jobDetail = buildJobDetailForScheduled(regularTransaction.getId());
                Trigger trigger = buildJobTriggerForScheduled(jobDetail, transactionDTO.getScheduledTime());
                try {
                    scheduler.scheduleJob(jobDetail, trigger);
                } catch (SchedulerException e) {
                    throw new RuntimeException(e);
                }
                return regularTransaction;
            }).orElseThrow(() -> new ResponseStatusException(HttpStatus.BAD_REQUEST));
        }).orElseThrow(() -> new ResponseStatusException(HttpStatus.BAD_REQUEST));
    }

/*    @Transactional
    public RegularTransaction createScheduledTransaction2(Long userSenderId, BigDecimal amount, Long senderAccountId, Long receiverAccountId, Instant scheduledTime) throws AccountStatusException, ResourceNotFoundException, RightsViolationException {
        AccountService.confirmAccountsIsNotTheSame(senderAccountId, receiverAccountId);
        TransactionalAccount senderAcc = AccountService.getAccountWithOkStatus(transactionalAccountRepository.findById(senderAccountId));
        AccountService.confirmOwnedByUser(userSenderId, senderAcc.getUser().getId());
        Account receiverAcc = AccountService.getAccountWithOkStatus(accountRepository.findById(senderAccountId));
        return senderAccount.map(account -> {
            Optional<Account> receiverAccount = accountRepository.findById(transactionDTO.getReceiverAccountId());
            return receiverAccount.map(receiverAcc -> {
                Money amount = Money.of(transactionDTO.getAmount(), account.getBalance().getCurrency());
                Timestamp timestamp = new Timestamp(transactionDTO.getScheduledTime().toEpochMilli());
                RegularTransaction regularTransaction = regularTransactionRepository.save(RegularTransaction.createScheduledTransactionOf(TRANSACTION_TYPE.TRANSFERRING, amount, account, receiverAcc, timestamp));
                JobDetail jobDetail = buildJobDetailForScheduled(regularTransaction.getId());
                Trigger trigger = buildJobTriggerForScheduled(jobDetail, transactionDTO.getScheduledTime());
                try {
                    scheduler.scheduleJob(jobDetail, trigger);
                } catch (SchedulerException e) {
                    throw new RuntimeException(e);
                }
                return regularTransaction;
            }).orElseThrow(() -> new ResponseStatusException(HttpStatus.BAD_REQUEST));
        }).orElseThrow(() -> new ResponseStatusException(HttpStatus.BAD_REQUEST));
    }*/

    @Override
    @Transactional
    public void fireScheduledTransaction(Long transactionId) throws ResourceNotFoundException {
        regularTransactionRepository.findByIdWithUser(transactionId)
                .map(regularTransaction -> {
                    Long fromAccountId = regularTransaction.getFromAccount().getId();
                    User user = accountRepository.findByIdWithUser(fromAccountId).get().getUser();
                    try {
                        transferService.transfer(user.getId(),
                                fromAccountId,
                                regularTransaction.getToAccount().getId(),
                                regularTransaction.getAmount().getNumber().numberValue(BigDecimal.class));
                    } catch (AccountStatusException | ResourceNotFoundException | RightsViolationException e) {
                        regularTransactionRepository.updateTransactionStatusById(TRANSACTION_STATUS.REJECTED, transactionId);
                    }
                    regularTransactionRepository.updateTransactionStatusById(TRANSACTION_STATUS.COMMITTED, transactionId);
                    return regularTransaction;
                })
                .orElseThrow(() -> new ResourceNotFoundException("Cannot execute scheduled transaction with id " + transactionId + " as it was not found."));
    }

    @Override
    @Transactional
    public RegularTransaction createRegularTransaction(RegularTransactionDTO transactionDTO, CardAtmUserDetails cardAtmUserDetails) {
        AccountService.confirmAccountsIsNotTheSame(transactionDTO.getSenderAccountId(), transactionDTO.getReceiverAccountId());
        return accountRepository.findById(transactionDTO.getSenderAccountId())
                .map(account -> accountRepository.findById(transactionDTO.getReceiverAccountId())
                        .map(receiverAcc -> {
                            Money amount = Money.of(transactionDTO.getAmount(), account.getBalance().getCurrency());
                            Timestamp timestamp = null;
                            Instant scheduledTime = transactionDTO.getScheduledTime();
                            if (scheduledTime != null) {
                                if (scheduledTime.isAfter(Instant.now())) {
                                    timestamp = new Timestamp(scheduledTime.toEpochMilli());
                                }
                            }
                            Integer initialRepeats = transactionDTO.getInitialRepeats();
                            Period period = Period.parse(transactionDTO.getPeriod());
                            RegularTransaction transaction = RegularTransaction.createRegularTransaction(TRANSACTION_TYPE.TRANSFERRING, amount, account, receiverAcc, period, timestamp, initialRepeats, initialRepeats);
                            transaction = regularTransactionRepository.save(transaction);
                            scheduleNext(scheduledTime, transaction);
                            return transaction;
                        }).orElseThrow(() -> new ResponseStatusException(HttpStatus.BAD_REQUEST)))
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.BAD_REQUEST));
    }

    private void scheduleNext(Instant scheduledTime, RegularTransaction regularTransaction) {
        JobDetail jobDetail = buildJobDetailForRegular(regularTransaction.getId());
        Trigger trigger = buildJobTriggerForRegular(jobDetail, scheduledTime);
        try {
            scheduler.scheduleJob(jobDetail, trigger);
        } catch (SchedulerException e) {
            throw new RuntimeException(e);
        }
    }

    @Override
    @Transactional
    public void fireRegularTransaction(Long transactionId) throws ResourceNotFoundException {
        regularTransactionRepository.findByIdWithUser(transactionId)
                .map(regularTransaction -> {
                    Long fromAccountId = regularTransaction.getFromAccount().getId();
                    User user = accountRepository.findByIdWithUser(fromAccountId).get().getUser();
                    try {
                        transferService.transfer(user.getId(),
                                fromAccountId,
                                regularTransaction.getToAccount().getId(),
                                regularTransaction.getAmount().getNumber().numberValue(BigDecimal.class));
                        int repeatsLeft = regularTransaction.getRepeatsLeft();
                        Instant nowPlusPeriod = new Date().toInstant()
                                .atZone(ZoneId.systemDefault())
                                .plus(regularTransaction.getPeriod())
                                .toInstant();
                        if (repeatsLeft >= 1) {
                            repeatsLeft = repeatsLeft - 1;
                            if (repeatsLeft == 0) {
                                regularTransactionRepository.updateTransactionStatusAndRepeatsLeftById(TRANSACTION_STATUS.COMMITTED, repeatsLeft, transactionId);
                            } else {
                                regularTransactionRepository.updateRepeatsLeftById(repeatsLeft, transactionId);
                                scheduleNext(nowPlusPeriod, regularTransaction);
                            }
                        } else {
                            scheduleNext(nowPlusPeriod, regularTransaction);
                        }
                    } catch (AccountStatusException | ResourceNotFoundException | RightsViolationException e) {
                        regularTransactionRepository.updateTransactionStatusById(TRANSACTION_STATUS.REJECTED, transactionId);
                    }
                    return regularTransaction;
                })
                .orElseThrow(() -> new ResourceNotFoundException("Transaction is not found!"));
    }

    private JobDetail buildJobDetailForScheduled(long transactionId) {
        JobDataMap jobDataMap = new JobDataMap();

        jobDataMap.put("transactionId", transactionId);

        return JobBuilder.newJob(QuartzScheduledTransaction.class)
                .withIdentity(String.valueOf(System.currentTimeMillis()), "transactions-scheduled")
                .withDescription("Scheduled transaction")
                .usingJobData(jobDataMap)
                .storeDurably()
                .build();
    }

    private JobDetail buildJobDetailForRegular(long transactionId) {
        JobDataMap jobDataMap = new JobDataMap();

        jobDataMap.put("transactionId", transactionId);

        return JobBuilder.newJob(QuartzRegularTransaction.class)
                .withIdentity(String.valueOf(System.currentTimeMillis()), "transactions-regular-transaction")
                .withDescription("Regular transaction")
                .usingJobData(jobDataMap)
                .storeDurably()
                .build();
    }

    private Trigger buildJobTriggerForScheduled(JobDetail jobDetail, Instant fireAt) {
        return TriggerBuilder.newTrigger()
                .forJob(jobDetail)
                .withIdentity(jobDetail.getKey().getName(), "scheduled-transaction-trigger")
                .withDescription("Fire scheduled transaction")
                .startAt(Date.from(fireAt))
                .withSchedule(SimpleScheduleBuilder.simpleSchedule().withMisfireHandlingInstructionFireNow())
                .build();
    }

    private Trigger buildJobTriggerForRegular(JobDetail jobDetail, Instant fireAt) {
        TriggerBuilder<SimpleTrigger> fire_scheduled_transaction = TriggerBuilder.newTrigger()
                .forJob(jobDetail)
                .withIdentity(jobDetail.getKey().getName(), "regular-transaction-trigger")
                .withDescription("Fire regular transaction")
                .withSchedule(SimpleScheduleBuilder.simpleSchedule().withMisfireHandlingInstructionFireNow());

        if (fireAt != null)
            fire_scheduled_transaction.startAt(Date.from(fireAt));
        else
            fire_scheduled_transaction.startNow();

        return fire_scheduled_transaction.build();
    }

}
