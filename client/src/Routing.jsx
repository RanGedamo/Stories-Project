import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Comunnity from './pages/Comunnity/Comunnity'
import Otp from './pages/OTP/OtpVyrify'
import SignIn from './pages/SignIn/SignIn'
import SignUp from './pages/SignUp/SignUp'

function Routing() {
  return (
    <div className='main'>
        <Routes>
            <Route path='SignIn' element={<SignIn/>}/>
            <Route path='community' element={<Comunnity/>}/>
            <Route path='Otp' element={<Otp/>}/>
            <Route path='SignUp' element={<SignUp/>}/>
        </Routes>
    </div>
  )
}

export default Routing