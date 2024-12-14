import React, { useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import "./UserProfile.css";

const UserProfile = () => {
  const [user_name, setUser_name] = useState("");
  return (
    <div>
      <div className="user-profile-container">
        <div className="user-profile-box">
          <AccountCircleIcon className="user-profile-icon" />
          <span>{user_name}</span>
        </div>
        <span className="profile-today-text">오늘도 건강하세요!</span>
      </div>
    </div>
  );
};

export default UserProfile;
