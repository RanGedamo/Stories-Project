import React from "react";
import {
  MDBCol,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBTypography,
} from "mdb-react-ui-kit";

export default function ProfileStatistics({item}) {
  console.log(item);
  return (
    <MDBCol>
      <MDBCard style={{ borderRadius: "15px", margin: "10px"}}>
        <MDBCardBody className="text-center">
          <div className="mt-3 mb-3">
            <MDBCardImage
              src={item.avatar}
              className="rounded-circle"
              fluid
              style={{ width: "120px" , width: "100px" }}
            />
          </div>
          <MDBTypography style={{minHeight:"2rem"}} tag="h3">{item.groupName}</MDBTypography>
          <MDBTypography style={{minHeight:"2rem"}} tag="p">{item.groupName}</MDBTypography>
          <MDBTypography style={{minHeight:"2rem"}}  tag="p">{item.description}</MDBTypography>
          <MDBCardText className="text-muted mb-4">
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  );
}
