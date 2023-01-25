import React from "react";
import '../Carousel/stories.css'

export default function Avatar({ image }) {
  return (
<div className="d-flex align-items-center">
    <img
      src={image}
      className="rounded-circle"
      style={{ width: "66px", height: "65px" }}
      alt="Avatar"
    />
  </div>
  );
}

