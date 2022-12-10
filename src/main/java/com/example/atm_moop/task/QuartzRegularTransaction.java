package com.example.atm_moop.task;

import com.example.atm_moop.exception.ResourceNotFoundException;
import com.example.atm_moop.service.TransactionService;
import org.quartz.DisallowConcurrentExecution;
import org.quartz.Job;
import org.quartz.JobExecutionContext;
import org.quartz.JobExecutionException;
import org.springframework.beans.factory.annotation.Autowired;

@DisallowConcurrentExecution
public class QuartzRegularTransaction implements Job {

    @Autowired
    private TransactionService transactionService;

    @Override
    public void execute(JobExecutionContext context) throws JobExecutionException {
        long transactionId = context.getMergedJobDataMap().getLong("transactionId");
        try {
            transactionService.fireRegularTransaction(transactionId);
        } catch (ResourceNotFoundException e) {
            throw new RuntimeException(e);
        }
    }

}
