import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import Content from "./Content";

export default class ContentCall extends Component {
  render() {
    return (
      <div>
        <Fade top>
          <Content />
        </Fade>
      </div>
    );
  }
}
