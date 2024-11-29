import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

export default function 
() {
    const Navigate=useNavigate();
    const handleLogin =()=>{
        Navigate("/Login")
    }
  return (
    <div>
      <p>Username:
      <input type='text' placeholder='Enter your username'></input>
      </p>
      <p>Password:
        <input type='password' placeholder='Enter your password'></input>
      </p>
      <p>Email:
        <input type='text' placeholder='Enter your email'></input>
      </p>
      <p>Ph.no: 
        <input type='text' placeholder='Enter your contact number'></input>
    </p>
    <p>DOB:
    <input type='datetime-local' placeholder='Enter your DOB'></input>
    </p>
    
    <button>Submit</button>
    <hr></hr>
    <button onClick={handleLogin}>Already a Member? Just Login</button>
    </div>
  )
}
