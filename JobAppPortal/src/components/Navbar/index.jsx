import React from 'react';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { axiosContext } from '../../controller/AxiosProvider'; // Ensure the path is correct

function Navbar() {
    // Accessing the context
    const { checkForValidToken } = axiosContext();
    var isAuthenticated = checkForValidToken();
    // useEffect(()=>{
    //     console.log("token value from navbar: ",token);
    // },token);
    console.log("NAvbar KE ANDAR HU MEI");
    return (
      <>
        <div className='bg-purple-950'>
            <div className='h-20 flex justify-between items-center w-full text-white'>
                <div className='text-3xl pl-20 font-bold'>Welcome To Spring Job Center.</div>
                
                <div className='flex justify-between text-1xl text-white font-semibold px-5 gap-2'>
                    {isAuthenticated ? (
                        // Render links for authenticated users
                        <>
                            <Link to='/'>
                                <button className='rounded-md px-3 py-4 mx-3'>Home</button>
                            </Link>
                            <Link to='/add'>
                                <button className='rounded-md px-3 py-4 mx-3'>Add Job</button>
                            </Link>
                            <Link to='/update'>
                                <button className='rounded-md px-3 py-4'>Update Job</button>
                            </Link>
                        </>
                    ) : (
                        // Render links for unauthenticated users
                        <>
                            <Link to='login'>
                                <button className='rounded-md px-3 py-4 mx-3'>Login</button>
                            </Link>
                            <Link to='/register'>
                                <button className='rounded-md px-3 py-4'>Register</button>
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </div>
        
        <Outlet /> {/* This is where child routes will be rendered */}
        </>
    );
}

export default Navbar;
