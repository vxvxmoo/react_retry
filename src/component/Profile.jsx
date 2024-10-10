import React from "react";

export default function Profile({ image, name, title, isNew }) {
  return (
    <div className="profile">
      <div className="new_badge" style={{ display: isNew ? "block" : "none" }}>
        NEW
      </div>
      <img className="photo" src={image} alt="avatar" />
      <h1>{name}</h1>
      <p>{title}</p>
    </div>
  );
}
