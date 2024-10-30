import React from 'react'
import {Link, Route,Routes } from 'react-router-dom'
function Navbar() {
  return (
    <div className='bg-purple-950'>
    {/* <div className='bg-gradient-to-bl from-indigo-600 via-purple-700 to-pink-800'>   */}
        <div className='h-20 flex justify-between items-center w-full text-white  '>
        <div className='text-3xl pl-20 font-bold'>Welcome To Spring Job Center.</div>
        
        <div className='flex justify-between text-1xl text-white font-semibold px-5 gap-2'>
          <Routes>
            <Route path='/dashboard' element={
              <>
                <Link to = '/'>          
                <button className='rounded-md px-3 py-4 mx-3'>Home</button>
                </Link><Link to = '/add'>          
                  <button className='rounded-md px-3 py-4 mx-3'>Add Job</button>
                </Link>
                <Link to= '/update'>
                  <button className='rounded-md  px-3 py-4'>Update Job</button>
                </Link>
              </>
            }/>
            <Route path='/' element={
              <>
              <Link to = 'login'>          
              <button className='rounded-md px-3 py-4 mx-3'>Login</button>
              </Link>
              <Link to= '/register'>
                <button className='rounded-md  px-3 py-4'>Register</button>
              </Link>
              
              </>
            }/>
          
          </Routes>
        </div>
    </div>
    </div>

  )
}

export default Navbar