import React from 'react'
import './index.css'
function LoginPage() {
  return (
    <div className='flex'>
    <div className=' text-white login-pg inline-block m-auto border border-purple-950 rounded-md shadow-md'>
    <div className='mb-4' id='signin'><h1>Sign in</h1></div>
    <form className='flex flex-col gap-2'>
        <div className='mb-4 mx-4'>
            <label className='block mb-2'>Username</label>
            <div className='form-input'>
            <i class="fa-solid fa-user" style={{display: 'inline'}}></i>
            <input className='block-inline outline-none input-field' placeholder='Set Username' name='username' type='text'></input>
            </div>
          </div>
        <div className='mb-4 mx-4'>
            <label className='block mb-2'>Password</label>
            <div className='form-input'>
            <i class="fa-solid fa-lock" style={{display: 'inline'}}></i>
            <input className='block-inline outline-none input-field' placeholder='Password' name='password' type='password' required></input>
          </div>
        </div>
        <div className='mb-5 mx-4 text-center'>
            <button className='btn'> Login</button>
        </div>
    </form>
    <footer className='text-center'>
      Don't have an Account ? <br/><a href='/register'>Sign up</a>
    </footer>
    </div>
    </div>
  )
}

export default LoginPage