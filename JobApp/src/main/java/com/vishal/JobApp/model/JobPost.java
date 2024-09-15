package com.vishal.JobApp.model;

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

public class JobPost {
    private int postId;
    private Date postedOn;
    private String jobRole;
    private String jobType;
    private String location;
    private String company;
    private String experience;
    private List<String> skills;

}
