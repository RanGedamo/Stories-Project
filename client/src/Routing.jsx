import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Comunnity from './pages/Comunnity/Comunnity'
import Otp from './pages/OTP/OtpVyrify'
import SignIn from './pages/SignIn/SignIn'
import SignUp from './pages/SignUp/SignUp'
import Community from './pages/Community/Community'
function Routing() {
  return (
    <div className='main'>
        <Routes>
            <Route path='SignIn' element={<SignIn/>}/>
            <Route path='community' element={<Comunnity/>}/>
            <Route path='Otp' element={<Otp/>}/>
            <Route path='SignUp' element={<SignUp/>}/>
            <Route path='community' element={<Community/>}/>
        </Routes>
    </div>
  )
}

export default Routing