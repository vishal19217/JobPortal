package com.vishal.JobApp.service;

import com.vishal.JobApp.model.JobPost;
import com.vishal.JobApp.model.JobRepo;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.ArrayList;
import java.util.List;

public class JobService {
    @Autowired
    private JobRepo jobRepo;
    public void addJob(JobPost jobPost){
        jobRepo.addJob(jobPost);
    }
    public List<JobPost> getAllJobs(){
        return jobRepo.getAllJobs();
    }
}
