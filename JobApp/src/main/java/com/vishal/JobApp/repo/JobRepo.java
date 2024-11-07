package com.vishal.JobApp.repo;

import com.vishal.JobApp.model.JobPost;
import org.springframework.data.domain.Example;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.FluentQuery;
import org.springframework.stereotype.Repository;

@Repository
public interface JobRepo extends JpaRepository<JobPost,Integer> , JpaSpecificationExecutor<JobPost> {
//    Optional<List<JobPost>> get

//    @Query(value = "Select * from jobPost where {}")
//    List<JobPost> findByJobType(String jobType);

}


