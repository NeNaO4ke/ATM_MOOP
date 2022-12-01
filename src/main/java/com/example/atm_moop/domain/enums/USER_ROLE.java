package com.example.atm_moop.domain.enums;

import org.springframework.security.core.GrantedAuthority;

public enum USER_ROLE implements GrantedAuthority {
    USER, MANAGER, SUPERUSER;

    @Override
    public String getAuthority() {
        return name();
    }
}
