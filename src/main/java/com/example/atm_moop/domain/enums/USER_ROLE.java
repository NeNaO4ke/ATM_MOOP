package com.example.atm_moop.domain.enums;

import org.springframework.security.core.GrantedAuthority;

public enum USER_ROLE implements GrantedAuthority {
    ROLE_USER, ROLE_MANAGER, ROLE_SUPERUSER;

    @Override
    public String getAuthority() {
        return name();
    }
}
