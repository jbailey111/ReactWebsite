import React, { Component } from "react";
import "./hero.css";
import heroImage from "../../static/images/hero.jpg";

export default class Hero extends Component {
  render() {
    return (
      <>
        <div className="hero-wrapper">
          <img className="hero-image" src={heroImage} alt="Hero" />
          <div className="hero-text">
            <h1 className="hero-title">Hero text</h1>
            <p className="hero-subtitle">Subtext</p>
          </div>
        </div>
        <div className="hero-wrapper-bounds"></div>
      </>
    );
  }
}
