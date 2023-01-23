import React from 'react';
import { MDBBtn } from 'mdb-react-ui-kit';

export default function Button({color, text}) {
  return (
    <>
      <MDBBtn rounded className='mx-2' color={color}>
        {text}
      </MDBBtn>
    </>
  );
}