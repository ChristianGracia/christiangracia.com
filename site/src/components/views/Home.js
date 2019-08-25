import React, { Component } from "react";
import Jumbotron from "../Jumbotron";
import Fade from "react-reveal/Fade";
import Content from "../Content";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Jumbotron />
        <Fade top>
          <p style={{ color: "white", textAlign: "center" }}>
            Site written by me in ReactJs <i class="fab fa-react"></i>
          </p>
        </Fade>
        <Fade top>
          <p style={{ textAlign: "center", color: "white", paddingTop: 40 }}>
            Scroll down <i class="fas fa-arrow-down"></i>
          </p>
        </Fade>
        <Fade top>
          <Content />
        </Fade>
      </div>
    );
  }
}
