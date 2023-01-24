import React from 'react';
import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit';

export default function Button({color, text}) {
  return (
    <>
      <MDBBtn className='mx-2' color={color}>
        {text}
      </MDBBtn>
    </>
  );
}