import React from 'react'
import Header from './Header'
 import Footer from './Footer';
 import Content from './Content'
 import Login from './Login';
 import Cart from './Cart';
 import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Navbar';
import Signup from './Signup';
import Admin  from './Admin';
export default function App() {
  return (
    <>
    <Header/>
    <BrowserRouter>
        <Navbar/>
        <hr></hr>
        <Routes>
          <Route index element={<Content />} />
          <Route path="content" element={<Content />} />
          <Route path="cart" element={<Cart />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup/>} />
          <Route path="admin" element={<Admin/>} />
        </Routes>
      </BrowserRouter>
    
    <Footer/>
    </>
  )
}
