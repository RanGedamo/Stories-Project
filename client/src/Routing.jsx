import Cookies from 'js-cookie'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Community from './pages/Community/Community'
import Home from './pages/Home/Home'
import Otp from './pages/OTP/OtpVyrify'
import SignIn from './pages/SignIn/SignIn'
import SignUp from './pages/SignUp/SignUp'
function Routing() {
  const user = Cookies.get("user")
  return (
    <div className='main'>
        <Routes>
            <Route path='SignIn' element={<SignIn/>}/>
            <Route path='SignUp' element={<SignUp/>}/>
            <Route path='community/:id' element={user?<Community/>:<SignIn/>}/>
            <Route path='Otp' element={<Otp/>}/>
            <Route path='/' element={user?<Home/>:<SignIn/>}/>
        </Routes>
    </div>
  )
}

export default Routing