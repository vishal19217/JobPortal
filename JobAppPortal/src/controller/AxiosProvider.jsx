import React, { createContext, useState,useMemo,useEffect, useContext } from 'react';
import axios from 'axios';

// Create Context
const AxiosContext = createContext();
function isTokenValid(token) {
    const parts = token.split('.');
    if (parts.length !== 3) {
      // Invalid token format
      console.log("Invalid token format");
      return false;
    }
  
    try {
      // Decode the payload
      const payload = JSON.parse(atob(parts[1]));
  
      // Check if the `exp` claim exists and if the token is expired
      if (!payload.exp) {
        console.error("No expiration claim found in token");
        return false;
      }
  
      // Get current time in seconds
      const now = Math.floor(Date.now() / 1000);
  
      // Return true if the token is not expired
      return now < payload.exp;
    } catch (error) {
      console.error("Error decoding token:", error);
      return false;
    }
  }
  
const AxiosProvider = (props) => {
   
    const [token, setToken] = useState(()=>{
        let extractToken = localStorage.getItem('token');
        if(extractToken!= null && isTokenValid(extractToken)){
            return extractToken;
        } 
        return null;
    });
    const [baseURL,setBaseUrl] = useState("http://localhost:8080");

    const checkForValidToken= ()=>{
        if(token!= null && isTokenValid(token)){
            return true;
        }
        return false; 
    }
    const updateToken = (token)=>{
        localStorage.setItem('token',token);
        setToken(token);
    };

    useEffect(()=>{
        let extractToken = localStorage.getItem('token');
        if(extractToken!= null && isTokenValid(extractToken)){
            if(token != extractToken){
                setToken(extractToken);
            }
        }   
    },[token]);

       // Memoize the value so it doesn't change on every render
    const value = useMemo(() => ({
     checkForValidToken,token,baseURL,setToken,updateToken}), [token,baseURL]);

    
    return (
        <AxiosContext.Provider value={value}>
            {props.children}
        </AxiosContext.Provider>
    );
};
export const axiosContext = ()=>{
    return useContext(AxiosContext);
}

export default AxiosProvider;
