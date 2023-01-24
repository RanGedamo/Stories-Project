import React, { useEffect, useState } from "react";
import Avatar from "../avatar/Avatar";
import { statusCarousel } from "./data";
import { MDBBtn, MDBIcon } from "mdb-react-ui-kit";
import "./stories.css";
import { useDispatch, useSelector } from "react-redux";
import { getAllStories } from "../../services/storyServices";
import StoryPopUp from "../PopUp/StoryPopUp";
export default function StoriesCarousel() {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  const handleSlide = (direction) => {
    const slider = document.getElementsByClassName("carousel-body")[0];
    if (direction === "left") slider.scrollBy(-400, 0);
    else slider.scrollBy(400, 0);
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllStories());
  }, []);
  let stories = useSelector((state) => state.story.allstories);
  console.log(stories);
  return (
    <section className="check">
      <div className="left-icon" onClick={() => handleSlide("left")}>
        <MDBIcon fas icon="angle-left" />
      </div>
      <div className="carousel-body">
        {stories.map((item, i) => {
          return (
            <section key={i} className="avatar-detail">
              <div className="avatar-box">
                <div
                  onClick={handleToggle}
                  className="btn btn-tertiary"
                  data-mdb-ripple-color="light"
                >
                  <Avatar
                    className="avatarSize"
                    key={i}
                    image={item.group.avatar}
                  />
                  {toggle ? <StoryPopUp key={i} item={item} /> : ""}
                </div>
              </div>
              <p className="avatar-name">{item.creator.userName}</p>
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
