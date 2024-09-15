package com.vishal.JobApp;

import com.vishal.JobApp.model.JobPost;
import com.vishal.JobApp.model.ResponseBody;
import com.vishal.JobApp.service.JobService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
public class JobController {
    @Autowired
    public JobService service;

    //Read
    @GetMapping("jobPosts")
    public List<JobPost> getAllJobs()
    {
        List<JobPost> jobs = service.getAllJobs();
        return jobs;
    }
    @GetMapping("jobPost/{postId}")
    public JobPost getJob(@PathVariable("postId") int postId){
        System.out.println("PostId query received from the client: "+postId);
        return service.getJob(postId);
    }
    //Create New Job
    @PostMapping("jobPost")
    public ResponseBody addJob(@RequestBody JobPost jobPost){
        service.addJob(jobPost);
        return new ResponseBody("200");
    }

    //Update Job
    @PutMapping("jobPost")
    public ResponseBody updateJob(@RequestBody JobPost jobPost){
        service.updateJob(jobPost);
        return new ResponseBody("200");
    }
    //Delete Job
    @DeleteMapping("jobPost{postId}")
    public ResponseBody deleteJob(@PathVariable("postId")int postId){
        service.deleteJob(postId);
        return new ResponseBody("200");
    }
    @PostMapping("handleForm")
    public String handleForm(JobPost jobPost){
        service.addJob(jobPost);
        return "success";
    }
}
