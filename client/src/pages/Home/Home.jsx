import React, { useCallback } from "react";
import StoriesCarousel from "../../components/Carousel/StoriesCarousel";
// import Sidebar from "../../components/sidebar/Sidebar";
// import StoriesData from "../../components/story/StoriesData";
// import { getAllGroups } from "../../services/groupServices";
// import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdb-react-ui-kit";
import Challenges from "../../components/cards/Challenges";
import CreateCommunity from "../../components/createCommunity/CreateCommunity";
import ProfileStatistics from "../../components/cards/ProfileStatistics";
import Reels from "../../components/story/Reels";
import StoriesData from "../../components/story/StoriesData";

// import Sidebar from "../../components/sidebar/Sidebar";
// import StoriesData from "../../components/story/StoriesData"

// import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";

const renderGroup = (item) => {
  return <ProfileStatistics key={item} item={item} />;
};

function Home() {
  const [groupName, setGroupName] = useState([]);
  const [story, setStory] = useState([]);
  const [isGroupsLoading, setGroupsLoading] = useState(true);
  const [isStoriesLoading, setStoriesLoading] = useState(true);
  const vidStories = [
    {
      url: "https://video-iad3-1.cdninstagram.com/o1/v/t16/f1/m82/8147A6AFD7F3D4C116F2DD98BA89ADB0_video_dashinit.mp4?efg=eyJ2ZW5jb2RlX3RhZyI6InZ0c192b2RfdXJsZ2VuLjcyMC5jbGlwcyJ9&_nc_ht=video-iad3-1.cdninstagram.com&_nc_cat=101&vs=511363850832550_1611900519&_nc_vs=HBksFQIYT2lnX3hwdl9yZWVsc19wZXJtYW5lbnRfcHJvZC84MTQ3QTZBRkQ3RjNENEMxMTZGMkREOThCQTg5QURCMF92aWRlb19kYXNoaW5pdC5tcDQVAALIAQAVABgkR0duZFRCUGRJVmQxc3B3QkFLWXVLZE5rM1ZWdWJxX0VBQUFGFQICyAEAKAAYABsBiAd1c2Vfb2lsATEVAAAm9viH1ci400AVAigCQzMsF0Ak7peNT987GBJkYXNoX2Jhc2VsaW5lXzFfdjERAHUAAA%3D%3D&ccb=9-4&oh=00_AfB5scw7urpErGXsgA7IaBYsiA5cv46WTFMSl0gz08J0qQ&oe=63D1F822&_nc_sid=ea0b6e&_nc_rid=66876e80c5",
      type: "video",
      header: {
        heading: "item.creator.email",
        subheading: "burakdeniz@gmail.com",
        profileImage: "item.creator.avatar",
      },
      seeMore: true,
      duration: 1000,
      seeMore: ({ close }) => {
        return (
          <div>
            <MDBBtn onClick={close} className="mb-5 pb-4">
              Close
            </MDBBtn>
          </div>
        );
      },
    },
  ];
  const pictures = [
    "https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/449609/pexels-photo-449609.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/14629549/pexels-photo-14629549.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/8258043/pexels-photo-8258043.jpeg?auto=compress&cs=tinysrgb&w=600",
  ];

  const getStories = async () => {
    try {
      return await fetch("http://localhost:6060/stories")
        .then((response) => response.json())
        .then(({ stories }) => setStory(stories));
    } catch (error) {
      console.log({ error });
    } finally {
      setStoriesLoading(false);
    }
  };
  let counter = 0;
  const getGroups = async () => {
    try {
      return await fetch("http://localhost:6060/groups")
        .then((response) => response.json())
        .then(({ groups }) => setGroupName(groups));
    } catch (error) {
      console.log({ error });
    } finally {
      setGroupsLoading(false);
    }
  };

  useEffect(() => {
    getStories();
    getGroups();
  }, []);

  const renderStories = useCallback(
    (key, index) => {
      if (index >= 5) {
        return (
          <MDBCol size={2} className=" ms-5 p-0">
            <StoriesData />
          </MDBCol>
        );
      }
    },
    [story]
  );

  return (
    <MDBContainer className="fluid">
      <MDBRow className="mt-4 ps-5">
        <MDBCol size={3}><StoriesData /></MDBCol>
        <MDBCol size={3}><StoriesData /></MDBCol>
        <MDBCol size={3}><StoriesData /></MDBCol>
        <MDBCol size={3}><StoriesData /></MDBCol>
      </MDBRow>

      <MDBRow className=" row-cols-3 m-4" style={{ minHeight: "75px" }}>
        {isGroupsLoading ? <div>Loading...</div> : groupName.map(renderGroup)}
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
      {/* <StoriesData /> */}
      <MDBCol className="d-flex justify-content-center">
        <CreateCommunity />
      </MDBCol>
      <MDBRow className="mt-4 d-flex justify-content-around"></MDBRow>
    </MDBContainer>
  );
}

export default Home;
