import React from "react";
import "./about.css";
import Links from "../components/Links";

const About = () => {
  return (
    <>
    <Links/>
    <div className="about-container">
      <h1>About Us</h1>
      <p className="about-intro">
        Welcome to our website! We are passionate developers building awesome
        apps with React.
      </p>

      <div className="about-section">
        <h2>Our Mission</h2>
        <p>
          Our mission is to provide innovative and user-friendly solutions that
          solve real-world problems using modern web technologies like React,
          Firebase, and more.
        </p>
      </div>

      <div className="about-section">
        <h2>What We Do</h2>
        <ul>
          <li>✅ Build modern web applications</li>
          <li>✅ Create responsive and intuitive UIs</li>
          <li>✅ Work with real-time databases</li>
          <li>✅ Integrate secure authentication systems</li>
        </ul>
      </div>

      <div className="about-section">
        <h2>Technologies We Love</h2>
        <p>
          We enjoy working with:
          <span className="tech-stack">
            React, JavaScript, Firebase, Supabase, HTML, CSS, and more.
          </span>
        </p>
      </div>
    </div>
    </>
  );
};

export default About;
