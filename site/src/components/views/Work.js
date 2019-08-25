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
            class="row"
            style={{
              display: "flex",
              justifyContent: "center"
            }}
          >
            <p style={{ fontSize: 70, paddingRight: 30 }}>
              {" "}
              <i class="fas fa-running"></i>
            </p>

            <p
              style={{
                color: "white",
                textAlign: "center",
                width: "50vw"
              }}
            >
              {" "}
              I have built numerous full stack applications and worked with many
              different langueages, libraries, frameworks, and data structures.
              Built this site on a ubuntu server and am hosting it myself.
              Mostly working with React, React Native, and C# currently
            </p>
          </div>
        </Fade>

        <div style={{ padding: 20 }}>
          <Github />
        </div>
      </div>
    );
  }
}
