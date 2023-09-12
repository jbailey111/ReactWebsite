import "./button.css";
import React, { Component } from "react";

export default class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      onClick: props.onClick,
      height: props.height || "50px",
      width: props.width || "100px",
      colour: props.colour || "blue",
      fontColour: props.fontColour || "white",
      fontSize: props.fontSize || "16px",
      border: props.border || "none",
    };
  }
  render() {
    return (
      <div
        className="button-wrapper"
        style={{
          height: this.state.height,
          width: this.state.width,
          backgroundColor: this.state.colour,
          color: this.state.fontColour,
          fontSize: this.state.fontSize,
          border: this.state.border,
        }}
        onClick={this.state.onClick}
      >
        {this.props.children}
      </div>
    );
  }
}
