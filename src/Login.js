import React from 'react'
import { useNavigate } from 'react-router-dom'
export default function Login() {
const Navigate = useNavigate();
const handleSignup = ()=>{
  Navigate("/signup")
};
  return (
    <>
        <p>
            <input type='text' placeholder='Enter your name'></input>
        </p>
        <p>
            <input type='password' placeholder='Enter your password'></input>
        </p>
        <button>Login</button>
        <hr></hr>
        <button onClick={handleSignup}>Create Account</button>

    </>

    
  )
}
//this is an idependent compnent