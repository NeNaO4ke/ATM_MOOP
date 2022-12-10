package com.example.atm_moop.config;

import com.example.atm_moop.domain.ATM;
import com.example.atm_moop.domain.Card;
import com.example.atm_moop.domain.LoginAttempt;
import com.example.atm_moop.repository.LoginAttemptRepository;
import com.example.atm_moop.service.CardService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;

import java.sql.Timestamp;
import java.time.Duration;
import java.time.Instant;
import java.time.ZoneId;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@Component
@RequiredArgsConstructor
public class MyDaoProvider extends DaoAuthenticationProvider {

    private final LoginAttemptRepository loginAttemptRepository;

    private final CardService cardService;

    @Autowired
    @Qualifier("cardService")
    @Override
    public void setUserDetailsService(UserDetailsService userDetailsService) {
        super.setUserDetailsService(userDetailsService);
    }

    @Override
    public Authentication authenticate(Authentication authentication) throws AuthenticationException {
        Card card = new Card();
        ATM atm = new ATM();
        String[] usernameAndDomain = StringUtils.split(
                authentication.getName(), "\u2028");
        if (usernameAndDomain != null) {
            card.setNumber(usernameAndDomain[0]);
            atm.setId(Long.valueOf(usernameAndDomain[1]));
        }
        try {
            Authentication auth = super.authenticate(authentication);
            loginAttemptRepository.save(new LoginAttempt(null, true, null, card, atm));
            return auth;
        } catch (BadCredentialsException e) {
            loginAttemptRepository.save(new LoginAttempt(null, false, null, card, atm));
            Timestamp now = new Timestamp(new Date().getTime());
            Instant nowMinusHour = new Date().toInstant()
                    .atZone(ZoneId.systemDefault())
                    .minus(Duration.ofHours(1))
                    .toInstant();
            Timestamp start = Timestamp.from(nowMinusHour);
            List<LoginAttempt> attempts = loginAttemptRepository.findTop3ByCardAndAtBetweenOrderByAtDesc(card, start, now);
            if(!attempts.isEmpty()){
                Optional<LoginAttempt> first = attempts.stream().filter(LoginAttempt::isSuccessful).findFirst();
                if(first.isEmpty() && attempts.size() == 3){
                    try {
                        cardService.blockCardByNumber(card.getNumber());
                    } catch (Exception ex) {
                        throw new RuntimeException(ex);
                    }
                }
            }
            throw e;
        }

    }

}
