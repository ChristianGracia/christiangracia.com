import React, { Component } from "react";

export default class Education extends Component {
  render() {
    return (
      <div style={{}}>
        <h1 style={{ textAlign: "center", color: "white", paddingBottom: 20 }}>
          Education <i class="fas fa-graduation-cap"></i>
        </h1>

        <div style={{ textAlign: "center" }}>
          <p style={{ color: "white" }}>
            Career Devs Computer Science University 2018-2019{"\n"}
            Full Stack Web Development{"\n"}
            <a href="http://careerdevs.com/">Careerdevs.com</a>
          </p>
          <p style={{ color: "white" }}>
            {" "}
            Rhode Island College{"\n"}
            BS in General Management
            {"\n\n"}2012-2016
          </p>
        </div>
      </div>
    );
  }
}
