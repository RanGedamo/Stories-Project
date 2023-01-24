import React from "react";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBTypography,
  MDBIcon,
} from "mdb-react-ui-kit";

export default function ProfileStatistics() {
  return (
    <div style={{ backgroundColor: "#eee" }}>
      <MDBContainer className="container h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol md="12" xl="4">
            <MDBCard style={{ borderRadius: "15px" }}>
              <MDBCardBody className="text-center">
                <div className="mt-3 mb-4">
                  <MDBCardImage
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava2-bg.webp"
                    className="rounded-circle"
                    fluid
                    style={{ width: "100px" }}
                  />
                </div>
                <MDBTypography tag="h4">Julie L. Arsenault</MDBTypography>
                <MDBCardText className="text-muted mb-4">
                  @Programmer <span className="mx-2">|</span>{" "}
                  <a href="#!">mdbootstrap.com</a>
                </MDBCardText>
                <MDBCardText className="text-muted mb-4">
                  <p>Description</p>
                </MDBCardText>
                <MDBBtn rounded size="lg">
                  Message now
                </MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}
