import React from "react";
import StoriesCarousel from "../../components/Carousel/StoriesCarousel";
import ProfileStatistics from "../../components/cards/ProfileStatistics"
import Sidebar from "../../components/sidebar/Sidebar";
import StoriesData from "../../components/story/StoriesData"

import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import Challenges from "../../components/cards/Challenges";


function Home() {
  return (
    <MDBContainer className="fluid">
        {/* <Sidebar/> */}
      <MDBRow >
        <MDBCol >
          <StoriesCarousel />
        </MDBCol>
      </MDBRow>
      <MDBRow >
        <MDBCol size={12} className=" ms-md-2 ms-5 p-0 col-md-2"><StoriesData/></MDBCol>
        <MDBCol size={12} className=" ms-5 p-0 col-md-2"><StoriesData/></MDBCol>
        <MDBCol size={12} className=" ms-5 p-0 col-md-2"><StoriesData/></MDBCol>
        <MDBCol size={12} className=" ms-5 p-0 col-md-2"><StoriesData/></MDBCol>
        <MDBCol size={12} className=" ms-5 p-0 col-md-2"><StoriesData/></MDBCol>
      </MDBRow>
      <MDBCol>
      </MDBCol>
      <MDBRow className="mt-4 d-flex justify-content-around">
          <ProfileStatistics />
      </MDBRow>
      <MDBRow className="mb-5">
        <MDBCol><Challenges/></MDBCol>
        <MDBCol><Challenges/></MDBCol>
        <MDBCol><Challenges/></MDBCol>
        <MDBCol><Challenges/></MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default Home;
