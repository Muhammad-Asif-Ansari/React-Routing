import React, { useEffect, useState } from "react";
import "./profile.css";
import Links from "../components/Links";

const Profile = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <>
    <Links/>
    <div className="profile-container">
      <div className="profile-card">
        <img
          src={`https://ui-avatars.com/api/?name=${user.name}&background=1976D2&color=fff&size=150`}
          alt="User Avatar"
          className="profile-avatar"
        />
        <h2 className="profile-name">{user.name || "Guest"}</h2>
        <p className="profile-role">Frontend Developer</p>

        <div className="profile-info">
          <p><strong>Email:</strong> {user.email || "guest@example.com"}</p>
          <p><strong>Location:</strong> Pakistan</p>
          <p><strong>Skills:</strong> React, JavaScript, Firebase</p>
        </div>
      </div>
    </div>
    </>
  );
};

export default Profile;
