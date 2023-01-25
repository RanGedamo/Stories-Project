import { MDBBtn } from "mdb-react-ui-kit";
import { useEffect } from "react";
import Stories from "react-insta-stories";
import { storiesAPI } from "../../services/storys";
// import CommentCard from "../comments/Comments";

export default function StoriesData() {
  useEffect(() => {
    return () => {
      storiesAPI().then(res=>console.log(res))
    };
  }, [])


  // let stories = [
  //   {
  //     url: item.url,
  //     type: "video",
  //     header: {
  //       heading: item.creator.email,
  //       subheading: "burakdeniz@gmail.com",
  //       profileImage:item.creator.avatar
  //     },
  //     seeMore: true,
  //     duration: 1000,
  //     seeMore: ({ close }) => {
  //       return <div ><CommentCard/>
  //       <MDBBtn onClick={close} className="mb-5 pb-4">Close</MDBBtn></div>;
  //     },
  //   },
  // ];
  const storyContent = {
    width: "auto",
    maxWidth: "100%",
    minWidth: "100%",
    maxHeight: "100%",
    minHeight: "100%",
    margin: "auto",
  };
  return (
    <>
      <Stories
        stories={Stories}
        storyStyles={storyContent}
        defaultInterval={1000}
        width={230}
        height={400}
        loop={true}
        // onStoryEnd={(s, st) => console.log("story ended", s, st)}
        // onAllStoriesEnd={(s, st) => console.log("all stories ended", s, st)}
        // onStoryStart={(s, st) => console.log("story started", s, st)}
        keyboardNavigation
        isPaused={false}
      />
    </>
  );
  };