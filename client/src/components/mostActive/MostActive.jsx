import React from "react";
import { MDBContainer } from "mdb-react-ui-kit";

export default function MostActive({image}) {
  return (
    <div>
      <p className="">Most Active Members</p>
      <MDBContainer className=" d-flex flex-row justify-content-center align-items-center">
        <div className="p-2">
          <img
            src={image}
            className="rounded-circle mb-5"
            style={{ width: "60px" }}
            alt="Avatar"
          />
            <ul class="list-unstyled d-flex justify-content-center text-warning mb-2">
            <li>
              <i class="fas fa-star fa-sm"></i>
            </li>
            <li>
              <i class="fas fa-star fa-sm"></i>
            </li>
            <li>
              <i class="fas fa-star fa-sm"></i>
            </li>
          </ul>
        </div>
        <div className="p-2">
          <img
            src={image}
            className="rounded-circle mb-5"
            style={{ width: "60px" }}
            alt="Avatar"
          />
            <ul class="list-unstyled d-flex justify-content-center text-warning mb-2">
            <li>
              <i class="fas fa-star fa-sm"></i>
            </li>
            <li>
              <i class="fas fa-star fa-sm"></i>
            </li>
            <li>
              <i class="fas fa-star fa-sm"></i>
            </li>
          </ul>
        </div>
        <div className="p-2">
          <img
            src={image}
            className="rounded-circle mb-5"
            style={{ width: "60px" }}
            alt="Avatar"
          />
            <ul class="list-unstyled d-flex justify-content-center text-warning mb-2">
            <li>
              <i class="fas fa-star fa-sm"></i>
            </li>
            <li>
              <i class="fas fa-star fa-sm"></i>
            </li>
            <li>
              <i class="fas fa-star fa-sm"></i>
            </li>
          </ul>
        </div>
      </MDBContainer>
    </div>
  );
}
