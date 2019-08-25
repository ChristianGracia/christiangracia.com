import React, { Component } from "react";
import Jumbotron from "../Jumbotron";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Jumbotron />
        <p style={{ color: "white", textAlign: "center" }}>
          Site written by me in ReactJs <i class="fab fa-react"></i>
        </p>
      </div>
    );
  }
}
