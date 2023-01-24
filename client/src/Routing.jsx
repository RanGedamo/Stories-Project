import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Community from './pages/Community/Community'
import Home from './pages/Home/Home'
import Otp from './pages/OTP/OtpVyrify'
import SignIn from './pages/SignIn/SignIn'
import SignUp from './pages/SignUp/SignUp'
function Routing() {
  return (
    <div className='main'>
        <Routes>
            <Route path='community' element={<Community/>}/>
            <Route path='SignIn' element={<SignIn/>}/>
            <Route path='SignUp' element={<SignUp/>}/>
            <Route path='Otp' element={<Otp/>}/>
            <Route path='/' element={<Home/>}/>
        </Routes>
    </div>
  )
}

export default Routing