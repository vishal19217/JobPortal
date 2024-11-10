package com.vishal.JobApp.service;

import com.vishal.JobApp.model.JobPost;
import com.vishal.JobApp.repo.JobRepo;
import org.springframework.beans.factory.annotation.Autowired;
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
    public List<JobPost> getFilteredJobs(String jobRole, String location, String jobType, String experience) {
        // Set default values if null (use empty strings for strings to match any value)
        String jobRoleFilter = (jobRole != null) ? jobRole : "";
        String locationFilter = (location != null) ? location : "";
        String jobTypeFilter = (jobType != null) ? jobType : "";
        String experienceFilter = (experience != null) ? experience : "";
        System.out.println("jobRoleType: "+" "+jobRoleFilter);
        return jobRepo.getFilteredJobs(jobRoleFilter,jobTypeFilter,locationFilter,experienceFilter);
//        return jobRepo.filteredSearch(
//                jobRoleFilter, jobTypeFilter, locationFilter, experienceFilter);
    }

    public List<String> getDistinctValueForFilter(String filter) {
        filter = filter.replaceAll("([a-z])([A-Z]+)", "$1_$2").toLowerCase();
        System.out.println("inside job service distinctValue for fileter: "+filter);
        if(filter.equals( "job_role")){
            return jobRepo.getDistinctJobRole();
        }
        else if(filter.equals( "job_type")){
            System.out.println("Babua");
            return jobRepo.getDistinctJobType();
        }
        else if(filter.equals("experience")){
            return jobRepo.getDistinctExperience();
        }
        else if(filter.equals( "location")){
            return jobRepo.getDistinctLocations();
        }
        return new ArrayList<>();
    }


//    public List<JobPost> findByJobType(String jobType) {
//        return jobRepo.findByJobType(jobType);
//    }


}
