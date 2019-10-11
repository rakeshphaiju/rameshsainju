import React from "react";
import "./style.css";
import ramesh from "./pictures/Ramesh_Sainju.jpg";

export default function About() {
  return (
    <div className="about">
      <h1>About</h1>
       
        <img className="about-image" src={ramesh} alt="Ramesh" />
        <p className="about-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        minimcitation veniam, quis nostrud exercitation ullamco laboris nisis ut
        alliqui ex ea commodo consequat duis aute. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        minimcitation veniam, quis nostrud exercitation ullamco laboris nisis ut
        alliqui ex ea commodo consequat duis aute
      </p>
    </div>
  );
}
