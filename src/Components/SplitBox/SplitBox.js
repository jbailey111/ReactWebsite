import React, { Component } from "react";
import "./splitbox.css";
import testImage from "../../static/images/testImage.svg";

export default class SplitBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      swap: props.swap || false,
      imageSrc: props.imageSrc || testImage,
      imageAlt: props.imageAlt || "testImage",
      text: props.text || "Some text",
    };
  }

  render() {
    const { swap, imageSrc, imageAlt, text } = this.state;
    return (
      <div className={`splitbox-wrapper ${swap ? "reverse" : ""}`}>
        <div className="splitbox-content">
          <p className="splitbox-text">{text}</p>
        </div>
        <div className="splitbox-content">
          <img src={imageSrc} alt={imageAlt} className="splitbox-image" />
        </div>
      </div>
    );
  }
}
