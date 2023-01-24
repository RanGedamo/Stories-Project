import React from "react";
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
import EventGif from "../Media/Event.gif"
export default function Events() {
  return (
    <MDBCard className="">
      <MDBRow className="m-2 d-flex-column justify-content-center align-items-center">
        
        <MDBCol md={6}>
          
          <MDBCardImage
            src={EventGif}
            alt="..."
            position="top"
          />{" "}
        </MDBCol>

     
      </MDBRow>
    </MDBCard>
  );
}