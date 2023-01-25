import React from "react";
import StoriesCarousel from "../../components/Carousel/StoriesCarousel";
// import Sidebar from "../../components/sidebar/Sidebar";
// import StoriesData from "../../components/story/StoriesData";
// import { getAllGroups } from "../../services/groupServices";
// import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import Challenges from "../../components/cards/Challenges";
import CreateCommunity from "../../components/createCommunity/CreateCommunity";
import ProfileStatistics from "../../components/cards/ProfileStatistics";
import Reels from "../../components/story/Reels";
import StoriesData from "../../components/story/StoriesData";

// import Sidebar from "../../components/sidebar/Sidebar";
// import StoriesData from "../../components/story/StoriesData"

// import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";

function Home() {
  const [groupName, setGroupName] = useState(false);
  const [story, setStory] = useState(false);

  const API = "http://localhost:6060/groups";
  const STORY = "http://localhost:6060/stories";

  const pictures = [
    "https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/449609/pexels-photo-449609.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/14629549/pexels-photo-14629549.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/8258043/pexels-photo-8258043.jpeg?auto=compress&cs=tinysrgb&w=600",
  ];

  useEffect(() => {
    try {
      return fetch(API)
        .then((response) => response.json())
        .then((data) => setGroupName(data.groups));
    } catch (error) {}
  }, []);

  useEffect(() => {
    try {
      return fetch(STORY)
        .then((response) => response.json())
        .then((data) => setGroupName(data.story));
    } catch (error) {}
  }, []);

  return (
    <MDBContainer className="fluid">
      {/* <Sidebar/> */}
      <MDBRow className="mt-4">
        <MDBCol className="mt-2">
          <StoriesCarousel />
        </MDBCol>
      </MDBRow>
      <MDBRow>
        <StoriesData />
      </MDBRow>

      <MDBRow className=" row-cols-3 m-4" style={{ minHeight: "75px" }}>
        {story == false ? (
          <div>Loading...</div>
        ) : (
          story?.map((key, index) => {
            if (story >= 5) {
              return (
                <MDBCol size={2} className=" ms-5 p-0">
                  <StoriesData />
                </MDBCol>
              );
            }
          })
        )}
      </MDBRow>

      <MDBRow className=" row-cols-3 m-4" style={{ minHeight: "75px" }}>
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
          <Challenges item={pictures[0]} />
        </MDBCol>
        <MDBCol>
          <Challenges item={pictures[1]} />
        </MDBCol>
        <MDBCol>
          <Challenges item={pictures[2]} />
        </MDBCol>
        <MDBCol>
          <Challenges item={pictures[3]} />
        </MDBCol>
      </MDBRow>
      <StoriesData />
      <MDBCol className="d-flex justify-content-center">
        <CreateCommunity />
      </MDBCol>
      <MDBRow className="mt-4 d-flex justify-content-around"></MDBRow>
    </MDBContainer>
  );
}

export default Home;
