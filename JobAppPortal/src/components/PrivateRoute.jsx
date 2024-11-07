import React, { useEffect } from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import { axiosContext } from '../controller/AxiosProvider';

const PrivateRoute = () => {
    
const {checkForValidToken,token} = axiosContext();
  let isAuthenticated = checkForValidToken();
  useEffect(()=>{
    
  },[token]);
  console.log("inside Private Route: "+isAuthenticated);
  return (
    isAuthenticated ? <Outlet/> :<Navigate to = "/login"/>
  )
}

export default PrivateRoute