import React from "react";
import StoriesCarousel from "../../components/Carousel/StoriesCarousel";
// import Sidebar from "../../components/sidebar/Sidebar";
import StoriesData from "../../components/story/StoriesData";
import { getAllGroups } from "../../services/groupServices";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import Challenges from "../../components/cards/Challenges";
import CreateCommunity from "../../components/createCommunity/CreateCommunity";
import ProfileStatistics from "../../components/cards/ProfileStatistics";
// import Sidebar from "../../components/sidebar/Sidebar";
// import StoriesData from "../../components/story/StoriesData"

// import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";

function Home() {
  const [groupName, setGroupName] = useState(false);
  const API = "http://localhost:6060/groups";

  useEffect(() => {
    try {
      return fetch(API)
        .then((response) => response.json())
        .then((data) => setGroupName(data.groups));
    } catch (error) {}
  }, []);

  return (
    <MDBContainer className="fluid">
      {/* <Sidebar/> */}
      <MDBRow className="mt-4">
        <MDBCol className="mt-2"><StoriesCarousel /></MDBCol>
      </MDBRow>
      <MDBRow className=" d-flex align-self-center">
        {/* <MDBCol size={2} className=" ms-2 p-0"><StoriesData/></MDBCol>
        <MDBCol size={2} className=" ms-5 p-0"><StoriesData/></MDBCol>
        <MDBCol size={2} className=" ms-5 p-0"><StoriesData/></MDBCol>
        <MDBCol size={2} className=" ms-5 p-0"><StoriesData/></MDBCol>
        <MDBCol size={2} className=" ms-5 p-0"><StoriesData/></MDBCol> */}
      </MDBRow>
      <MDBRow className=" row-cols-3 m-4" style={{minHeight:"75px"}} >
        {groupName == false ? (
          <div>Loading...</div>
        ) : (
          groupName?.map((key, index) => {
            return <ProfileStatistics key={key} item={key} />;
          })
        )}
      </MDBRow>
      <MDBRow className="mb-5 mt-6 mb-8">
        <MDBCol>
          <Challenges />
        </MDBCol>
        <MDBCol>
          <Challenges />
        </MDBCol>
        <MDBCol>
          <Challenges />
        </MDBCol>
        <MDBCol>
          <Challenges />
        </MDBCol>
      </MDBRow>
      <MDBCol className="d-flex justify-content-center">
        <CreateCommunity />
      </MDBCol>
      <MDBRow className="mt-4 d-flex justify-content-around">
        
      </MDBRow>
    </MDBContainer>
  );
}

export default Home;
