import React, { useEffect } from "react";
import Avatar from "../avatar/Avatar";
import { statusCarousel } from "./data";
import { MDBIcon } from "mdb-react-ui-kit";
import "./stories.css";
import { useDispatch } from "react-redux";
export default function StoriesCarousel() {
  const handleSlide = (direction) => {
    const slider = document.getElementsByClassName("carousel-body")[0];
    if (direction === "left") slider.scrollBy(-400, 0);
    else slider.scrollBy(400, 0);
  };
  let dispatch = useDispatch()
  useEffect(()=>{
  },[])
  return (
    <section className="check">
      <div className="left-icon" onClick={() => handleSlide("left")}>
        <MDBIcon fas icon="angle-left" />
      </div>
      <div className="carousel-body">
        {statusCarousel.map((item, i) => {
          return (
            <section className="avatar-detail">
              <div className="avatar-box">
                <Avatar className="avatarSize" key={i} image={item.img} />
              </div>
              <p className="avatar-name">{item.name}</p>
            </section>
          );
        })}
      </div>
      <div className="right-icon" onClick={() => handleSlide("right")}>
        <MDBIcon fas icon="angle-right" />
      </div>
    </section>
  );
}
