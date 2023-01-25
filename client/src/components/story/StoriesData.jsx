import { MDBBtn } from "mdb-react-ui-kit";
import { useEffect } from "react";
import Stories from "react-insta-stories";
import { storiesAPI } from "../../services/storys";
// import CommentCard from "../comments/Comments";

export default function StoriesData({item}) {
  const story = [
    {
      url: item.file,
      type: 'video',
      header: item?.creator?.userName,
      seeMore: true,
      duration: 1500,
      seeMore: ({ close }) => {
        return <div onClick={close}>Hello, click to close this.</div>;
      },
    },
    {
      url: item.file,
      type: 'video',
      header: item?.creator?.userName,
      seeMore: ({ close }) => {
        return <div onClick={close}>Hello, click to close this.</div>;
      },
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
        stories={story}
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