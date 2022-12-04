package com.example.atm_moop.task;

import com.example.atm_moop.exception.BusinessException;
import com.example.atm_moop.service.TransactionService;
import org.quartz.DisallowConcurrentExecution;
import org.quartz.Job;
import org.quartz.JobExecutionContext;
import org.quartz.JobExecutionException;
import org.springframework.beans.factory.annotation.Autowired;

@DisallowConcurrentExecution
public class QuartzScheduledTransaction implements Job {

    @Autowired
    private TransactionService transactionService;
    @Override
    public void execute(JobExecutionContext context) throws JobExecutionException {
        long transactionId = context.getMergedJobDataMap().getLong("transactionId");
        try {
            transactionService.fireScheduledTransaction(transactionId);
        } catch (BusinessException e) {
            throw new RuntimeException(e);
        }
    }

}
