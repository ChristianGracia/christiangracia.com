import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import Content from "./Content";

export default class ContentCall extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div>
        <Fade top>
          <p>Hiii</p>
          <div style={{ paddingBottom: 600 }}></div>
        </Fade>
      </div>
    );
  }
}
