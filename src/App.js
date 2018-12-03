import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./componenets/home";
import Profile from "./componenets/profile";
import Login from "./componenets/login";
import Register from "./componenets/register";
import NavBar from "./componenets/navbar";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <div className="container">
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/profile" component={Profile} />
            <Route path="/" exact component={Home} />
          </Switch>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
