package com.example.atm_moop;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import javax.annotation.PostConstruct;

@SpringBootApplication
public class AtmMoopApplication {

    public static void main(String[] args) {
        SpringApplication.run(AtmMoopApplication.class, args);
    }


    @PostConstruct
    private void postConstruct() {


    }

}
