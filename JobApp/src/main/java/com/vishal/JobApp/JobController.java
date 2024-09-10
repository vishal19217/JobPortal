package com.vishal.JobApp;

import com.vishal.JobApp.model.JobPost;
import com.vishal.JobApp.service.JobService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class JobController {
    @Autowired
    public JobService service;
    @GetMapping({"/","home"})
    public String home(){
        return "home";
    }
    @GetMapping("addjob")
    public String addJob(){
        return "addjob";
    }
    @PostMapping("handleForm")
    public String handleForm(JobPost jobPost){
        service.addJob(jobPost);
        return "success";
    }
}
