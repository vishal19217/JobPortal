package com.vishal.JobApp.service;

import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Set;

@Service
public class BlackListService {

        // In-memory set to store blacklisted tokens
        private final Set<String> blacklistedTokens = new HashSet<>();

        // Add a token to the blacklist
        public void blacklistToken(String token) {
            blacklistedTokens.add(token);
        }

        // Check if a token is blacklisted
        public boolean isTokenBlacklisted(String token){
            return blacklistedTokens.contains(token);
        }
}
