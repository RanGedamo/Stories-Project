import { MDBBtn } from "mdb-react-ui-kit";
import Stories from "react-insta-stories";
import CommentCard from "../comments/Comments";

export default function StoriesData({item}) {
  let stories = [
    {
      url:" item.file",
      type: "video",
      header: {
        heading: "item.creator.email",
        subheading: "burakdeniz@gmail.com",
        profileImage:"item.creator.avatar"
      },
      seeMore: true,
      duration: 1000,
      seeMore: ({ close }) => {
        return <div ><CommentCard/>
        <MDBBtn onClick={close} className="mb-5 pb-4">Close</MDBBtn></div>;
      },
    },
  ];
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
        stories={stories}
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