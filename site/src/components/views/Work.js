import React, { Component } from "react";
import Github from "../Github";
import Fade from "react-reveal/Fade";
import { Button } from "react-bootstrap";
import CurrentProjects from "../CurrentProjects";

export default class Work extends Component {
  state = {
    showGithub: false,
    showRunner: true
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ showGithub: true, showRunner: false });
    }, 2000);
  }
  render() {
    return (
      <div style={{}}>
        <div
          className="container"
          style={{
            alignItems: "center",
            textAlign: "center",
            justifyContent: "center"
          }}
        >
          <Fade top>
            <Fade left opposite when={this.state.showRunner}>
              <p style={{ fontSize: 70, textAlign: "center", color: "yellow" }}>
                <i className="fas fa-running"></i>
              </p>
            </Fade>
          </Fade>

          <Fade left>
            <div>
              <p
                style={{
                  color: "white",
                  textAlign: "center",
                  margin: "auto"
                }}
              >
                I like to build websites, applications, and mobile apps. I built
                this site on a virtual ubuntu server from scratch and am hosting
                it myself. Currently mostly working with Java, React, React
                Native, and C# and dabbling in freelance web design.
              </p>
            </div>
          </Fade>
        </div>
        <CurrentProjects />

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
              className="btn btn-success"
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
                All the code for this website on GitHub{"  "}
              </span>
              <span style={{ padingLeft: 2, color: "#A6FF00" }}>
                <i class="fas fa-code-branch"> </i>
              </span>
            </Button>
          </Fade>
        </div>

        <div style={{}}>
          <Github />
        </div>
      </div>
    );
  }
}
