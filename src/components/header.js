import React, { Component } from "react";
import Menu from "./menu";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Header extends Component {
  render() {
    let header = {
      position: "fixed",
      width: "100%",
      height: "60px",
      top: "60px",
      left: 0,
      background: "black",
      zIndex: "100"
    };
    let logo = {
      position: "absolute",
      top: -5,
      left: 30
    };
    return (
      <div className="Header" style={header}>
        <Link to="/">
          <img
            src={require("./finding-pritzker logo.png")}
            height="70"
            style={logo}
          />
        </Link>
        <Menu />
      </div>
    );
  }
}

export default Header;
