import React from "react";
import { useState ,useRef, useEffect } from "react";


import video1 from "./Video1.mp4"
import video2 from "./video2.mp4"


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
         
            <video onClick={onVideoClick} className="video-player" ref={vidRef} src={video1} loop autoPlay={true}/>
        </div>
    )
}