package com.example.atm_moop.domain;

import com.example.atm_moop.domain.enums.CARD_STATUS;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.Date;


@Getter
public class CardAtmUserDetails implements UserDetails {

    private final Card card;
    private final ATM atm;

    public CardAtmUserDetails(Card card, ATM atm) {
        this.card = card;
        this.atm = atm;
    }

    @JsonIgnore
    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return card.getUser().getRole();
    }

    @JsonIgnore
    @Override
    public String getPassword() {
        return card.getPin();
    }

    @JsonIgnore
    @Override
    public String getUsername() {
        return card.getNumber();
    }

    @JsonIgnore
    @Override
    public boolean isAccountNonExpired() {
        return card.getExpiryDate().after(new Date());
    }

    @JsonIgnore
    @Override
    public boolean isAccountNonLocked() {
        return !CARD_STATUS.BLOCKED.equals(card.getCardStatus());
    }

    @JsonIgnore
    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @JsonIgnore
    @Override
    public boolean isEnabled() {
        return true;
    }
}
