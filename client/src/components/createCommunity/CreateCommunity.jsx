import React from "react";
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
import Button from "../../components/Button/Button";


function CreateCommunity({color, text}) {
  return (
    <MDBCard style={{ maxWidth: "540px" }}>
      <MDBRow className="g-0">
        <MDBCol md="4">
          <MDBCardImage
            src="https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.webp"
            alt="..."
            fluid
          />
        </MDBCol>
        <MDBCol md="8">
          <MDBCardBody>
            <MDBCardTitle>
              {/* <h3>Create Your Community</h3> */}
            </MDBCardTitle>
            <br />
            <MDBCardText>
              <p>You can create your own community</p>
            </MDBCardText>
            <MDBCardText>
              <p>name your community name your community name your community</p>
            </MDBCardText>
            <Button color={'primary'} text={"Click"}/>
          </MDBCardBody>
        </MDBCol>
      </MDBRow>
    </MDBCard>
  );
}
export default CreateCommunity;

{
  /* <MDBCard className="w-50 p-3">
<MDBCardHeader>
  <h3 className="text-start" >
     Create Your Community
  </h3>
  </MDBCardHeader>
<MDBCardBody>
  <MDBCardTitle>
    <p className="text-start" >
     You can create your own community 
    </p>
    </MDBCardTitle>
  <MDBCardText>
    <p className="text-start" >
       name your community
    </p>
    </MDBCardText>
    <MDBInput label='Example label' id='form1' type='text' />
</MDBCardBody>
</MDBCard> */
}
