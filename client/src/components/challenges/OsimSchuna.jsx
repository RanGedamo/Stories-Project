import React from 'react';
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardSubTitle,
  MDBCardText,
  MDBRadio, MDBBtnGroup
} from 'mdb-react-ui-kit';
import gif from "../Media/footballChallenge.gif"
export default function OsimSchuna() {
  return (
    <MDBCard>
      <MDBCardBody>
        <MDBCardTitle>Daily Challenge</MDBCardTitle>
        <MDBCardImage
          src={gif}
         
          position="top"
        />
        <MDBCardText>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </MDBCardText>
        
        
        <MDBBtnGroup>
      <MDBRadio btn btnColor='secondary' id='btn-radio' name='options' wrapperTag='span' label='no' />
      <MDBRadio
        btn
        btnColor='secondary'
        id='btn-radio2'
        name='options'
        wrapperClass='mx-2'
        wrapperTag='span'
        label='maybe'
        defaultChecked
      />
      <MDBRadio btn btnColor='secondary' id='btn-radio3' name='options' wrapperTag='span' label='yes' />
    </MDBBtnGroup>
       
      </MDBCardBody>
    </MDBCard>
  );
}