package com.vishal.JobApp.controller;

import com.vishal.JobApp.model.LoginUser;
import com.vishal.JobApp.model.ResponseBody;
import com.vishal.JobApp.model.User;
import com.vishal.JobApp.repo.UserRepo;
import com.vishal.JobApp.service.JwtService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

@RestController
public class UserController {
    @Autowired
    private UserRepo userRepo;
    @Autowired
    AuthenticationManager authenticationManager;
    @Autowired
    JwtService jwtService;
    @PostMapping("login")
    public String login(@RequestBody LoginUser loginUser){

        Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(loginUser.getUsername(),loginUser.getPassword()));

        // Generate a token which will be given to the client
        if(authentication.isAuthenticated()){
            return jwtService.generateToken(loginUser.getUsername());
        }
        else return "Login failed";
    }
    @GetMapping("/hello")
    public String res(){
        return "hello";
    }
    @PostMapping("register")
    public User register(@RequestBody User user){
        System.out.println("Registering the user");
        return userRepo.save(user);
    }
    @GetMapping("v1/auth/loadUsers")
    public ResponseBody<User> loadUsers(@RequestBody LoginUser loginUser){
        User user = userRepo.findByUsername(loginUser.getUsername());
        System.out.println(user.toString());
        return new ResponseBody("200");
    }
}
