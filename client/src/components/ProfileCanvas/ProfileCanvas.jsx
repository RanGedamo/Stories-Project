import React from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn, MDBTypography } from 'mdb-react-ui-kit';

export default function ProfileCanvas() {
  let x = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaKpijx8GNQjJGnmXhm9TcFbYVwOnGbjj_Q4xhUr6vvVUbgHFjqgIdrOHNd8h8ueUgTyc&usqp=CAU"
  return (
    <div className="gradient-custom-2" style={{ backgroundImage: `url(${x})`,backgroundSize:"100% 100%"}}>
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol  className='d-flex justify-content-center'>
            <>
              <div className="rounded-top text-white d-flex flex-row " style={{height: '200px' }}>
                <div className="ms-4 mt-5 pt-5 d-flex flex-column " style={{ width: '150px' }}>
                  <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp"
                    alt="Generic placeholder image" className="mt-4 mb-2 img-thumbnail rounded-circle" fluid style={{ width: '150px', zIndex: '1' }} />
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