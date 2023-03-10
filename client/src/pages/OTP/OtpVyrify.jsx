import React from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon
}
  from 'mdb-react-ui-kit';
import Cookies from 'js-cookie';

import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { register } from '../../services/userServices';

function Otp() {
  const [submit, setSubmit] = useState()
  const [errorValidate, setErrorValidate] = useState("")
  const navigate = useNavigate()

  const changeVerifyCode = (e) => {
    const user = JSON.parse(Cookies.get('verify'))
    const verify = { ...user, verifyEmail: e.target.value }
    console.log(verify);
    setSubmit(verify)
  }
  const submitUser = async () => {
    return await register(submit).then(res => {
      console.log(res);
      if (res.verify) {
        return setErrorValidate(res.verify);
      }
      console.log(res.verify);
      setErrorValidate("success")
      setTimeout(() => {
        navigate('/signin')
      }, 3000)
    })
  };
  return (
    <MDBContainer fluid style={{ backgroundImage: "url('/images/public-images/sign.jpg')", backgroundSize: "100vh", backgroundSize: "100vw", width: "100" }}>

      <MDBRow className='d-flex justify-content-center align-items-center h-100' >
        <MDBCol col='12'>

          <MDBCard className='bg-dark  text-white my-5 mx-auto col-sm-12 col-md-8 col-lg-4 d-flex ' style={{ borderRadius: '1rem', height: 500 }}>
            <h2 className="fw-bold mb-2 mt-5 text-uppercase">Send to your email Verify Validation..</h2>
            <div className='d-flex justify-content-center mt-5'>

              <MDBInput wrapperClass='mb-3 mx-5 w-50 d-flex ' style={{ color: "white" }} labelClass='text-white' label='Code Verify' id='formControlLg' type='number' size="lg" name='verifyEmail' onChange={(e) => changeVerifyCode(e)} />
            </div>

            {errorValidate.length > 3 ? (<div className='d-flex justify-content-center'>
              <div className='text-danger' style={{ border: "solid red 1px" }}>{errorValidate}</div>
            </div>) : ""
            }
            <div className='d-flex mt-3 justify-content-center '>
              <MDBBtn outline className='mx-2 px-5 text-white col-4' color='white' size='lg' type='submit' onClick={() => submitUser()}>
                Check
              </MDBBtn>
            </div>


          </MDBCard>

        </MDBCol>
      </MDBRow>

    </MDBContainer>
  );
}

export default Otp;