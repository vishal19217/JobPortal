import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { axiosContext } from '../../controller/AxiosProvider'; // Ensure the path is correct

function Navbar() {
    // Accessing the context
    const { checkForValidToken,baseURL,token,deleteToken} = axiosContext();
    
    const [isAuthenticated,setIsAuthenticated] = useState(false);
    const logout = async()=>{
        try{
            var response = await axios.post(baseURL+"/logout",{},{
                headers: {
                    'Authorization' : `Bearer ${token}`, 
                }
            });
            console.log("Logged out successfully");
            deleteToken();
            setIsAuthenticated(false);
        }
        catch(e){
            console.error("Error in logging out: ",e);
        }
        
    }
    useEffect(()=>{
        console.log("Inside useeffect of Navbar");
        setIsAuthenticated(checkForValidToken);
    },[isAuthenticated,token]);
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
                            <button className='rounded-md px-3 py-4' onClick={logout}>
                                Logout
                            </button>
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
