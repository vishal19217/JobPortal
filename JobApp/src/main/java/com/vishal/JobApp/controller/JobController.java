package com.vishal.JobApp.controller;

import com.vishal.JobApp.model.JobPost;
import com.vishal.JobApp.model.ResponseBody;
import com.vishal.JobApp.service.JobService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
public class JobController {
    @Autowired
    public JobService service;

    //Read
    @GetMapping("v1/api/jobPosts")
    //Get all Jobs
    public List<JobPost> getAllJobs()
    {
        List<JobPost> jobs = service.getAllJobs();
        return jobs;
    }
    //Get a job based on a job Post id
    @GetMapping("v1/api/jobPost/{postId}")
    public JobPost getJob(@PathVariable("postId") int postId){
        System.out.println("PostId query received from the client: "+postId);
        return service.getJob(postId);
    }
    //Initial db load with dummy data just to occupy the ui
    @GetMapping("v1/api/load")
    public String load(){
        service.load();
        return "success";
    }
    //Create New Job
    @PostMapping("v1/api/jobPost")
    public ResponseBody addJob(@RequestBody JobPost jobPost){
        System.out.println("Job to be added in db: "+jobPost.toString());
        service.addJob(jobPost);
        return new ResponseBody("200");
    }

    //Update Job
    @PutMapping("v1/api/jobPost")
    public ResponseBody updateJob(@RequestBody JobPost jobPost){
        System.out.println("Job to be updated in the db: "+jobPost.toString());
        service.updateJob(jobPost);
        return new ResponseBody("200");
    }
    //Delete Job
    @DeleteMapping("v1/api/jobPost{postId}")
    public ResponseBody deleteJob(@PathVariable("postId")int postId){
        service.deleteJob(postId);
        return new ResponseBody("200");
    }
//    @GetMapping("v1/api/jobPost/experience")
//    public List<String> getDistinctExperience(){
//        return service.getDistinctExperience();
//    }
//    @GetMapping("v1/api/jobPost/location")
//    public List<String> getDistinctLocation(){
//        return service.getDistinctLocation();
//    }
//    @GetMapping("v1/api/jobPost/jobRole")
//    public List<String> getDistinctJobRole(){
//        return service.getDistinctJobRole();
//    }
    @GetMapping("v1/api/jobPost/distinct/field")
    public List<String> getDistinct(@RequestParam("filter") String filter){
        System.out.println("Filter value :"+filter);
        return service.getDistinctValueForFilter(filter);
//        return service.getDistinctFilterValue(filter);
    }

    @GetMapping("v1/api/jobPost/search")
    public List<JobPost> filteredJobs(
            @RequestParam("jobRole") Optional<String> jobRole,
            @RequestParam("location") Optional<String> location,
            @RequestParam("jobType") Optional<String> jobType,
            @RequestParam("experience") Optional<String> experience){
            List<JobPost> jobs = service.getFilteredJobs(jobRole.orElse(""),location.orElse(""),jobType.orElse(""),experience.orElse(""));
        return jobs;
    }
//    @GetMapping("v1/api/jobPost/search")
//    public List<JobPost> search(@RequestParam("JobType") String jobType){
//        return service.findByJobType();
//    }

}
