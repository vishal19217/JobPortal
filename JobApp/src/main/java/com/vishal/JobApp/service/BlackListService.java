package com.vishal.JobApp.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;
import java.util.concurrent.TimeUnit;

@Service
public class BlackListService {


        @Autowired
        private RedisTemplate<String,String> redisTemplate;
        @Autowired
        private JwtService jwtService;
        // In-memory set to store blacklisted tokens
        private final Set<String> blacklistedTokens = new HashSet<>();

        // Add a token to the blacklist
        public void blacklistToken(String token) {
            Date expiry = jwtService.extractExpiration(token);
            long expiration = expiry.getTime() - System.currentTimeMillis();

            redisTemplate.opsForValue().set(token,"blacklisted",expiration, TimeUnit.MILLISECONDS);

            blacklistedTokens.add(token);
        }

        // Check if a token is blacklisted
        public boolean isTokenBlacklisted(String token){
            System.out.print("Is token blacklisted:: ");
            System.out.println(redisTemplate.hasKey(token));
            return redisTemplate.hasKey((token));
//            return blacklistedTokens.contains(token);
        }
}
