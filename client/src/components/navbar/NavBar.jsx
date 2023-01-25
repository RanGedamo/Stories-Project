import React from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBInputGroup,
  MDBIcon
} from 'mdb-react-ui-kit';
import Button from '../Button/Button';
import Cookies from 'js-cookie';




export default function NavBar() {
 const user = Cookies.get("user").slice(0,1);
 const navUser = user.toUpperCase()
  return (
    <MDBNavbar light bgColor='light'>
    <MDBContainer fluid>
      <MDBNavbarBrand className='m-8' >Navbar</MDBNavbarBrand>
      <MDBInputGroup tag="form" className='d-flex w-auto mb-3 m-3'>
        <input className='form-control d-flex justify-content-center' placeholder="Search" aria-label="Search" type='Search' />
        <Button/>
      </MDBInputGroup>
      {/* <MDBIcon far icon="calendar-alt" size='2x'/> */}
      <button style={{backgroundColor:"transparent",border:"1px"}}>
      <div  style={{width:50,height:50,borderRadius:100,color:"white",alignItems:"center",paddingTop:10,fontSize:20,fontWeight:"bold",background:"#DC4C64"}} onClick={()=>console.log()}>{navUser}</div>
      </button>
    </MDBContainer>
  </MDBNavbar>
  );
}
