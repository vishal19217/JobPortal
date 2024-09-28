import React,{useState} from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
// import {useHistory} from 'react-router-dom';

function JobForm() {

    const navigate = useNavigate();
    const [formData,setFormData] = useState({});
    const handleSubmit = (event)=>{
        console.log(event);
        event.preventDefault();
        let url = "http://localhost:8080/jobPost";
        formData['skills'] = ["Hifi"];
        console.log(formData);
        let payload = formData;
        axios.post(url, payload)
            .then((response) => console.log(response))
            .catch((error) => console.error(error))
            .then(navigate('/'));
    };
    const handleInputChange = (event)=>{

        const {target} = event;
        const {id,value} = target;
        setFormData(formData=>{
            return {...formData,[id]:value}
        });
        console.log(formData);
    };


  return (
    <>    
    <div className="min-h-fit flex items-center justify-center">
    <div className='min-h-fit w-full max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-lg'> 
        <h1 className='text-2xl font-bold mb-6'>Job Form</h1>
        <form action='www.example.com' method='post' onSubmit={handleSubmit}>
        {/*  Company Name*/}
        <div className='mb-4'>
            <label className='block font-bold text-gray-600 mb-2' htmlFor="company"> Company Name: </label>
            <input className = 'w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500' type='text' placeholder='Enter Company Name' id="company" onChange={handleInputChange} required/>
        </div>

        {/* Job Role*/}
        <div className='mb-4'>
            <label className='block font-bold text-gray-700 mb-2' htmlFor="jobRole">Job Role </label>
            <input className = 'w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500' type='text' placeholder='Enter job Role' id='jobRole' onChange={handleInputChange} required/>
        </div>

        {/*JobType */}
        <div className='mb-4'>
            <label className='block font-bold text-gray-700 mb-2' htmlFor="jobType">Job Type </label>
            
            <select className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500' id="jobType" onChange={handleInputChange} required>
                <option value={"FullTime"}>Full Time</option>
                <option value={"Contractual"}>Contractual</option>
                <option value={"Intern"}>Intern</option>
            </select>
        </div>

        {/* <!-- Location --> */}
        <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Location</label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500" id="location"onChange={handleInputChange}  required>
                <option value="Remote">Remote</option>
                <option value="Office">Office</option>
            </select>
        </div>
        
         {/* <!-- Experience --> */}
        <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Experience (years)</label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500" id="experience" onChange={handleInputChange} required>
                <option value="" disabled selected>Select experience</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10+</option>
            </select>
        </div>


        {/* <!-- Skills --> */}
        <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Skills</label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500" id="skills" onChange={handleInputChange} multiple required>
                <option value="Java">Java</option>
                <option value="C++">C++</option>
                <option value="C">C</option>
                <option value="iOS">iOS</option>
                <option value="HTML">HTML</option>
                <option value="CSS">CSS</option>
                <option value="JavaScript">JavaScript</option>
            </select>
        </div>

        <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="link">Job Link</label>
            <input className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500" type="url" id="link" placeholder="Enter link to the job post" onChange={handleInputChange} required/>
        </div>
        <div className="mb-4">
                <button className="w-full bg-indigo-500 text-white py-2 px-4 rounded-lg hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600" type="submit" onClick={()=> navigate('/')}>
                    Submit
                </button>
            </div>
        </form>
              
    </div>
    </div>
    </>
  )
}

export default JobForm