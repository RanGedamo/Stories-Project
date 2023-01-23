import React from "react";
import { MDBContainer } from "mdb-react-ui-kit";
import Avatar from "../avatar/Avatar"

export default function MostActive() {
  return (
    <div>
      <p className="">Most Active Members</p>
      <MDBContainer className=" d-flex flex-row justify-content-center align-items-center">
        <div className="p-2">
          <Avatar image={'https://mdbootstrap.com/img/new/avatars/7.jpg'}/>
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
        <Avatar image={'https://mdbootstrap.com/img/new/avatars/6.jpg'}/>
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
        <Avatar image={'https://mdbootstrap.com/img/new/avatars/8.jpg'}/>
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
