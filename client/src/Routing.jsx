import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SignIn from './pages/SignIn/SignIn'

function Routing() {
  return (
    <div className='main'>
        <Routes>
            <Route path='SignIn' element={<SignIn/>}/>

        </Routes>
    </div>
  )
}

export default Routing