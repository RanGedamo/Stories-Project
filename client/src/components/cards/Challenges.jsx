import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBRipple } from "mdb-react-ui-kit";

export default function Challenges() {
  return (
    <MDBCol>
      <MDBRipple
        rippleColor="dark"
        rippleTag="div"
        className="bg-image rounded hover-zoom shadow-1-strong"
      >
        <img
          src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/new/img(1).webp"
          
          className="w-100"
        />
        <a href="#!">
          <div
            className="mask"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
          >
            <div className="d-flex justify-content-start align-items-start h-100">
              <h5>
                <span className="badge bg-light pt-2 ms-3 mt-3 text-dark">
                  Challenges football community
                </span>
              </h5>
            </div>
          </div>
          <div className="hover-overlay">
            <div
              className="mask"
              style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
            ></div>
          </div>
        </a>
      </MDBRipple>
    </MDBCol>
  );
}
