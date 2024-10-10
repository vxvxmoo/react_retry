import React from "react";

export default function Avatar({ isNew, image }) {
  return (
    <>
      {isNew && <span className="new">NEW</span>}
      <img className="photo" src={image} alt="avatar" />
    </>
  );
}
