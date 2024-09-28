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
import {Route,Routes} from 'react-router-dom'
import LoginPage from './components/LoginPage'
import SignUp from './components/SignUp'

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
    <div className='layout border-red-300 border-x-4'>
      <Navbar/>
      {/* {/* <JobForm/> */}
      <Routes>
        {/* element is prop which accepts jsx so we have to wrap the argument in {} to interpret it as a javascript*/}
        <Route path='/add' element  = {<JobForm/>}/>
        <Route path='/login' element  = {<LoginPage/>}/>
        <Route path='/Register' element  = {<SignUp/>}/>
      <Route path='/dashboard' element = {
        <>
        <Header/>
        <SearchBar/>
        {
          jobData.map((job)=> (
            <JobCard key={job.id} {...job}/>
          ))
        }
        </>
      }/>
      <Route path='*' element={<>
        <div>
          Page not found
        </div>
        </>}/>
      
      </Routes>
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
