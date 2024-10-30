import { useContext, useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import JobCard from './components/JobCard'
import jobData from './JobDummyData';
import axios from "axios";
import JobForm from './components/JobForm'
import {Link, Navigate, Route,Routes, useNavigate} from 'react-router-dom'
import LoginPage from './components/LoginPage'
import SignUp from './components/SignUp'
import AxiosContext from './controller/AxiosProvider'
import PrivateRoute from './components/PrivateRoute'
function App() {
  
  const [count, setCount] = useState(0);
  const [jobs,setJob] = useState([]);
  const {isAuthenticated,updateAuthentication} = useContext(AxiosContext);

  const fetchJobs = async() =>{
    try{
      console.log("Hi from fetchJobs");
      const response = await axios.get("http://localhost:8080/jobPosts");
      console.log(response);
      setPost(response.data);
    }
    catch(exc){
      console.log(exc);
    }
  }
  const acculumateJobCards = ()=>
  {
      return jobData.map((job)=> (
        <JobCard key={job.id} {...job}/>
      ));
  }
  // useEffect(()=>{
  //   fetchJobs()
  // },[]);
  console.log("Inside the App.jsx funcation")
  if (isAuthenticated === undefined) {console.log("Ruk ja thoda !!! Sas lene dee");return (<div>Loading...</div>);} // or any loading indicator
  return (
    <>
    <div className='layout border-red-300 border-x-4'>
      {<Navbar/>}
      {console.log("IsAutenticated: "+isAuthenticated)}

      <Routes>  
        <Route element = {<PrivateRoute/>}>
          <Route path="/add" element = {<div><JobForm/></div>}/>
          <Route path="/" element = {<Navigate to = {"/dashboard"}/>}/>
          <Route path="/dashboard" element = {
            <div>
            <Header/>
            <SearchBar/>  
            {
              acculumateJobCards()
            }
            </div>}
          />
        </Route>
        <Route path="/login" element= {<LoginPage parent="routed to /login"/>}/>
        <Route path="/register" element = { !isAuthenticated ? <SignUp/> :(<Navigate To="/dashboard"/>)}/>
        <Route path='*' element={<div>Page not found</div>}/> 
      
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
