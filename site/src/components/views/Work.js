import React, { Component } from "react";
import Github from "../Github";
import Fade from "react-reveal/Fade";
import { Button } from "react-bootstrap";

export default class Work extends Component {
  state = {
    showGithub: false
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ showGithub: true });
    }, 2000);
  }
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
            <p style={{ fontSize: 70, textAlign: "center", color: "yellow" }}>
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

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            paddingTop: 40
          }}
        >
          <Fade when={this.state.showGithub}>
            <Button
              onClick={() => {
                window.location.href =
                  "https://github.com/ChristianGracia/portfolioSite/";
              }}
            >
              <span
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  alignContent: "center"
                }}
              >
                All the code for this site on GitHub{"  "}
              </span>
              <span style={{ padingLeft: 2, color: "green" }}>
                <i class="fas fa-code-branch"> </i>
              </span>
            </Button>
          </Fade>
        </div>

        <div></div>
        <div style={{}}>
          <Github />
        </div>
      </div>
    );
  }
}
