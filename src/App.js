import React, { Component } from "react";
import "./App.css";
import Header from "./components/header";
import Slideshow from "./components/slideshow";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Slideshow />
      </div>
    );
  }
}

export default App;
