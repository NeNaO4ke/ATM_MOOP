package com.example.atm_moop.config;

import com.example.atm_moop.repository.LoginAttemptRepository;
import com.example.atm_moop.service.CardService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.SimpleUrlAuthenticationFailureHandler;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
public class WebSecurityConfig extends AbstractHttpConfigurer<WebSecurityConfig, HttpSecurity> {

    @Autowired
    private PasswordEncoder passwordEncoder;
    @Autowired
    private CardService cardService;

    @Autowired
    private LoginAttemptRepository loginAttemptRepository;

    @Override
    public void configure(HttpSecurity http) throws Exception {
        AuthenticationManager authenticationManager = http.getSharedObject(AuthenticationManager.class);
        http.addFilterBefore(authenticationFilter(authenticationManager), UsernamePasswordAuthenticationFilter.class);
    }

    public static WebSecurityConfig webSecurityConfig() {
        return new WebSecurityConfig();
    }


    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity httpSecurity) throws Exception {
        httpSecurity
                .authorizeRequests()
                .antMatchers("/",
                        "/login",
                        "/static/**",
                        "/api/card/verify-atm-support-bank",
                        "/api/atm/all").permitAll()
                .anyRequest().authenticated()
                .and()
                .csrf().disable()
                .formLogin().usernameParameter("number").passwordParameter("pin")
                .loginProcessingUrl("/login")
                .permitAll()
                .and()
                .logout()
                .logoutSuccessUrl("/login")
                .invalidateHttpSession(true)
                .deleteCookies("JSESSIONID")
                .permitAll()
                .and()
                .apply(webSecurityConfig());
        return httpSecurity.build();
    }

    public SimpleAuthenticationFilter authenticationFilter(AuthenticationManager authenticationManager) throws Exception {
        SimpleAuthenticationFilter filter = new SimpleAuthenticationFilter();
        filter.setAuthenticationManager(authenticationManager);
        filter.setAuthenticationFailureHandler(authFailureHandler());
        filter.setAuthenticationSuccessHandler(authSuccessHandler());
        return filter;
    }

    @Autowired
    public void configureGlobal(AuthenticationManagerBuilder auth) throws Exception {
        auth.authenticationProvider(authProvider());
    }

    public AuthenticationProvider authProvider() {
        DaoAuthenticationProvider provider = new MyDaoProvider(loginAttemptRepository, cardService);
        provider.setUserDetailsService(cardService);
        provider.setPasswordEncoder(passwordEncoder);
        return provider;
    }

    public AuthSuccessHandler authSuccessHandler() {
        return new AuthSuccessHandler();
    }

    public AuthFailureHandler authFailureHandler() {
        return new AuthFailureHandler();
    }

}
