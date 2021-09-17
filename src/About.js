import React from "react";
import port from "./Images/port.svg";
import "./css/about.css";

function About() {
  return (
    <div className="about">
      <img src={port} alt="" />
      <div className="quote">
        <h2 className="head">
          Hi. I’m Roshan Chilap, nice to meet you. <br />
          Please take a look around!
        </h2>
        <h4 className="head">
          I am passionate about building excellent software that improves the
          lives of those around me. I specialize in creating software for
          clients ranging from individuals and small-businesses all the way to
          large enterprise corporations. What would you do if you had a software
          expert available at your fingertips?
        </h4>
      </div>
    </div>
  );
}
export default About;
