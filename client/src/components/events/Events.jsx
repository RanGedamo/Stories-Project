import React from 'react';
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';

export default function Events() {
  return (
    <MDBRow className='w-50'>
      <MDBCol>
        <MDBCard className='w-75'>
          <MDBCardImage
            src='https://mdbootstrap.com/img/new/standard/city/041.webp'
            alt='...'
            position='top'
        
          />
          <MDBCardBody>
            <MDBCardTitle>Card title</MDBCardTitle>
            <MDBCardText>
              This is a longer card with supporting text below as a natural lead-in to additional content.
              This content is a little bit longer.
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
  );
}