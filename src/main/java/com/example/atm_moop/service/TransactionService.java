package com.example.atm_moop.service;

import com.example.atm_moop.domain.*;
import com.example.atm_moop.domain.enums.TRANSACTION_STATUS;
import com.example.atm_moop.domain.enums.TRANSACTION_TYPE;
import com.example.atm_moop.dto.RegularTransactionInfo;
import com.example.atm_moop.dto.TransferTransactionInfo;
import com.example.atm_moop.exception.AccountStatusException;
import com.example.atm_moop.exception.ResourceNotFoundException;
import com.example.atm_moop.exception.RightsViolationException;
import com.example.atm_moop.repository.AccountRepository;
import com.example.atm_moop.repository.RegularTransactionRepository;
import com.example.atm_moop.repository.TransactionalAccountRepository;
import com.example.atm_moop.repository.TransferTransactionRepository;
import com.example.atm_moop.service.interfaces.IAccountService;
import com.example.atm_moop.service.interfaces.ITransactionService;
import com.example.atm_moop.task.QuartzRegularTransaction;
import com.example.atm_moop.task.QuartzScheduledTransaction;
import lombok.RequiredArgsConstructor;
import org.javamoney.moneta.Money;
import org.quartz.*;
import org.springframework.data.util.Pair;
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

@Service
@RequiredArgsConstructor
public class TransactionService implements ITransactionService {

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

    @Override
    public TransferTransaction save(TransferTransaction transferTransaction) {
        return transferTransactionRepository.save(transferTransaction);
    }

    @Override
    public List<TransferTransactionInfo> getAllTransferTransactionsForAccountById(Long accountId) {
        return accountRepository.findById(accountId)
                .map(transferTransactionRepository::findByFromAccountOrToAccountSingle)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.BAD_REQUEST));
    }

    @Override
    public List<TransferTransaction> getAllTransferTransactionsByFromAccountAndStartTimeBetween(Account accountId, Timestamp start, Timestamp end) {
        return transferTransactionRepository.findByFromAccountAndStartTimeBetween(accountId, start, end);
    }

    @Override
    public List<RegularTransactionInfo> getAllRegularTransactionsByFromAccountId(Long accountId, Long userId) throws ResourceNotFoundException, RightsViolationException {
        Account account = IAccountService.getResourceOrThrowException(accountRepository.findById(accountId));
        IAccountService.confirmOwnedByUser(account.getUser().getId(), userId);
        return regularTransactionRepository.findByFromAccountOrderByStartTimeDesc(accountId);
    }


    @Override
    public void cancelRegularTransaction(Long transactionId, Long userId) throws ResourceNotFoundException, RightsViolationException, SchedulerException {
        RegularTransaction transaction = IAccountService.getResourceOrThrowException(regularTransactionRepository.findById(transactionId));
        Account account = IAccountService.getResourceOrThrowException(accountRepository.findById(transaction.getFromAccount().getId()));
        IAccountService.confirmOwnedByUser(account.getUser().getId(), userId);
        deleteJobById(transactionId);
        regularTransactionRepository.updateTransactionStatusById(TRANSACTION_STATUS.CANCELED, transactionId);
    }

    private void deleteJobById(Long id) throws SchedulerException {
        JobDetail job = JobBuilder.newJob(QuartzScheduledTransaction.class)
                .withIdentity(String.valueOf(id), "transactions-scheduled")
                .withDescription("Scheduled transaction")
                .build();
        scheduler.deleteJob(job.getKey());
    }


    @Override
    @Transactional
    public RegularTransaction createScheduledTransaction(Long userSenderId, BigDecimal sendingAmount, Long senderAccountId, Long receiverAccountId, Instant scheduledTime) throws AccountStatusException, ResourceNotFoundException, RightsViolationException {
        Pair<Account, Account> accountAccountPair = transferService.checkIfTransferAvailableAndGetAccounts(userSenderId, senderAccountId, receiverAccountId, sendingAmount);

        Account senderAcc = accountAccountPair.getFirst();
        Account receiverAcc = accountAccountPair.getSecond();

        Money amount = Money.of(sendingAmount, senderAcc.getBalance().getCurrency());
        Timestamp timestamp = new Timestamp(scheduledTime.toEpochMilli());
        RegularTransaction regularTransaction = regularTransactionRepository.save(RegularTransaction.createScheduledTransactionOf(TRANSACTION_TYPE.TRANSFERRING, amount, senderAcc, receiverAcc, timestamp));
        JobDetail jobDetail = buildJobDetailForScheduled(regularTransaction.getId());
        Trigger trigger = buildJobTriggerForScheduled(jobDetail, scheduledTime);
        try {
            scheduler.scheduleJob(jobDetail, trigger);
        } catch (SchedulerException e) {
            throw new RuntimeException(e);
        }
        return regularTransaction;
    }

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
                    try {
                        deleteJobById(transactionId);
                    } catch (SchedulerException e) {
                        throw new RuntimeException(e);
                    }
                    return regularTransaction;
                })
                .orElseThrow(() -> new ResourceNotFoundException("Cannot execute scheduled transaction with id " + transactionId + " as it was not found."));
    }

    @Override
    @Transactional
    public RegularTransaction createRegularTransaction(Long userSenderId, BigDecimal sendingAmount, Long senderAccountId, Long receiverAccountId, Instant scheduledTime, Period period, Integer initialRepeats) throws AccountStatusException, ResourceNotFoundException, RightsViolationException {
        Pair<Account, Account> accountAccountPair = transferService.checkIfTransferAvailableAndGetAccounts(userSenderId, senderAccountId, receiverAccountId, sendingAmount);

        Account senderAcc = accountAccountPair.getFirst();
        Account receiverAcc = accountAccountPair.getSecond();

        Money amount = Money.of(sendingAmount, senderAcc.getBalance().getCurrency());
        Timestamp timestamp = null;
        if (scheduledTime != null) {
            if (scheduledTime.isAfter(Instant.now())) {
                timestamp = new Timestamp(scheduledTime.toEpochMilli());
            } else throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Scheduled time must be in future.");
        }
        RegularTransaction transaction = RegularTransaction.createRegularTransaction(TRANSACTION_TYPE.TRANSFERRING, amount, senderAcc, receiverAcc, period, timestamp, initialRepeats, initialRepeats);
        transaction = regularTransactionRepository.save(transaction);
        scheduleNext(scheduledTime, transaction);
        return transaction;
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
    public void fireRegularTransaction(Long transactionId, JobExecutionContext context) throws ResourceNotFoundException {
        regularTransactionRepository.findByIdWithUser(transactionId)
                .map(regularTransaction -> {
                    Long fromAccountId = regularTransaction.getFromAccount().getId();
                    User user = accountRepository.findByIdWithUser(fromAccountId).get().getUser();
                    Trigger oldTrigger = context.getTrigger();
                    JobDetail oldJobDetail = context.getJobDetail();
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
                                deleteJobById(transactionId);
                            } else {
                                regularTransactionRepository.updateRepeatsLeftById(repeatsLeft, transactionId);
                                scheduler.rescheduleJob(oldTrigger.getKey(), buildJobTriggerForRegular(oldJobDetail, nowPlusPeriod));
                            }
                        } else {
                            scheduler.rescheduleJob(oldTrigger.getKey(), buildJobTriggerForRegular(oldJobDetail, nowPlusPeriod));
                        }
                    } catch (AccountStatusException | ResourceNotFoundException | RightsViolationException |
                             SchedulerException e) {
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
                .withIdentity(String.valueOf(transactionId), "transactions-scheduled")
                .withDescription("Scheduled transaction")
                .usingJobData(jobDataMap)
                .storeDurably()
                .build();
    }

    private JobDetail buildJobDetailForRegular(long transactionId) {
        JobDataMap jobDataMap = new JobDataMap();

        jobDataMap.put("transactionId", transactionId);

        return JobBuilder.newJob(QuartzRegularTransaction.class)
                .withIdentity(String.valueOf(transactionId), "transactions-regular-transaction")
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
