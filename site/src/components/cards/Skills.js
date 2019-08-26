import React, { Component } from "react";
import Fade from "react-reveal/Fade";

export default class Skills extends Component {
  render() {
    return (
      <div style={{ width: "", padding: 10 }}>
        <h1 style={{ textAlign: "center", color: "white", paddingBottom: 40 }}>
          Skills{" "}
          <span>
            <i class="fas fa-hammer"></i>
          </span>
        </h1>

        <div
          style={{ textAlign: "center", fontWeight: "bold", color: "white" }}
        >
          <h1
            style={{
              fontSize: 30,
              justifyContent: "center",
              textAlign: "center",
              alignItems: "center",
              fontWeight: "bold"
            }}
          >
            <span style={{}}>
              {" "}
              Android
              <span
                style={{
                  color: "#00FF00",
                  marginLeft: 6,
                  paddingRight: 2,
                  fontSize: 40
                }}
              >
                <i class="fab fa-android"></i>
              </span>
              {"  "}/ iOS {"  "}
              <span
                style={{
                  color: "white",
                  paddingLeft: 2,
                  paddingRight: 2,
                  fontSize: 40
                }}
              >
                {"  "}
                <i class="fab fa-apple"></i>
              </span>
              {"  "}
              App Development
            </span>
            <span>Web Design</span>
            <span>Software Design</span>
            <span>Data Structures</span>
          </h1>
          <div style={{ paddingBottom: 20 }}></div>
        </div>
      </div>
    );
  }
}
