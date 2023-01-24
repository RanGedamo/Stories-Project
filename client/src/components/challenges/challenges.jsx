import React from "react";
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardSubTitle,
  MDBCardText,
  MDBRadio,
  MDBBtnGroup,
} from "mdb-react-ui-kit";
import gif from "../Media/footballChallenge.gif";
export default function Challenges() {
  return (
    <MDBCard>
      <MDBCardBody>
        <MDBCardTitle>Daily Challenge</MDBCardTitle>
        <MDBCardImage src={gif} position="top" />
        <MDBCardText>
          The football community challenges you to hit the lintel 5 times in a
          row and you might win an award
        </MDBCardText>

        <MDBBtnGroup>
          <MDBRadio
            btn
            btnColor="secondary"
            id="btn-radio"
            name="options"
            wrapperTag="span"
            label="no"
          />
          <MDBRadio
            btn
            btnColor="secondary"
            id="btn-radio2"
            name="options"
            wrapperClass="mx-2"
            wrapperTag="span"
            label="maybe"
            defaultChecked
          />
          <MDBRadio
            btn
            btnColor="secondary"
            id="btn-radio3"
            name="options"
            wrapperTag="span"
            label="yes"
          />
        </MDBBtnGroup>
      </MDBCardBody>
    </MDBCard>
  );
}
