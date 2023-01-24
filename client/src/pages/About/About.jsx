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

export default function About() {
  return (
    <div>
                            <MDBCardTitle><h1>About</h1></MDBCardTitle>

    
    <MDBCard className="">
      <MDBRow className="m-2 d-flex-column justify-content-center align-items-center">
      
        <MDBCol md={6}>
          <MDBCardBody>
            <MDBCardTitle>Card title</MDBCardTitle>
            <MDBCardText>
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </MDBCardText>
          </MDBCardBody>
        </MDBCol>
        <MDBCol md={6}>
          <MDBCardImage
            src="https://mdbootstrap.com/img/new/standard/city/041.webp"
            alt="..."
            position="top"
          />{" "}
        </MDBCol>
      </MDBRow>
    </MDBCard>
    </div>
  );
}