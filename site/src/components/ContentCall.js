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
        <div>
          <span>
            <i class="fab fa-python"></i>
          </span>
          <span>
            <i class="fab fa-js-square"></i>
          </span>
          <span>
            <i class="fab fa-react"></i>
          </span>
          <span>
            <i class="fab fa-node"></i>
          </span>
        </div>
        <Fade top></Fade>
        <Work />
        <About />
      </div>
    );
  }
}
