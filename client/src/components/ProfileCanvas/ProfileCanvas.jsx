import React from 'react';
import {useState, useEffect} from 'react';
import { MDBIcon,MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn, MDBTypography } from 'mdb-react-ui-kit';
import StoryPopUp from '../PopUp/StoryPopUp'
import Avatar from "../avatar/Avatar";


export default function ProfileCanvas({data}) {
  const [toggle, setToggle] = useState(false);
  const [story, setStory] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  useEffect(()=>{
    try{
    fetch(`http://localhost:6060/stories/byId/${data.stories[0]}`)
    .then((res) => res.json())
    .then((res)=>setStory(res.story)) }
    catch(error){console.log(error)}
    },[])
let x= data.avatar
  return (
    <div className="gradient-custom-2 " style={{ backgroundImage: `url(${data.coverImage})`,backgroundSize:"cover"}}>
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol  className='d-flex justify-content-center'>
            <>
              <div className="rounded-top text-white d-flex flex-row " style={{height: '200px' }}>

                <div className="ms-4 mt-5 pt-5 d-flex flex-column " style={{ width: '150px' }}>
                  <section className="avatar-detail">
        <div className="avatar-box">
          <div
            onClick={handleToggle}
            className="btn btn-tertiary"
            data-mdb-ripple-color="light"
          >
            <Avatar
              className="avatarSize"
              image={x}
            />
            {toggle && story ? <StoryPopUp item={story} /> : ""}
          </div>
        </div>
        <p className="avatar-name">{data.groupName}</p>
      </section>
              <MDBIcon size='2x' className='btn w-25 d-flex justify-content-center ' style={{color:"red",position:"relative",top:"-100px",left:"-17px" ,zIndex:"8"}}  fas icon="plus" />

                </div>
                <div className="ms-3" style={{ marginTop: '130px' }}>
                </div>
              </div>
            </>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}