import React from "react";
import StoriesCarousel from "../../components/Carousel/StoriesCarousel";
import ProfileStatistics from "../../components/cards/ProfileStatistics";
// import Sidebar from "../../components/sidebar/Sidebar";
import StoriesData from "../../components/story/StoriesData";
import { getAll } from "../../services/groupServices";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import Challenges from "../../components/cards/Challenges";
import CreateCommunity from "../../components/createCommunity/CreateCommunity";

function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAll());
  }, []);
  const groups = useSelector((state) => state.group);
  return (
    <MDBContainer className="fluid">
      {/* <Sidebar/> */}
      <MDBRow>
        <MDBCol className="mt-6 mb-6">
          <StoriesCarousel />
        </MDBCol>
      </MDBRow>
      <MDBRow>
        <MDBCol size={12} className=" ms-md-2 ms-5 p-0 col-md-2">
          <StoriesData />
        </MDBCol>
        <MDBCol size={12} className=" ms-5 p-0 col-md-2">
          <StoriesData />
        </MDBCol>
        <MDBCol size={12} className=" ms-5 p-0 col-md-2">
          <StoriesData />
        </MDBCol>
        <MDBCol size={12} className=" ms-5 p-0 col-md-2">
          <StoriesData />
        </MDBCol>
        <MDBCol size={12} className=" ms-5 p-0 col-md-2">
          <StoriesData />
        </MDBCol>
      </MDBRow>
      <MDBRow className=" row-cols-3 m-4">
        {groups.allGroups?.map((key, index) => {
          return <ProfileStatistics key={key} item={key} />;
        })}
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
    </MDBContainer>
  );
}

export default Home;
