import React from "react";
import { useState ,useRef, useEffect } from "react";
import Header from "../Header/Header";


import video1 from "../video/video1.mp4"
import video2 from "../video/video1.mp4"


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

    useEffect(() => {
        const scroll = document.getElementById("video-container");
    
        if (scroll) {
          scroll.addEventListener("scroll", () => {
            vidRef.current.pause();
          });
        }
      }, []);

   
    return(
        <div className="video-cards">
            <Header/>
            <video onClick={onVideoClick} className="video-player" ref={vidRef} src={video2} loop autoPlay={true}/>
        </div>
    )
}