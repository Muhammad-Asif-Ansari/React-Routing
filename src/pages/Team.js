import React from "react";
import "./team.css";
import AppRouter from "../config/Router";
import Links from "../components/Links";
const teamMembers = [
  {
    name: "Muhammad Asif",
    role: "Frontend Developer",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Ayesha Khan",
    role: "UI/UX Designer",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Ali Raza",
    role: "Backend Developer",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Sara Ahmed",
    role: "Project Manager",
    image: "https://via.placeholder.com/150",
  },
];

const Team = () => {

  return (
    <>
    <Links/>
    <div className="team-page">
      <h2 className="team-title">Meet Our Team</h2>
      <div className="team-container">
        {teamMembers.map((member, index) => (
          <div className="team-card" key={index}>
            <img src={member.image} alt={member.name} className="team-image" />
            <h3>{member.name}</h3>
            <p>{member.role}</p>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default Team;
