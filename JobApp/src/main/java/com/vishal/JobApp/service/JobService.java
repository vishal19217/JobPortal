package com.vishal.JobApp.service;

import com.vishal.JobApp.model.JobPost;
import com.vishal.JobApp.repo.JobRepo;
import com.vishal.JobApp.repo.JobSpecification;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class JobService {
    @Autowired
    private JobRepo jobRepo;
    public void addJob(JobPost jobPost){
        jobRepo.save(jobPost);
    }
    public List<JobPost> getAllJobs(){
        return jobRepo.findAll();
    }
    public JobPost getJob(int postId) {
        Optional<JobPost> res = jobRepo.findById(postId);
        return res.orElse(null);
    }
    public void updateJob(JobPost jobPost) {
            jobRepo.save(jobPost);
    }
    public void deleteJob(int postId) {
    }
    public void load() {
        List<JobPost> jobs = new ArrayList<>(Arrays.asList(
                new JobPost(1,new Date(2024,9,10),"iosDeveloper","FullTime","Remote","Amazon","Fresher",Arrays.asList("Javascript","React","SQL")),
                new JobPost(2,new Date(2024,9,10),"JavaBackend Developer","FullTime","Remote","Google","Fresher",Arrays.asList("Javascript","React","SQL"))
        ));
        for (JobPost jobPost: jobs) {
            jobRepo.save(jobPost);
        }
    }


//    public List<JobPost> findByJobType(String jobType) {
//        return jobRepo.findByJobType(jobType);
//    }


}
