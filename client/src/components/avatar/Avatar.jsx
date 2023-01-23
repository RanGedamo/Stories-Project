import React from "react";

export default function Avatar({ image }) {
  return (

    <div className="d-flex align-items-center">
    <img
      src={image}
      className="rounded-circle mb-5"
      style={{ width: "60px" }}
      alt="Avatar"
    />
  </div>

  );
}
