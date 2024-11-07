import React from 'react'
import './index.css'
import { useState } from 'react';
import axios from 'axios';
import { Link,useNavigate} from 'react-router-dom'
import { axiosContext } from '../../controller/AxiosProvider';
function index() {

  const {baseURL} = axiosContext();

  const [formData, setFormData] = useState({ username: "", password: "" });
  const navigate = useNavigate();
  
  const handleFormData = (event) => {
    const { name, value } = event.target;

    setFormData((formData) => {
      return { ...formData, [name]: value };
    });
  };
  const handleSubmit = async (event) => {
    try {

      event.preventDefault();
      console.log("Inside Signup handleSubmit");
      
      const response = await axios.post(
        baseURL + "/register",{
            username: formData["username"],
            password: formData["password"],
            emailId: formData["emailId"],
            role: "user"
          }
      );
      console.log(response.data);
      if (response.status === 200) {
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='flex'>
    <div className='signin-pg text-white inline-block m-auto border border-purple-950 rounded-md shadow-md'>
    <div className='mb-4' id='signin'><h1>Sign Up</h1></div>
    <form className='flex flex-col gap-2' method='post' onSubmit={handleSubmit}>
    <div className='mb-4 mx-4'>
            <label className='block mb-2'>Email</label>
            <div className='form-input'>
            <i className="fa-solid fa-envelope" style={{display: 'inline'}}></i>
            <input className='block-inline outline-none input-field' placeholder='Enter Email' name='emailId' type='email' 
                onChange={handleFormData}></input>
            </div>
        </div>
        <div className='mb-4 mx-4'>
            <label className='block mb-2'>Username</label>
            <div className='form-input'>
            <i className="fa-solid fa-user" style={{display: 'inline'}}></i>
            <input className='block-inline outline-none input-field' placeholder='Set Username' name='username' type='text' 
                onChange={handleFormData}></input>
            </div>
        </div>
        <div className='mb-4 mx-4'>
            <label className='block mb-2'>Password</label>
            <div className='form-input'>
            <i className="fa-solid fa-lock" style={{display: 'inline'}}></i>
            <input className='block-inline outline-none input-field' placeholder='Set Password' name='password' type='password' 
                onChange={handleFormData}></input>
            </div>
        </div>
        <div className='mb-5 mx-4 text-center'>
            <button className='btn'> Sign Up</button>
        </div>
    </form>
    <footer className='text-center'>
      Already have an Account ? <br/><Link to='/login'>Sign in</Link>
    </footer>
    </div>
    </div>
  )
}

export default index