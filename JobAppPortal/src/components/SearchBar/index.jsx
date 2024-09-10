import React from 'react'

function SearchBar() {
  return (
    <div className='flex gap-4 my-10 justify-center px-10'>
        <select className='w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md'>
            <option value="" disabled hidden selected>Job Role</option>
            <option value="iOS Developer">iOS Developer</option>            
            <option value="iOS Developer">iOS Developer</option>            
            <option value="iOS Developer">iOS Developer</option>            
            <option value="iOS Developer">iOS Developer</option>            
            <option value="iOS Developer">iOS Developer</option>            
            <option value="iOS Developer">iOS Developer</option>            
            <option value="iOS Developer">iOS Developer</option>            
        </select>
        <select className='w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md'>
            <option value="" disabled hidden selected>Job Type</option>
            <option value="iOS Developer">Full Time</option>            
            <option value="iOS Developer">iOS Developer</option>            
            <option value="iOS Developer">iOS Developer</option>            
            <option value="iOS Developer">iOS Developer</option>            
            <option value="iOS Developer">iOS Developer</option>            
            <option value="iOS Developer">iOS Developer</option>            
            <option value="iOS Developer">iOS Developer</option>            
        </select>
        <select className='w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md'>
            <option value="" disabled hidden selected>Location</option>
            <option value="iOS Developer">Remote</option>            
            <option value="iOS Developer">iOS Developer</option>            
            <option value="iOS Developer">iOS Developer</option>            
            <option value="iOS Developer">iOS Developer</option>            
            <option value="iOS Developer">iOS Developer</option>            
            <option value="iOS Developer">iOS Developer</option>            
            <option value="iOS Developer">iOS Developer</option>            
        </select>
        <select className='w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md'>
            <option value="" disabled hidden selected>Experience</option>
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