import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import JobCard from './components/JobCard'
import jobData from './JobDummyData';
import axios from "axios";
import JobForm from './components/JobForm'


function App() {
  
  const [count, setCount] = useState(0);
  const [jobs,setJob] = useState([]);

    const fetchJobs = async() =>{
    try{
      console.log("Hi from fetchJobs");
      const response = await axios.get("http://localhost:8080/jobPosts");
      console.log(response);
      setPost[response.data];
    }
    catch(exc){
      console.log(exc);
    }
  }
  
  // useEffect(()=>{
  //   fetchJobs()
  // },[]);

  return (
    <>
    <div className='h-full w-full border-red-300 border-x-4' >
      <Navbar/>
      <JobForm/>
      {/* <JobForm/>
      <Header/>
      <SearchBar/>
      {
        jobData.map((job)=> (
          <JobCard key={job.id} {...job}/>
        ))
      } */}
    </div>
    </>
  )
}


/*
1. Create a login page 
2. Create a form to fill the jobs
3. Host it on the webpage
*/
export default App
