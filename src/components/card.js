import React, { Component } from "react";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state  = {change: false}
    this.change = this.change.bind(this);
  }

  change() {
    this.setState({change: !this.state.change});
  }

  render() {
    let card = {
      // border: "1px solid green",
      position: "relative",
      width: 270,
      height: 300,
      marginRight: 40
    };
    let wrap = {
      // border: "1px solid green",
      position: "absolute",
      width: "100%",
      height: "100%",
      background: "#FAC733",
      visibility: "hidden"
    };
    let arrow = {
      //   border: "1px solid green",
      position: "absolute",
      right: 0,
      bottom: 0
    };
    let graphic = {
      // border: "1px solid green",
      position: "absolute",
      top: 3,
      left: 3,
      display: "block"
    };
    let year = {
      // border: "1px solid green",
      position: "absolute",
      top: 20,
      background: "white"
    };
    let name = {
      position: "absolute",
      top: 42,
      fontSize: 24,
      fontWeight: "bold",
      lineHeight: 1.2,
      background: "white"
    };
    if(this.state.change) {
      year.background = "#FAC733";
      name.background = "#FAC733";
      wrap.visibility = "visible";
    }
    return (
      <div className="Card" style={card}>
        <div style={wrap}>
          {" "}
          <img src={require("./arrow-down-right.svg.png")} style={arrow} />
        </div>
        <img className="image" src={this.props.image} style={graphic} onMouseOver={this.change} onMouseOut={this.change} />
        <div style={year}>{this.props.year} Laureate</div>
        <div style={name}>{this.props.name}</div>
      </div>
    );
  }
}

export default Card;
