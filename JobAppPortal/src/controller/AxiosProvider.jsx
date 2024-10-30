import React, { createContext, useState } from 'react';
import axios from 'axios';

// Create Context
const AxiosContext = createContext();

export default AxiosContext;
export const AxiosProvider = (props) => {

    
    const [isAuthenticated,setAuthenticatedState] = useState(false);

    const [axiosInstance, setAxiosInstance] = useState(() =>
        axios.create({
            baseURL: 'http://localhost:8080',
        })
    );
    const updateAuthentication = (value)=>{
        setAuthenticatedInstance(value);
    };
    // Function to set the authenticated Axios instance
    const setAuthenticatedInstance = (username, password) => {
        
        console.log("Call for authenticated Instance update: "+username+" : "+password);
        const authAxios = axios.create({
            baseURL: 'http://localhost:8080',
            headers: {
                Authorization: `Basic ${(`${username}:${password}`)}`,
            },
        });
        setAxiosInstance(authAxios);
        setAuthenticatedState(true);
    };

    return (
        <AxiosContext.Provider value={{ axiosInstance, setAuthenticatedInstance,isAuthenticated,updateAuthentication }}>
            {props.children}
        </AxiosContext.Provider>
    );
};
