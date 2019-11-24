import React, { Component } from "react";
import "./social-links.styles.css";

export default class SocialMediaLinks extends Component {
  render() {
    return (
      <div style={{ textAlign: "center" }} className="social-links">
        <a href="https://github.com/ChristianGracia">
          <span style={{ paddingRight: 5, color: "white" }}>GitHub</span>
          <span>
            <i
              className="fab fa-github box box-1"
              style={{ color: "#FEFF01", fontSize: 20 }}
            ></i>
          </span>
        </a>
        <span style={{ padding: 10 }}></span>
        <a href="https://www.linkedin.com/in/christian-gracia-32729768">
          <span style={{ paddingRight: 5, color: "white" }}>LinkedIn</span>
          <span>
            <i
              className="fab fa-linkedin box box-2"
              style={{ color: "#FEFF01", fontSize: 20 }}
            ></i>
          </span>
        </a>
        <span style={{ padding: 10 }}></span>

        <a href="http://www.twitter.com/CG_CODING">
          <span style={{ paddingRight: 5, color: "white" }}>Twitter</span>
          <span>
            <i
              className="fab fa-twitter box box-3"
              style={{ color: "#FEFF01", fontSize: 20 }}
            ></i>
          </span>
        </a>
      </div>
    );
  }
}
