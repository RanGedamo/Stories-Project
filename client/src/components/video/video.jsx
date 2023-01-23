import React from "react";
import { useState ,useRef } from "react";


import video1 from "../video/Video1.mp4"
import video2 from "../video/Video1.mp4"
import video3 from "../video/Video1.mp4"
import video4 from "../video/Video1.mp4"

import "./video.css"
export default function Video(){ 
    const [isVideoPlaying,setisVideoPlaying] = useState(false)

    const vidRef = useRef();

    const onVideoClick = ()=>{
        if(isVideoPlaying){
            vidRef.current.pause();
            setisVideoPlaying(false);
        }else{
            vidRef.current.play();
            setisVideoPlaying(true);
        }
    }

   
    return(
        <div className="video-cards">
            <video onClick={onVideoClick} className="video-player" ref={vidRef} src={video1} loop autoPlay={true}/>
        </div>
    )
}