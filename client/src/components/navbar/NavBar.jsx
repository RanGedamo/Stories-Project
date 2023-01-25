import React from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBInputGroup,
  MDBIcon,
  MDBBtn,
} from "mdb-react-ui-kit";
import Button from "../Button/Button";
import { useState } from "react";
import Home from "../../pages/Home/Home";
import { Link } from "react";

export default function NavBar() {
  const [press, setPress] = useState(false);

  return (
    <MDBNavbar light bgColor="light">
      <MDBContainer fluid>
        <MDBNavbarBrand
          className="m-8"
          onClick={() => setPress(press(!Home))}
          href='/'
        >
          {" "}
          Navbar{" "}
        </MDBNavbarBrand>
        <MDBInputGroup tag="form" className="d-flex w-auto mb-2 m-2">
          <input
            className="form-control d-flex justify-content-center"
            placeholder="Search"
            aria-label="Search"
            type="Search"
          />
          <MDBBtn color="dark">Search</MDBBtn>
        </MDBInputGroup>
        <MDBIcon far icon="calendar-alt" size="2x" />
      </MDBContainer>
    </MDBNavbar>
  );
}
