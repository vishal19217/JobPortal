package com.vishal.JobApp.repo;

import com.vishal.JobApp.model.JobPost;
import org.springframework.data.domain.Example;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.FluentQuery;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface JobRepo extends JpaRepository<JobPost,Integer> , JpaSpecificationExecutor<JobPost> {
//    Optional<List<JobPost>> get

//    @Query(value = "Select * from jobPost where {}")
//    List<JobPost> findByJobType(String jobType);


    @Query(value = "SELECT * FROM job_post WHERE job_role Like %:jobRole% AND job_type LIKE %:jobType% AND location LIKE %:location% AND experience LIKE %:experience%",nativeQuery = true)
    List<JobPost> getFilteredJobs(String jobRole,String jobType,String location,String experience);
    @Query(value="SELECT DISTINCT(job_role) FROM job_post",nativeQuery = true)
    List<String>  getDistinctJobRole();
    @Query(value="SELECT DISTINCT(job_type) FROM job_post",nativeQuery = true)
    List<String>  getDistinctJobType();
    @Query(value="SELECT DISTINCT(location) FROM job_post",nativeQuery = true)
    List<String>  getDistinctLocations();
    @Query(value="SELECT DISTINCT(experience) FROM job_post",nativeQuery = true)
    List<String>  getDistinctExperience();
}


