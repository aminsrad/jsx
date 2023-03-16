import React from "react";
import img from "../../Assests/profile.png";
import "./ProfilePhoto.css";

function ProfilePhoto() {
  return (
    <div className="photoP">
      <img src={img} alt="profile" />
    </div>
  );
}

export default ProfilePhoto;
