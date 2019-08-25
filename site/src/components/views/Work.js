import React, { Component } from "react";
import Github from "../Github";
import Fade from "react-reveal/Fade";

export default class Work extends Component {
  render() {
    return (
      <div style={{}}>
        <div style={{ padding: 30 }}> </div>
        <Fade left>
          <div
            className="container"
            style={{
              alignItems: "center",
              textAlign: "center",
              justifyContent: "center"
            }}
          >
            <p style={{ fontSize: 70, textAlign: "center" }}>
              <i class="fas fa-running"></i>
            </p>

            <p
              style={{
                color: "white",
                textAlign: "center",
                margin: "auto"
              }}
            >
              I have built numerous full stack applications and worked with many
              different langueages, libraries, frameworks, and data structures.
              Built this site on a virtual ubuntu server from scratch and am
              hosting it myself. Currently mostly working with React, React
              Native, and C#.
            </p>
          </div>
        </Fade>
        <div style={{}}>
          <Github />
        </div>
      </div>
    );
  }
}
