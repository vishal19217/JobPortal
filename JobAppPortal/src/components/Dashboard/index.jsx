import React, { useContext,useEffect, useState } from "react";
import Header from "../Header";
import SearchBar from "../SearchBar";
import {axiosContext} from "../../controller/AxiosProvider";
import JobCard from "../JobCard";
import axios from "axios";
function Dashboard(){

    const { token,baseURL} = axiosContext();
    const [listedJobs,updateListedJobs] = useState([]);
    const accumulateJobCards = async ()=>{
        try{
            var response = await axios.get(baseURL+"/v1/api/jobPosts",{
                headers: {
                    'Authorization' : `Bearer ${token}`, 
                }
            });
            try {
                console.log(response.data);
                updateListedJobs(response.data);
            } catch (e) {
                console.error("Invalid JSON:", e);
            }
        }
        catch(error){
            console.log("Error in fetching job posts"+error);
        }
    };

      // Fetch job cards only once when component mounts
    useEffect(() => {
        console.log("Inside useffect of dashbaoard:   ",token);
        accumulateJobCards();
    }, [token]); // Empty dependency array means it runs only once

    return (
        <div>
        <Header/>
        <SearchBar/>  
        {
            listedJobs?.length > 0  && listedJobs.map((job) => (
                <JobCard 
                    key={job.id}
                    jobRole={job.jobRole}
                    company={job.company}
                    jobType={job.jobType}
                    experience={job.experience}
                    location={job.location}
                    skills={job.skills}
                    postedOn={job.postedOn}
                    link={job.link}
                />
            ))
        }
        </div>
        );
}
export default Dashboard;