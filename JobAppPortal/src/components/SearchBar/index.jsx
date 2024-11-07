import React, { useState } from 'react'

function SearchBar(props) {

    const handleChange =  (event)=>{

        //It is object destructuring
        const {name,selectedValue} = event.target;
        setFilter((filter)=>{
            return {...filter,[name]:selectedValue}
        });
        console.log(filter);
    }
    // It is array destructuring
    const [filter,setFilter] = useState({role:"",type:"",location:"",experience:""});
  return (
    <div className='flex gap-4 mt-9 justify-center px-10'>
        <select name='role' defaultValue={'Job Role'} className='w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md' onChange={handleChange}>
            <option value="Job Role" hidden>Job Role</option>
            <option value="iOS Developer">iOS Developer</option>            
            <option value="iOS Developer">iOS Developer</option>            
            <option value="iOS Developer">iOS Developer</option>            
            <option value="iOS Developer">iOS Developer</option>            
            <option value="iOS Developer">iOS Developer</option>            
            <option value="iOS Developer">iOS Developer</option>            
            <option value="iOS Developer">iOS Developer</option>            
        </select>
        <select name='type' defaultValue = {'JobType'} className='w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md' onChange={handleChange}>
            <option value="JobType"  hidden>Job Type</option>
            <option value="FullTime">Full Time</option>            
            <option value="PartTime">PartTime</option>            
            <option value="Contractual">Contractual</option>            
            <option value="iOS Developer">iOS Developer</option>            
            <option value="iOS Developer">iOS Developer</option>            
            <option value="iOS Developer">iOS Developer</option>            
            <option value="iOS Developer">iOS Developer</option>            
        </select>
        <select name = 'location' defaultValue = {'Location'} className='w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md' onChange={handleChange}>
            <option value="Location" disabled hidden>Location</option>
            <option value="iOS Developer">Remote</option>            
            <option value="iOS Developer">iOS Developer</option>            
            <option value="iOS Developer">iOS Developer</option>            
            <option value="iOS Developer">iOS Developer</option>            
            <option value="iOS Developer">iOS Developer</option>            
            <option value="iOS Developer">iOS Developer</option>            
            <option value="iOS Developer">iOS Developer</option>            
        </select>
        <select name = 'experience' defaultValue = {'Experience'} className='w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md' onChange={handleChange}>
            <option value="Experience" disabled hidden>Experience</option>
            <option value="iOS Developer">iOS Developer</option>            
            <option value="iOS Developer">iOS Developer</option>            
            <option value="iOS Developer">iOS Developer</option>            
            <option value="iOS Developer">iOS Developer</option>            
            <option value="iOS Developer">iOS Developer</option>            
            <option value="iOS Developer">iOS Developer</option>            
            <option value="iOS Developer">iOS Developer</option>            
        </select>
        <button className='w-64 bg-blue-500 text-white py-3 font-semibold rounded-md'> Submit </button>
    </div>
  )
}

export default SearchBar