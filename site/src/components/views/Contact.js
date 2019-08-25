import React, { Component } from "react";
import { Button } from "react-bootstrap";
import Game from "../Game.js";

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="joke" style={{}}>
        <div
          style={{
            paddingTop: 100,
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        ></div>

        <div style={{ paddingBottom: 1000 }}></div>
      </div>
    );
  }
}
