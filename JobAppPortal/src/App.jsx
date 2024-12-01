import { useContext, useEffect, useState } from 'react'
import './App.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Navbar from './components/Navbar'
import {axiosContext}  from './controller/AxiosProvider';
import PrivateRoute from './components/PrivateRoute';
import Dashboard from './components/Dashboard';
import LoginPage from './components/LoginPage';
import SignUp from './components/SignUp';
import JobForm from './components/JobForm';

// Define public routes accessible to all users
const routesForPublic = [
  {
    path: "/service",
    element: <div>Service Page</div>,
  },
  {
    path: "*",
    element: <div>Page not found</div>,
  },
];

// Define routes accessible only to authenticated users
const routesForAuthenticatedOnly = [
  {
    path: "/",
    element: <PrivateRoute/>, // Wrap the component in ProtectedRoute
    children: [
      {
        path: "/",
        element: <Dashboard/>,
      },
      {
        path: "/add",
        element: <JobForm/>,
      },
      {
        path: "/dashboard",
        element: <Dashboard/>,
      },
      {
        path: "/logout",
        element: <div>Logout</div>,
      },
    ],
  },
];

// Define routes accessible only to non-authenticated users
const routesForNotAuthenticatedOnly = [
  
  {
    path: "/login",
    element: <LoginPage parent="routed to login"/>,
  },
  {
      path: "/register",
      element: <SignUp/>,
  }
];


// Combine and conditionally include routes based on authentication status
const router = createBrowserRouter(
  [{
  element: <Navbar/>,
  children : [
  ...routesForPublic,
  ...routesForNotAuthenticatedOnly,
  ...routesForAuthenticatedOnly,
  ],
  }
]);


function App() {
  
  
const { checkForValidToken,token} = axiosContext();
  useEffect(()=>{
  },[token]);
  console.log("Inside the app.jsx token:" ,token );
  return (
    <>
    <div className='layout border-red-300 border-x-4'>
      <RouterProvider router={router}>
      </RouterProvider>
    </div>
    </>
  )
}


/*
2. Create a form to fill the jobs
3. Host it on the webpage
4. Now the update job, form fill jobs few optimizations etc are left
7. How to use httponly cookies so that user   
*/
export default App
