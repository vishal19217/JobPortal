package com.vishal.JobApp.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.Date;
import java.util.List;

//using lombok we don't have to write getter setter explicitly.

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="JobPost")
    public class JobPost {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int postId;
    private Date postedOn;
    private String jobRole;
    private String jobType;
    private String location;
    private String company;
    private String experience;
    private List<String> skills;

}
