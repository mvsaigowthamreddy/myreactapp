import React from 'react'
import { useState } from 'react'
import axios from 'axios'
export default function Admin() {
    const[name,setName]=useState()
    const[price,setPrice]=useState()
    const[description,setDescription]=useState()
    const[url,setUrl]=useState()
     const api="http://localhost:8080/"
    const addProduct = async()=>{
       await axios.post(api,{name:name,desc:description,price:price,url:url})
    }
  return (
    <div>
        <p>
            <input type='text' onChange={(e)=>setName(e.target.value)} placeholder='Enter Name'></input>
        </p>
        <p>
            <input type='text' onChange={(e)=>setPrice(e.target.value)} placeholder='Enter Price'></input>
        </p>
        <p>
            <input type='text' onChange={(e)=>setDescription(e.target.value)} placeholder='Enter Description'></input>
        </p>
        <p>
            <input type='text' onChange={(e)=>setUrl(e.target.value)}  placeholder='Enter URL'></input>
        </p>
        
        
             <button onClick={addProduct}>Save</button>
            
       
    
       
        
    </div>
  )
}
