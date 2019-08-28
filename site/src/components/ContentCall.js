import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import Content from "./Content";
import Work from "./views/Work";
import About from "./views/About";

export default class ContentCall extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div>
        <div style={{ padding: 20 }}></div>
        <div></div>
        <Fade top></Fade>
        <Work />
        <div style={{ textAlign: "center", marginTop: 40 }}>
          <span style={{ color: "#A5FE00" }}>
            {" "}
            <i
              style={{ fontSize: 100 }}
              class="fab fa-connectdevelop fa-spin"
            ></i>
          </span>
        </div>
        <About />
      </div>
    );
  }
}
