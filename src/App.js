import React from "react";
import Home from "./Home";
import About from "./About";
import Posts from "./Posts";
import NotFound from "./NotFound";
import "./App.css";
import logo from "./Images/logo.svg";

import { BrowserRouter, Route, Switch, Redirect, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <img className="logo" src={logo} alt="" />
        <div className="nav">
          <Link to="/">Home</Link>
          <Link to="/About">About</Link>
          <Link to="/Posts">Posts</Link>
        </div>

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/home">
            <Redirect to="/" />
          </Route>
          <Route path="/About" component={About} />
          <Route path="/Posts" component={Posts} />
          <Route path="*" component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
