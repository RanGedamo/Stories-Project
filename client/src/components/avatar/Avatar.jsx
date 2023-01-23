import React from "react";

export default function Avatar({ image }) {
  return (
    <div className="d-flex align-items-center">
      <img
        src={image}
        alt="community member"
        style={{ width: "45px", height: "45px" }}
        className="rounded-circle"
      />
    </div>
  );
}
