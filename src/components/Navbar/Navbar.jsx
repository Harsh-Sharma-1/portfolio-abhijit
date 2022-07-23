import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="nav-wrapper">
      <div className="logo">
        <div className="name">Abhijit</div>
      </div>
      <div className="nav-links">
        <div className="nav-list">
          <ul style={{ listStyleType: "none" }}>
            <li>Home</li>
            <li>About</li>
            <li>Experience</li>
            <li>Projects</li>
            <li>Contact</li>
          </ul>
        </div>
        <button className="button">Hire Me</button>
      </div>
    </div>
  );
};

export default Navbar;
