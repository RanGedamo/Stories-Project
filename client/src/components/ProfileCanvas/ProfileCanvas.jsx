import React from 'react';
import { MDBIcon,MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn, MDBTypography } from 'mdb-react-ui-kit';

export default function ProfileCanvas() {
  let x = "https://png.pngtree.com/background/20210714/original/pngtree-peach-color-paint-strokes-design-over-light-pastel-color-backdrop-background-picture-image_1226205.jpg"
  return (
    <div className="gradient-custom-2 " style={{ backgroundImage: `url(${x})`,backgroundSize:"cover"}}>
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol  className='d-flex justify-content-center'>
            <>
              <div className="rounded-top text-white d-flex flex-row " style={{height: '200px' }}>

                <div className="ms-4 mt-5 pt-5 d-flex flex-column " style={{ width: '150px' }}>
                  <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp"
                    alt="Generic placeholder image" className="mt-4 mb-2 img-thumbnail rounded-circle" fluid style={{ width: '150px', zIndex: '1' }} />
              <MDBIcon size='2x' className='btn w-25 d-flex justify-content-center ' style={{color:"red",position:"relative",top:"-100px",left:"-17px" ,zIndex:"8"}}  fas icon="plus" />

                </div>
                <div className="ms-3" style={{ marginTop: '130px' }}>
                </div>
              </div>
            </>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}