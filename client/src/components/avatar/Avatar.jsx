import React from "react";
import '../Carousel/stories.css'

export default function Avatar({ image }) {
  return (
<div className="d-flex align-items-center">
    <img
      src={image}
      className="rounded-circle mb-5"
      style={{ width: "50px", height: "50px" }}
      alt="Avatar"
    />
  </div>
  );
}

