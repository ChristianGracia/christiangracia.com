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

        <Work />

        <About />
      </div>
    );
  }
}
