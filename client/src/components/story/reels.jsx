import React from "react";
import Video from "../Media/video";

import "./reels.css";
export default function Reels() {
  return (
    <>
      <center style={{height:"50vh"}}>
        <div className="video-container" id="video-container">
            <Video/>
            <Video/>
            <Video/>
        </div>
      </center>
    </>
  );
}
