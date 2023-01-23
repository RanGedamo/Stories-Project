
import Stories from "react-insta-stories";
import React, { Component } from "react";


export default function StoryComponent() {
  const burakHeading = {
    heading: "Burak Deniz",
    subheading: "burakdeniz@gmail.com",
    profileImage: "https://i.imgur.com/lq0DC3a.jpg",
  };
  const stories = [
    {
      url: "https://i.imgur.com/QpUEcfi.jpg",
      type: "image",
      header: burakHeading,
      seeMore: true,
      duration: 1500,
      seeMore: ({ close }) => {
        return <div onClick={close}>Hello, click to close this.</div>;
      },
    },
    {
      url: "https://i.imgur.com/QpUEcfi.jpg",
      type: "image",
      header: burakHeading,
      seeMore: true,
      duration: 1500,
      seeMore: ({ close }) => {
        return <div onClick={close}>Hello, click to close this.</div>;
      },
    },
    {
      url: "https://i.imgur.com/QpUEcfi.jpg",
      type: "image",
      header: burakHeading,
      seeMore: true,
      duration: 1500,
      seeMore: ({ close }) => {
        return <div onClick={close}>Hello, click to close this.</div>;
      },
    },
    {
      url: "https://i.imgur.com/QpUEcfi.jpg",
      type: "image",
      header: burakHeading,
      seeMore: true,
      duration: 1500,
      seeMore: ({ close }) => {
        return <div onClick={close}>Hello, click to close this.</div>;
      },
    },
  ];

  return (
    <Stories
      stories={stories}
      defaultInterval={1500}
      width={432}
      height={768}
    />
  );
}