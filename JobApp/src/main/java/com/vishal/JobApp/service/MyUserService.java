package com.vishal.JobApp.service;

import com.vishal.JobApp.model.User;
import com.vishal.JobApp.model.UserPrincipal;
import com.vishal.JobApp.repo.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class MyUserService implements UserDetailsService {
    @Autowired
    private UserRepo userRepo;
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        System.out.println("Inside loadUSerByUsername");
        System.out.println("User name we get from the request:"+username);
        User user = userRepo.findByUsername(username);
        System.out.println(user.toString());
        if(user!=null){
            return new UserPrincipal(user);
        }
        else{
            System.out.println("User not found");
            throw new UsernameNotFoundException("User not found");
        }
    }
}
