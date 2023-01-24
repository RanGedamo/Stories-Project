import { useState } from 'react';
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
import { register } from '../../services/userServices';
import axios from 'axios';
 import {useDispatch} from "react-redux"

function SignUp() {
  const [errInput,setErrInput] = useState("")
  const [loading,setLoading] = useState(false)
  const [inputs, setInputs] = useState()
  const [image, setImage] = useState()
  const [userAvatar, setUserAvatar] = useState()
  const disptch=useDispatch()

  const changeInputs = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
    console.log(inputs);
  }

  const submitAvatar = async () => {
    setLoading(true)
    const formData = new FormData()
    formData.append("file", image)
    formData.append("folder", "avatar")
    formData.append("upload_preset", "avatar")
    await axios.post('https://api.cloudinary.com/v1_1/dcapisw77/image/upload', formData)
      .then(res => {
        setLoading(true)
        if (res.data.url) {
          const data = res.data.url
          const myData = { ...inputs, avatar: data };
          return submitUser(myData)
        }
      }).catch(err => {
        setErrInput("image not found")
      })
  };

  const submitUser = async (data) => {
  
    setLoading(false)
    return await registerUser(data).then(res => console.log(res))
      .catch(error =>{ 
        if(error.response.data.message)
        setErrInput(error.response.data.message)
      })
  };

  return (
    <MDBContainer fluid style={{ backgroundImage: "url('/images/public-images/sign.jpg')", backgroundSize: "100vh", backgroundSize: "100vw", width: "100" }}>
      <form action="signup" method='POST' onSubmit={(e) => e.preventDefault()}>
        <MDBRow className='d-flex justify-content-center align-items-center h-100'>
          <MDBCol col='12'>
            <MDBCard className='bg-dark  text-white my-5 mx-auto' style={{ borderRadius: '1rem', maxWidth: '400px' }}>
              <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>

                <h2 className="fw-bold mb-2 text-uppercase">Welcome to Community Stories</h2>

                <MDBInput wrapperClass='mb-4 mx-5 w-100 ' style={{ color: "white" }} labelClass='text-white' label='User Name' id='formControlLg' type='text' size="lg" name='userName' onChange={(e) => changeInputs(e)} />
                <MDBInput wrapperClass='mb-4 mx-5 w-100' style={{ color: "white" }} labelClass='text-white' label='Email address' id='formControlLg' type='email' size="lg" name='email' onChange={(e) => changeInputs(e)} />
                <MDBInput wrapperClass='mb-4 mx-5 w-100 ' style={{ color: "white" }} labelClass='text-white' label='Password ' id='formControlLg' type='password' size="lg" name='password' onChange={(e) => changeInputs(e)} />
                <MDBInput wrapperClass='mb-4 mx-5 w-100' style={{ color: "white" }} labelClass='text-white' label='Confirm Password' id='formControlLg' type='password' size="lg" name='confirmPassword' onChange={(e) => changeInputs(e)} />
                <MDBInput wrapperClass='mb-4 mx-5 w-100' style={{ color: "white" }} labelClass='text-white' label='Image' id='formControlLg' type='file' size="lg" onChange={(e) => setImage(e.target.files[0])} />
               
             {errInput?(<div style={{color:"red",fontSize:25,fontFamily:"-moz-initial",border:"1px red solid" ,width:"100%"}} >{errInput}</div>):loading?
              <div style={{width:200,height:120}}><img src='https://thumbs.gfycat.com/AgitatedInexperiencedImperialeagle-max-1mb.gif' width={112} height={80}/></div>:""}
            
                <p className="small mb-3 pb-lg-2"><a class="text-white-50" href="#!">Forgot password?</a></p>
                <MDBBtn outline className='mx-2 px-5 text-white' color='white' size='lg' type='submit' onClick={() => submitAvatar()}>
                  Register
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
                  <p className="mb-0">Do you have an account? <a href="signin" class="text-white-50 fw-bold">Sign In</a></p>

                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </form>

    </MDBContainer>
  );
}

export default SignUp;