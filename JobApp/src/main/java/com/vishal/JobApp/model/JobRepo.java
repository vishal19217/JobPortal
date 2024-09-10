package com.vishal.JobApp.model;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class JobRepo {
    List<JobPost> jobs = new ArrayList<>(Arrays.asList(
            new JobPost(),
            new JobPost(),
            new JobPost(),
            new JobPost()
    ));
    public List<JobPost> getAllJobs(){
        return jobs;
    }

    public void addJob(JobPost jobPost) {
        jobs.add(jobPost);

    }
}
