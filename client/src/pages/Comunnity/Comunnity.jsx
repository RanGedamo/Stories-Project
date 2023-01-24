import { MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
import React from "react";
import ComunnityTabs from "../../components/ComunnityTabs/ComunnityTabs";

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
