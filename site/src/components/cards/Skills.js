import React, { Component } from "react";
import Fade from "react-reveal/Fade";

export default class Skills extends Component {
  render() {
    return (
      <div style={{}}>
        <div style={{ textAlign: "center", fontSize: 70 }}>
          <i class="fas fa-hammer" style={{ color: "#FFFF00" }}></i>
        </div>

        <div
          style={{
            flex: 1,
            flexDirection: "column",
            textAlign: "center",
            paddingTop: 30
          }}
        >
          <Fade left cascade>
            <div style={{ color: "white", margin: "auto" }}>
              <h1>Web Design</h1>
              <h1 style={{}}>Software Design</h1>
              <h1>Data Structures</h1>
            </div>
          </Fade>
        </div>

        <div
          style={{
            textAlign: "center",
            fontWeight: "bold",
            color: "white",
            margin: "auto"
          }}
        >
          <h1
            style={{
              fontSize: 27,
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
            </span>{" "}
          </h1>
          <div style={{ paddingBottom: 20 }}></div>
        </div>
      </div>
    );
  }
}
