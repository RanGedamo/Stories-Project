import React from "react";
import StoriesCarousel from "../../components/Carousel/StoriesCarousel";
// import Sidebar from "../../components/sidebar/Sidebar";
import StoriesData from "../../components/story/StoriesData";
import { getAllGroups } from "../../services/groupServices";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import Challenges from "../../components/cards/Challenges";
import CreateCommunity from "../../components/createCommunity/CreateCommunity";
import ProfileStatistics from "../../components/cards/ProfileStatistics"
// import Sidebar from "../../components/sidebar/Sidebar";
// import StoriesData from "../../components/story/StoriesData"

// import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";


function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllGroups());
  }, []);
  const groups = useSelector((state) => state.group);
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
      <MDBRow className=" row-cols-3 m-4">
        {/* {groups.allGroups?.map((key, index) => {
          return <ProfileStatistics key={key} item={key} />;
        })} */}
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
      <MDBCol className="d-flex justify-content-center" >
        <CreateCommunity />
      </MDBCol>
      <MDBRow className="mt-4 d-flex justify-content-around">
          {/* <ProfileStatistics /> */}
      </MDBRow>
    </MDBContainer>
  );
}

export default Home;
