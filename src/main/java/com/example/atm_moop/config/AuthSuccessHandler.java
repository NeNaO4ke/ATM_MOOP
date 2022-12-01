package com.example.atm_moop.config;

import com.example.atm_moop.domain.CardAtmUserDetails;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
import org.springframework.stereotype.Component;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class AuthSuccessHandler implements AuthenticationSuccessHandler {

    ObjectMapper objectMapper = new ObjectMapper();

    @Override
    public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response, Authentication authentication) throws IOException, ServletException {
        CardAtmUserDetails cardAtmUserDetails = (CardAtmUserDetails) authentication.getPrincipal();
        response.getOutputStream().println(objectMapper.writeValueAsString(cardAtmUserDetails));
        response.setStatus(200);
    }
}
