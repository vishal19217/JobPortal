package com.vishal.JobApp.model;

import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Date;
import java.util.List;
@Repository
public class JobRepo {
    List<JobPost> jobs = new ArrayList<>(Arrays.asList(
            new JobPost(1,new Date(2024,9,10),"iosDeveloper","FullTime","Remote","Amazon","Fresher",Arrays.asList("Javascript","React","SQL")),
            new JobPost(2,new Date(2024,9,10),"JavaBackend Developer","FullTime","Remote","Google","Fresher",Arrays.asList("Javascript","React","SQL"))
    ));

    public List<JobPost> getAllJobs(){
        return jobs;
    }

    public void addJob(JobPost jobPost) {
        jobs.add(jobPost);

    }

    public JobPost getJob(int postId) {
        for (JobPost job:jobs) {
            if(job.getPostId() == postId){
                return job;
            }
        }
        return null;
    }

    public void updateJob(JobPost jobPost) {

    }

    public void deleteJob(int postId) {

    }
}
