import React, { Component } from "react";
import { Card } from "react-bootstrap";

export default class Skills extends Component {
  render() {
    return (
      <div style={{ width: "", padding: 10 }}>
        <h1 style={{ textAlign: "center", color: "white", paddingBottom: 20 }}>
          Skills{" "}
          <span>
            <i class="fas fa-hammer"></i>
          </span>
        </h1>
        <div style={{ textAlign: "center", fontWeight: "bold" }}>
          <p style={{ color: "white" }}>
            <span style={{ color: "#00FF00" }}>Languages:</span> JavaScript, C,
            Python, PHP, HTML/CSS
          </p>
          <p style={{ color: "white" }}>
            <span style={{ color: "#00FF00" }}>Frameworks:</span> React Native,
            VueJS
          </p>
          <p style={{ color: "white" }}>
            <span style={{ color: "#00FF00" }}>Libraries:</span> ReactJS, Redux
          </p>
          <p style={{ color: "white" }}>
            MongoDB, MERN Stack apps, REST API, GraphQL
          </p>
          <p style={{ color: "white" }}>
            Agile Development Methodogy, Linux/Ubuntu , Server hosting
          </p>
        </div>
      </div>
    );
  }
}
