import React from 'react'

function Navbar() {
  return (
    <div className='bg-purple-950'>
    {/* <div className='bg-gradient-to-bl from-indigo-600 via-purple-700 to-pink-800'>   */}
        <div className='h-20 flex justify-between items-center w-full text-white  '>
        <div className='text-3xl pl-20 font-bold'>Welcome To Spring Job Center.</div>
        
        <div className='flex justify-between text-1xl text-white font-semibold px-5 gap-2'>
          <button className='rounded-md px-3 py-4 mx-3'>Add Job</button>
          <button className='rounded-md  px-3 py-4'>Update Job</button>
        </div>
    </div>
    </div>

  )
}

export default Navbar