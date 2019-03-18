import React, { Component } from "react";
import Card from "./card";
import staticdata from "../staticdata.json";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Slideshow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
    };
    this.plusSlide = this.plusSlide.bind(this);
    this.minusSlide = this.minusSlide.bind(this);
  }

  plusSlide() {
    this.setState({
      index: this.state.index + 1
    });
  }
  minusSlide() {
    this.setState({
      index: this.state.index - 1
    });
  }

  render() {
    let slideshow = {
      // border: "1px solid green",
      position: "absolute",
      top: "55%",
      transform: "translateY(-50%)",
      left: 120,
      right: 120,
      height: 380,
      display: "grid",
      gridTemplateRows: "repeat(2, auto)",
      gridRowGap: 35,
      overflow: "hidden"
    };
    let slideshowContainer = {
      height: 300,
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-start",
      transform: ""
    };
    let scrollbar = {
      width: "100%",
      height: 45
    };
    let prev = {
      position: "absolute",
      left: 0,
      bottom: 0,
      width: 40,
      height: 45,
      background: "#FAC733"
    };
    let prev1 = {
      position: "absolute",
      left: 0,
      bottom: 0,
      width: 40,
      height: 45,
      background: "#BBBBBB"
    };
    let next = {
      position: "absolute",
      right: 0,
      bottom: 0,
      width: 40,
      height: 45,
      background: "#FAC733"
    };
    let next1 = {
      position: "absolute",
      right: 0,
      bottom: 0,
      width: 40,
      height: 45,
      background: "#BBBBBB"
    };
    let dots = {
      position: "absolute",
      bottom: 10,
      left: "50%",
      transform: "translateX(-50%)",
      display: "grid",
      gridTemplateColumns: "repeat(3, auto)",
      gridColumnGap: 15
    };
    let dot = {
      width: 16,
      height: 16,
      borderRadius: 8,
      background: "#BBBBBB"
    };
    let dot1 = {
      width: 20,
      height: 20,
      borderRadius: 10,
      background: "#FAC733"
    };

    const nextButton = (
      <div className="Next" style={next} onClick={this.plusSlide}>
        <img src={require("./chevron-right.svg.png")} />
      </div>
    );
    const nextButton1 = (
      <div className="Next" style={next1}>
        <img src={require("./chevron-right.svg.png")} />
      </div>
    );
    const prevButton = (
      <div className="Prev" style={prev} onClick={this.minusSlide}>
        <img src={require("./chevron-left.svg.png")} />
      </div>
    );
    const prevButton1 = (
      <div className="Prev" style={prev1}>
        <img src={require("./chevron-left.svg.png")} />
      </div>
    );

    let trans = -1240 * this.state.index;
    if (this.state.index < 3) {
      slideshowContainer.transform = "translateX(" + trans + "px)";
    }

    return (
      <div className="Slideshow" style={slideshow}>
        <div className="SlideshowContainer" style={slideshowContainer}>
          {staticdata.winners.map(cell => (
            <Link to={"/map" + cell.index} style={{ color: 'black' }} ><Card year={cell.year} name={cell.name} image={cell.image} index={cell.index} /></Link>
          ))}
        </div>
        <div className="Scrollbar" style={scrollbar}>
          {this.state.index == 0 ? prevButton1 : prevButton}
          {this.state.index == 2 ? nextButton1 : nextButton}
          <div classname="Dots" style={dots}>
            <div className="Dot" style={this.state.index == 0? dot1: dot} />
            <div className="Dot" style={this.state.index == 1? dot1: dot} />
            <div className="Dot" style={this.state.index == 2? dot1: dot} />
          </div>
        </div>
      </div>
    );
  }
}

export default Slideshow;
