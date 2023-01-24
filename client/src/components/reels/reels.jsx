import React from "react";
import Video from "../video/video";
import "./reels.css";
export default function Reels() {
  return (
    <>
      <center className="app">
        <div className="video-container" id="video-container">
            <Video/>
            <Video/>
            <Video/>
        </div>
      </center>
    </>
  );
}
