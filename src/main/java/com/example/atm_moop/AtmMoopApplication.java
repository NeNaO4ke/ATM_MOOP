package com.example.atm_moop;

import com.example.atm_moop.domain.*;
import com.example.atm_moop.domain.enums.*;
import com.example.atm_moop.repository.*;
import com.example.atm_moop.service.CardService;
import org.javamoney.moneta.Money;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import javax.annotation.PostConstruct;
import java.math.BigDecimal;
import java.time.Instant;
import java.time.Period;
import java.time.ZoneId;
import java.util.Date;
import java.util.List;
import java.util.Optional;
import java.util.Set;

@SpringBootApplication
public class AtmMoopApplication {

    public static void main(String[] args) {
        SpringApplication.run(AtmMoopApplication.class, args);
    }

    @PostConstruct
    private void postConstruct() {


    }

}
