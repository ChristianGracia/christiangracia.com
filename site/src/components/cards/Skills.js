import React, { Component } from "react";
import { ListGroup } from "react-bootstrap";

export default class Skills extends Component {
  render() {
    return (
      <div style={{ width: "" }}>
        <h1 style={{ textAlign: "center", color: "white", paddingBottom: 20 }}>
          Skills{" "}
          <span>
            <i class="fas fa-hammer"></i>
          </span>
        </h1>
        <div style={{ textAlign: "center" }}>
          <p style={{ color: "white" }}>
            Languages: JavaScript, C, Python, PHP, HTML/CSS
          </p>
          <p style={{ color: "white" }}>Frameworks: React Native, VueJS</p>
          <p style={{ color: "white" }}>Libraries: ReactJS, Redux</p>
          <p style={{ color: "white" }}>
            MongoDB, MERN Stack apps, REST API, GraphQL
          </p>
          <p style={{ color: "white" }}>
            Agile Development Methodogy, Linux/ubuntu , Server hosting
          </p>
        </div>
      </div>
    );
  }
}
