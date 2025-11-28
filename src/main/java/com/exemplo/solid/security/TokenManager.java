package com.exemplo.solid.security;

import org.springframework.stereotype.Component;

import java.security.SecureRandom;
import java.util.Base64;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

@Component
public class TokenManager {

    private final Map<String, Long> validTokens = new ConcurrentHashMap<>();
    private static final long TOKEN_EXPIRATION = 24 * 60 * 60 * 1000;

    public String generateToken() {
        SecureRandom random = new SecureRandom();
        byte[] tokenBytes = new byte[32];
        random.nextBytes(tokenBytes);
        String token = Base64.getUrlEncoder().withoutPadding().encodeToString(tokenBytes);

        long expirationTime = System.currentTimeMillis() + TOKEN_EXPIRATION;
        validTokens.put(token, expirationTime);

        return token;
    }

    public boolean isValidToken(String token) {
        Long expirationTime = validTokens.get(token);

        if (expirationTime == null) {
            return false;
        }

        if (System.currentTimeMillis() > expirationTime) {
            validTokens.remove(token); // Remove token expirado
            return false;
        }

        return true;
    }

    public void revokeToken(String token) {
        validTokens.remove(token);
    }

    public void cleanExpiredTokens() {
        long now = System.currentTimeMillis();
        validTokens.entrySet().removeIf(entry -> entry.getValue() < now);
    }

}
