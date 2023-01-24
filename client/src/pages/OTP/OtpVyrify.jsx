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
import { useState } from 'react';

function Otp() {
const [inputs,setInputs] = useState()


  return (
    <MDBContainer fluid style={{backgroundImage:"url('/images/public-images/sign.jpg')",backgroundSize:"100vh",backgroundSize:"100vw",width:"100"}}>

      <MDBRow className='d-flex justify-content-center align-items-center h-100' >
        <MDBCol col='12'>

          <MDBCard className='bg-dark  text-white my-5 mx-auto col-sm-12 col-md-8 col-lg-4 d-flex ' style={{borderRadius: '1rem', height:500}}>
          <h2 className="fw-bold mb-2 mt-5 text-uppercase">Send to your email Verify Validation..</h2>
          <div className='d-flex justify-content-center mt-5'>

          <MDBInput wrapperClass='mb-4 mx-5 w-50 d-flex ' style={{color:"white"}} labelClass='text-white' label='Email address' id='formControlLg' type='email' size="lg" name='email' />
          </div>

            {/* <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>

              <h2 className="fw-bold mb-2 text-uppercase">Welcome to Community Stories</h2>

              <p className="text-white-50 mb-5">Please enter your login and password!</p>

              <MDBInput wrapperClass='mb-4 mx-5 w-100 ' style={{color:"white"}} labelClass='text-white' label='Email address' id='formControlLg' type='email' size="lg" name='email' onChange={(e)=>changeInputs(e)}/>
              <MDBInput wrapperClass='mb-4 mx-5 w-100' style={{color:"white"}} labelClass='text-white' label='Password' id='formControlLg' type='password' size="lg" name="password" onChange={(e)=>changeInputs(e)}/>

              <p className="small mb-3 pb-lg-2"><a class="text-white-50" href="#!">Forgot password?</a></p>
              <MDBBtn outline className='mx-2 px-5 text-white' color='white' size='lg' onClick={()=>submitUser()}>
                Login
              </MDBBtn>

              <div className='d-flex flex-row mt-3 mb-5'>
                <MDBBtn tag='a' color='none' className='m-3' style={{ color: 'white' }}>
                  <MDBIcon fab icon='facebook-f' size="lg"/>
                </MDBBtn>

                <MDBBtn tag='a' color='none' className='m-3' style={{ color: 'white' }}>
                  <MDBIcon fab icon='twitter' size="lg"/>
                </MDBBtn>

                <MDBBtn tag='a' color='none' className='m-3' style={{ color: 'white' }}>
                  <MDBIcon fab icon='google' size="lg"/>
                </MDBBtn>
              </div>

              <div>
                <p className="mb-0">Don't have an account? <a href="signup" class="text-white-50 fw-bold">Sign Up</a></p>

              </div>
            </MDBCardBody> */}
          </MDBCard>

        </MDBCol>
      </MDBRow>

    </MDBContainer>
  );
}

export default Otp;