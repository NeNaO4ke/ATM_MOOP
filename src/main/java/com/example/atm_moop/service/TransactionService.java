package com.example.atm_moop.service;

import com.example.atm_moop.domain.*;
import com.example.atm_moop.domain.enums.TRANSACTION_STATUS;
import com.example.atm_moop.domain.enums.TRANSACTION_TYPE;
import com.example.atm_moop.dto.RegularTransactionDTO;
import com.example.atm_moop.dto.ScheduledTransactionDTO;
import com.example.atm_moop.exception.BusinessException;
import com.example.atm_moop.repository.AccountRepository;
import com.example.atm_moop.repository.RegularTransactionRepository;
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
    private final AccountRepository<Account> accountRepository;
    private final TransferService transferService;

    private final Scheduler scheduler;


    @Override
    public List<TransferTransactionInfo> getHistoryOfTransferTransactions(Long userId) {
        List<Account> allUserAccountsIds = accountRepository.findByUserId(userId);
        return transferTransactionRepository.findByFromAccountInOrTo_accountIn(allUserAccountsIds);
    }

    @Override
    public List<TransferTransactionInfo> getAllTransactionsForAccountById(Long accountId) {
        return accountRepository.findById(accountId)
                .map(transferTransactionRepository::findByFromAccountOrTo_account)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.BAD_REQUEST));
    }

    @Override
    @Transactional
    public void createScheduledTransaction(ScheduledTransactionDTO transactionDTO, CardAtmUserDetails cardAtmUserDetails) {
        Optional<Account> senderAccount = accountRepository.findById(transactionDTO.getSenderAccountId());
        senderAccount.map(account -> {
            Optional<Account> receiverAccount = accountRepository.findById(transactionDTO.getReceiverAccountId());
            return receiverAccount.map(receiverAcc -> {
                Money amount = Money.of(transactionDTO.getAmount(), account.getBalance().getCurrency());
                Timestamp timestamp = new Timestamp(transactionDTO.getScheduledTime().toEpochMilli());
                RegularTransaction regularTransaction = regularTransactionRepository.save(RegularTransaction.createScheduledTransaction(TRANSACTION_TYPE.TRANSFERRING, amount, account, receiverAcc, timestamp));
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

    @Override
    @Transactional
    public void fireScheduledTransaction(Long transactionId) throws BusinessException {
        Optional<RegularTransaction> transactionOptional = regularTransactionRepository.findByIdWithUser(transactionId);
        transactionOptional
                .map(regularTransaction -> {
                    Long fromAccountId = regularTransaction.getFromAccount().getId();
                    Optional<Account> accWithUser = accountRepository.findByIdWithUser(fromAccountId);
                    User user = accWithUser.get().getUser();
                    transferService.transferFromTransactionalToTransactional(user,
                            fromAccountId,
                            regularTransaction.getTo_account().getId(),
                            regularTransaction.getAmount().getNumber().numberValue(BigDecimal.class));
                    regularTransactionRepository.updateTransactionStatusById(TRANSACTION_STATUS.COMMITTED, transactionId);
                    return regularTransaction;
                })
                .orElseThrow(() -> new BusinessException("Exception!!!"));
    }

    @Override
    @Transactional
    public RegularTransaction createRegularTransaction(RegularTransactionDTO transactionDTO, CardAtmUserDetails cardAtmUserDetails){
        Optional<Account> senderAccount = accountRepository.findById(transactionDTO.getSenderAccountId());
        return senderAccount.map(account -> {
            Optional<Account> receiverAccount = accountRepository.findById(transactionDTO.getReceiverAccountId());
            return receiverAccount.map(receiverAcc -> {
                Money amount = Money.of(transactionDTO.getAmount(), account.getBalance().getCurrency());
                Timestamp timestamp = null;
                Instant scheduledTime = transactionDTO.getScheduledTime();
                if(scheduledTime != null){
                    if(scheduledTime.isAfter(Instant.now())){
                        timestamp = new Timestamp(scheduledTime.toEpochMilli());
                    }
                }
                Integer initialRepeats = transactionDTO.getInitialRepeats();
                Period period = Period.parse(transactionDTO.getPeriod());
                RegularTransaction transaction = RegularTransaction.createRegularTransaction(TRANSACTION_TYPE.TRANSFERRING, amount, account, receiverAcc, period, timestamp, initialRepeats, initialRepeats);
                RegularTransaction regularTransaction = regularTransactionRepository.save(transaction);
                scheduleNext(scheduledTime, regularTransaction);
                return regularTransaction;
            }).orElseThrow(() -> new ResponseStatusException(HttpStatus.BAD_REQUEST));
        }).orElseThrow(() -> new ResponseStatusException(HttpStatus.BAD_REQUEST));
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
    public void fireRegularTransaction(Long transactionId) throws BusinessException {
        Optional<RegularTransaction> transactionOptional = regularTransactionRepository.findByIdWithUser(transactionId);
        transactionOptional
                .map(regularTransaction -> {
                    Long fromAccountId = regularTransaction.getFromAccount().getId();
                    Optional<Account> accWithUser = accountRepository.findByIdWithUser(fromAccountId);
                    User user = accWithUser.get().getUser();
                    try {
                        transferService.transferFromTransactionalToTransactional(user,
                                fromAccountId,
                                regularTransaction.getTo_account().getId(),
                                regularTransaction.getAmount().getNumber().numberValue(BigDecimal.class));
                        int repeatsLeft = regularTransaction.getRepeatsLeft();
                        Instant nowPlusPeriod = new Date().toInstant()
                                .atZone(ZoneId.systemDefault())
                                .plus(regularTransaction.getPeriod())
                                .toInstant();
                        if(repeatsLeft >=1){
                            repeatsLeft = repeatsLeft - 1;
                            if(repeatsLeft == 0){
                                regularTransactionRepository.updateTransactionStatusAndRepeatsLeftById(TRANSACTION_STATUS.COMMITTED, repeatsLeft, transactionId);
                            }else {
                                regularTransactionRepository.updateRepeatsLeftById(repeatsLeft, transactionId);
                                scheduleNext(nowPlusPeriod, regularTransaction);
                            }
                        } else {
                            scheduleNext(nowPlusPeriod, regularTransaction);
                        }
                    } catch (ResponseStatusException e){
                        regularTransactionRepository.updateTransactionStatusById(TRANSACTION_STATUS.REJECTED, transactionId);
                    }
                    return regularTransaction;
                })
                .orElseThrow(() -> new BusinessException("Exception!!!"));
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

        if(fireAt != null)
            fire_scheduled_transaction.startAt(Date.from(fireAt));
        else
            fire_scheduled_transaction.startNow();

        return fire_scheduled_transaction.build();
    }

}
