import { NavLink } from 'react-router-dom'
import Links from '../components/Links'
import React from "react";
import "./HeroSection.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Links/>
      <div className="hero">
      <div className="hero-content">
        <h1>Welcome to Our Website</h1>
        <p>
          We build modern web applications with React, Firebase, and powerful
          tools to help you grow online.
        </p>
        <button onClick={() => navigate("/signup")}>Get Started</button>
      </div>
      <div className="hero-image">
        <img src="https://www.rlogical.com/wp-content/uploads/2020/12/MERN.webp" alt="Hero" />
      </div>
    </div>
    </div>
  )
}

export default Home
