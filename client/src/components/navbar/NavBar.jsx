import React from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBInputGroup,
  MDBIcon
} from 'mdb-react-ui-kit';
import {Button} from "../components/Button";



export default function NavBar() {
  return (
    <MDBNavbar light bgColor='light'>
    <MDBContainer fluid>
      <MDBNavbarBrand className='m-8' >Navbar</MDBNavbarBrand>
      <MDBInputGroup tag="form" className='d-flex w-auto mb-3 m-3'>
        <input className='form-control d-flex justify-content-center' placeholder="Search" aria-label="Search" type='Search' />
        <Button/>
      </MDBInputGroup>
      <MDBIcon far icon="calendar-alt" size='2x'/>
    </MDBContainer>
  </MDBNavbar>
  );
}
