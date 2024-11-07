package com.vishal.JobApp.repo;

import com.vishal.JobApp.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface UserRepo extends JpaRepository<User,String> {

    @Query(value = "select * from appusers where username =:username",nativeQuery = true)
    User findByUsername(String username);
}
