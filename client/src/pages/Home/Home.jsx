import React from "react";
import StoriesCarousel from "../../components/Carousel/StoriesCarousel";
import ProfileStatistics from "../../components/cards/ProfileStatistics"
// import Sidebar from "../../components/sidebar/Sidebar";
import StoriesData from "../../components/story/StoriesData"

import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";


function Home() {
  return (
    <MDBContainer className="fluid">
        {/* <Sidebar/> */}
      <MDBRow className="mt-4" >
        <MDBCol className="mt-2">
          <StoriesCarousel />
        </MDBCol>
      </MDBRow>
      <MDBRow className=" d-flex align-self-center">
        {/* <MDBCol size={2} className=" ms-2 p-0"><StoriesData/></MDBCol>
        <MDBCol size={2} className=" ms-5 p-0"><StoriesData/></MDBCol>
        <MDBCol size={2} className=" ms-5 p-0"><StoriesData/></MDBCol>
        <MDBCol size={2} className=" ms-5 p-0"><StoriesData/></MDBCol>
        <MDBCol size={2} className=" ms-5 p-0"><StoriesData/></MDBCol> */}
      </MDBRow>
      <MDBCol>
      </MDBCol>
      <MDBRow className="mt-4 d-flex justify-content-around">
          <ProfileStatistics />
      </MDBRow>
    </MDBContainer>
  );
}

export default Home;
