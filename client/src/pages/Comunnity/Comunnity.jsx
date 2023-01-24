import { MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
import React from "react";
import Reels from "../../components/story/Reels";



function Comunnity() {
  return (
    <MDBContainer>
      <MDBRow style={{ background: "red", height: "20vh" }}>ggg</MDBRow>
      <MDBRow style={{ background: "yellow", height: "100vh" }}>
        <MDBCol
          className="flex-column"
          md={6}
          style={{ background: "blue", height: "100vh" }}
        >
          <MDBCol md={6}>
            <Reels />
          </MDBCol>
          <MDBCol md={6}>
            
          </MDBCol>
        </MDBCol>
        <MDBCol md={6} style={{ background: "blue", height: "100vh" }}></MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default Comunnity;
