import React from 'react'
import { useContext } from 'react';
import AxiosContext from '../controller/AxiosProvider'
import { Navigate, Outlet } from 'react-router-dom';


const PrivateRoute = () => {
    
const {isAuthenticated} = useContext(AxiosContext);
  console.log("inside Private Route: "+isAuthenticated);
  return (
    isAuthenticated ? <Outlet/> :<Navigate to = "/login"/>
  )
}

export default PrivateRoute