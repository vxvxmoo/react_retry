import React from "react";

export default function Avatar({ isNew, image }) {
  return (
    <div className="avatar">
      {isNew && <span className="new">NEW</span>}
      <img className="photo" src={image} alt="avatar" />
    </div>
  );
}
