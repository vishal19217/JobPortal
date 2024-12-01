package com.vishal.JobApp.controller;

import com.vishal.JobApp.model.LoginUser;
import com.vishal.JobApp.model.ResponseBody;
import com.vishal.JobApp.model.User;
import com.vishal.JobApp.repo.UserRepo;
import com.vishal.JobApp.service.BlackListService;
import com.vishal.JobApp.service.JwtService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

@RestController
public class UserController {
    @Autowired
    private UserRepo userRepo;
    @Autowired
    AuthenticationManager authenticationManager;
    @Autowired
    JwtService jwtService;
    @Autowired
    BlackListService blackListService;
    @PostMapping("login")
    public String login(@RequestBody LoginUser loginUser){

        Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(loginUser.getUsername(),loginUser.getPassword()));

        // Generate a token which will be given to the client
        if(authentication.isAuthenticated()){
            System.out.println("Inside isAuthenticated.. during login process...");
            UserDetails userDetails = (UserDetails) authentication.getPrincipal();
            String role = userDetails.getAuthorities().toArray()[0].toString(); // Assuming you are using Spring Security's GrantedAuthority for roles

            return jwtService.generateToken(loginUser.getUsername(),role);
        }
        else return "Login failed";
    }
    @PostMapping("/logout")
    public ResponseEntity<String> logout(@RequestHeader ("Authorization") String token){

        if(token.startsWith("Bearer")){
            token = token.substring(7);
        }
        System.out.println("Token to be blacklisted. :"+token);
        blackListService.blacklistToken(token);

        return ResponseEntity.ok("Successfully Logout");
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
