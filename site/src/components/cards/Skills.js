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
          <h1
            style={{
              fontSize: 37,
              justifyContent: "center",
              textAlign: "center",
              alignItems: "center",
              fontWeight: "bold",

              paddingBottom: 15
            }}
          >
            {" "}
            Android
            <span>
              <i class="fab fa-android"></i>
            </span>{" "}
            / iOS {"  "}
            <span>
              {" "}
              <i class="fab fa-apple"></i>
            </span>{" "}
            App Development
          </h1>

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
          <span style={{ marginTop: 20 }}></span>
          <p style={{ color: "white" }}>
            MongoDB, MERN Stack apps, REST API, GraphQL, NodeJS, Django,
            Bootstrap,
          </p>
          <p style={{ color: "white" }}>
            Agile Development Methodogy, Linux/Ubuntu , Server hosting
          </p>
        </div>
      </div>
    );
  }
}
