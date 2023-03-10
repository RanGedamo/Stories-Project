import React from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBModalDialog,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon,
  MDBModal,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter
}
  from 'mdb-react-ui-kit';
import { useState } from 'react';
import { logIn } from '../../services/userServices';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Cookies from 'js-cookie';

function SignIn() {
  const navigate = useNavigate()
  const disptch = useDispatch()
  const [errorValidate, setErrorValidate] = useState("")
  const [home, setHome] = useState(false)
  const [error, setError] = useState(false)
  const [basicModal, setBasicModal] = useState(false)

  const [inputs, setInputs] = useState()
  const changeInputs = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
    console.log(inputs);
  };

  const submitUser = async () => {
    return await logIn(inputs).then(res => {
      console.log(res);
      if (res.message) {
        setError(true)
        return setErrorValidate(res.message)
      }
      setErrorValidate("success")

      Cookies.set("user", inputs.email)
      setHome(true)
      setTimeout(() => {
        setBasicModal(true)
        return navigate('/')
      }, 3000);
    }).catch(error => console.log(error))

  }

  return (
    <>
      <MDBContainer fluid style={{ backgroundImage: "url('/images/public-images/sign.jpg')", backgroundSize: "100vh", backgroundSize: "100vw", width: "100" }}>

        <MDBRow className='d-flex justify-content-center align-items-center h-100'>
          <MDBCol col='12'>

            <MDBCard className='bg-dark  text-white my-5 mx-auto' style={{ borderRadius: '1rem', maxWidth: '400px' }}>
              <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>

                <h2 className="fw-bold mb-2 text-uppercase">Welcome to Community Stories</h2>

                <p className="text-white-50 mb-5">Please enter your login and password!</p>

                <MDBInput wrapperClass='mb-4 mx-5 w-100 ' style={{ color: "white" }} labelClass='text-white' label='Email address' id='formControlLg' type='email' size="lg" name='email' onChange={(e) => changeInputs(e)} />
                <MDBInput wrapperClass='mb-4 mx-5 w-100' style={{ color: "white" }} labelClass='text-white' label='Password' id='formControlLg' type='password' size="lg" name="password" onChange={(e) => changeInputs(e)} />
                {error ? (<div className='d-flex justify-content-center'>
                  <div className='text-danger' style={{ border: "solid red 1px" }}>{errorValidate}</div>
                </div>) : ""
                }
                <p className="small mb-3 pb-lg-2"><a class="text-white-50" href="#!">Forgot password?</a></p>
                <MDBBtn outline className='mx-2 px-5 text-white' color='white' size='lg' onClick={() => submitUser()}>
                  Login
                </MDBBtn>

                <div className='d-flex flex-row mt-3 mb-5'>
                  <MDBBtn tag='a' color='none' className='m-3' style={{ color: 'white' }}>
                    <MDBIcon fab icon='facebook-f' size="lg" />
                  </MDBBtn>

                  <MDBBtn tag='a' color='none' className='m-3' style={{ color: 'white' }}>
                    <MDBIcon fab icon='twitter' size="lg" />
                  </MDBBtn>

                  <MDBBtn tag='a' color='none' className='m-3' style={{ color: 'white' }}>
                    <MDBIcon fab icon='google' size="lg" />
                  </MDBBtn>
                </div>

                <div>
                  <p className="mb-0">Don't have an account? <a href="signup" class="text-white-50 fw-bold">Sign Up</a></p>

                </div>
              </MDBCardBody>
            </MDBCard>

          </MDBCol>
        </MDBRow>

      </MDBContainer>
      <>

        {basicModal ? (<MDBModal  show={basicModal} setShow={setBasicModal} tabIndex='-1'>
          <MDBModalDialog>
            <MDBModalContent>
              <MDBModalHeader>
                <MDBModalTitle>Cookies</MDBModalTitle>
                <MDBBtn className='btn-close' color='none' ></MDBBtn>
              </MDBModalHeader>
              <MDBModalBody>We use cookies to personalize content and ads, to provide social media features and to analyses our traffic. We also share information about your use of our site with our social media, advertising and analytics partners who may combine it with other information that you???ve provided to them or that they???ve collected from your use of their services.</MDBModalBody>
              <MDBModalFooter>
                <MDBBtn color='secondary' >
                  Close
                </MDBBtn>
                <MDBBtn href='/'>Accept</MDBBtn>
              </MDBModalFooter>
            </MDBModalContent>
          </MDBModalDialog>
        </MDBModal>) : ""}
      </>
    </>
  );
}

export default SignIn;