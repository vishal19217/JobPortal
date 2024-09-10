package com.vishal.JobApp.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

//using lombok we don't have to write getter setter explicitly.

@Data
@NoArgsConstructor
@AllArgsConstructor

public class JobPost {
    private int postId;
    private String postProfile;
    private String postDesc;
    private int reqExperience;
    private List<String> postTechStack;
}
