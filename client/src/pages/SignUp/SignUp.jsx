import  { useState } from 'react';
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

function SignUp() {
  const [inputs,setInputs] = useState()
  const [image,setImage] = useState()

  const changeInputs = (e)=>{

    setInputs({...inputs,[e.target.name]:e.target.value});
    console.log(inputs);
    console.log(image);
  }
  return (
    <MDBContainer fluid style={{backgroundImage:"url('/images/public-images/sign.jpg')",backgroundSize:"100vh",backgroundSize:"100vw",width:"100"}}>

      <MDBRow className='d-flex justify-content-center align-items-center h-100'>
        <MDBCol col='12'>

          <MDBCard className='bg-dark  text-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '400px'}}>
            <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>

              <h2 className="fw-bold mb-2 text-uppercase">Welcome to Community Stories</h2>

              <MDBInput wrapperClass='mb-4 mx-5 w-100 ' style={{color:"white"}} labelClass='text-white' label='User Name' id='formControlLg' type='text' size="lg" name='userName' onChange={(e)=>changeInputs(e)}/>
              <MDBInput wrapperClass='mb-4 mx-5 w-100' style={{color:"white"}} labelClass='text-white' label='Email address' id='formControlLg' type='email' size="lg" name='email' onChange={(e)=>changeInputs(e)}/>
              <MDBInput wrapperClass='mb-4 mx-5 w-100 ' style={{color:"white"}} labelClass='text-white' label='Password ' id='formControlLg' type='password' size="lg" name='password' onChange={(e)=>changeInputs(e)}/>
              <MDBInput wrapperClass='mb-4 mx-5 w-100' style={{color:"white"}} labelClass='text-white' label='Confirm Password' id='formControlLg' type='password' size="lg" name='confirmPassword' onChange={(e)=>changeInputs(e)}/>
              <MDBInput wrapperClass='mb-4 mx-5 w-100' style={{color:"white"}} labelClass='text-white' label='Image' id='formControlLg' type='file' size="lg" onChange={(e)=>setImage(e.target.files[0])}/>

              <p className="small mb-3 pb-lg-2"><a class="text-white-50" href="#!">Forgot password?</a></p>
              <MDBBtn outline className='mx-2 px-5 text-white' color='white' size='lg'>
                Register
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
              <p className="mb-0">Do you have an account? <a href="signin" class="text-white-50 fw-bold">Sign In</a></p>

              </div>
            </MDBCardBody>
          </MDBCard>

        </MDBCol>
      </MDBRow>

    </MDBContainer>
  );
}

export default SignUp;