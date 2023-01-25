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

export default function ProfileStatistics({ item }) {
  return (
    <MDBCol md="12" xl="4" className="mb-3 mt-3">
      <MDBCard style={{ borderRadius: "15px" }}>
        <MDBCardBody className="text-center">
          <div className="mt-6 mb-3">
            <MDBCardImage
              src={item.avatar}
              className="rounded-circle"
              fluid
              style={{ width: "170px", height: "170px" }}
            />
          </div>
          <MDBTypography tag="h4">{item.groupName}</MDBTypography>
          <MDBTypography style={{ minHeight: "2rem" }} tag="p">
            {item.description}
          </MDBTypography>
          <MDBBtn size="lg" href={`/community/${item._id}`}>Join to our Community</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>

    // <MDBCol>
    //   <MDBCard style={{ borderRadius: "15px", margin: "10px"}}>
    //     <MDBCardBody className="text-center">
    //       <div className="mt-3 mb-3">
    //         <MDBCardImage
    //           src={item.avatar}
    //           className="rounded-circle"
    //           fluid
    //           style={{ width: "120px" , width: "100px" }}
    //         />
    //       </div>
    //       <MDBTypography style={{minHeight:"2rem"}} tag="h3">{item.groupName}</MDBTypography>
    //       <MDBTypography style={{minHeight:"2rem"}} tag="p">{item.groupName}</MDBTypography>
    //       <MDBTypography style={{minHeight:"2rem"}}  tag="p">{item.description}</MDBTypography>
    //       <MDBCardText className="text-muted mb-4">
    //       </MDBCardText>
    //     </MDBCardBody>
    //   </MDBCard>
    // </MDBCol>
  );
}
