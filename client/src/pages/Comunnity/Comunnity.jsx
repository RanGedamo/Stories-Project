import { MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
import React from "react";
import SoundTrack from "../../components/cards/SoundTrack";
import Challenges from "../../components/challenges/challenges";
import ComunnityTabs from "../../components/ComunnityTabs/ComunnityTabs";
import Events from "../../components/events/Events";
import Reels from "../../components/reels/reels";
import MostActive from "../../components/sections/MostActive";

function Comunnity() {
  return (
    <div className="container-fluid">
      <MDBRow className="d-flex justify-content-center align-items-end " style={{ backgroundImage:"url(https://petapixel.com/assets/uploads/2022/07/DALLEcopy.jpg)", height: "50vh" }}>

      <MDBCol lg='4' md='6' className=''>
        <img
          src='https://mdbootstrap.com/img/new/standard/city/047.webp'
          className='img-fluid rounded-pill w-50'
          alt=''
        />
      </MDBCol>
      </MDBRow>
      <MDBContainer>
      <ComunnityTabs/>

      </MDBContainer>
     
    </div>
  );
}

export default Comunnity;
