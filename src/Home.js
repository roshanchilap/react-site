import React from "react";
import "./css/home.css";
import explore from "./Images/explore1.svg";

function Home() {
  return (
    <div>
      <h1>Learning React Js</h1>
      <div className="home">
        <img className="explore" src={explore} alt="explore" />
        <h2 className="head">This site is built in React using:</h2>
        <div className="lang">
          <div className="react">React Js</div>
          <div className="react">CSS</div>
          <div className="react">React Router Dom</div>
          <div className="react">React icons</div>
          <div className="react">Material-UI</div>
        </div>
      </div>
    </div>
  );
}
export default Home;
