import { MDBBtn } from "mdb-react-ui-kit";
import Stories from "react-insta-stories";
import CommentCard from "../comments/Comments";

export default function StoriesData({item}) {
  
  const stories = [
    {
      url: item.file,
      type: 'video',
      header: item?.creator?.userName,
      seeMore: true,
      duration: 1500,
    },
    {
      url: item.file,
      type: 'video',
      header: item?.creator?.userName,
    },
    {    
      url: item.file,
      type: 'video',
      header: item?.creator?.userName
    },
    {
      url: item.file,
      type: 'video',
      header: item?.creator?.userName,
    },
    {
      url: item.file,
      type: 'video',
      header: item?.creator?.userName,
    }
  ]


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