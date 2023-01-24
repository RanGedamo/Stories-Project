import { MDBBtn } from "mdb-react-ui-kit";
import Stories from "react-insta-stories";
import CommentCard from "../comments/Comments";

export default function StoriesData() {
  let stories = [
    {
      url: "images/public-images/video.mp4",
      type: "video",
      header: {
        heading: "Burak Deniz",
        subheading: "burakdeniz@gmail.com",
        profileImage:
          "https://th.bing.com/th?id=ORMS.a94a9012f80a59bd6d4aacc139ee2ec8&pid=Wdp&w=612&h=304&qlt=90&c=1&rs=1&dpr=1.25&p=0",
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
  {
    stories.map((story, index) => {
      stories.push({
        url: "images/public-images/video.mp4",
        type: "video",
        header: {
          heading: "Burak Deniz",
          subheading: "burakdeniz@gmail.com",
          profileImage:
            "https://th.bing.com/th?id=ORMS.a94a9012f80a59bd6d4aacc139ee2ec8&pid=Wdp&w=612&h=304&qlt=90&c=1&rs=1&dpr=1.25&p=0",
        },
        seeMore: true,
        duration: 1000,
        seeMore: ({ close }) => {
          return <div onClick={close}>Hello, click to close this.</div>;
        },
      });
    });
  }
  console.log(stories);
  return (
    <>
      <Stories
        stories={stories}
        storyStyles={storyContent}
        defaultInterval={1000}
        width={432}
        height={768}
        loop={true}
        onStoryEnd={(s, st) => console.log("story ended", s, st)}
        onAllStoriesEnd={(s, st) => console.log("all stories ended", s, st)}
        onStoryStart={(s, st) => console.log("story started", s, st)}
        keyboardNavigation
        isPaused={false}
      />
    </>
  );
  };