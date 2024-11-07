package com.vishal.JobApp.repo;

import com.vishal.JobApp.model.JobPost;
import jakarta.persistence.criteria.Predicate;
import org.springframework.data.jpa.domain.Specification;

public class JobSpecification {

    public static Specification<String> distinctBy(String paramName){
        return (root,query,criteriaBuilder)->{
            query.select(root.get(paramName)).distinct(true);
            System.out.println("It is query: "+": "+paramName+" :"+query.toString());
            return criteriaBuilder.conjunction();
        };
    }

}
