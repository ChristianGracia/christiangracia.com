import React, { Component, Fragment } from "react";
import Fade from "react-reveal/Fade";
import LightSpeed from "react-reveal/LightSpeed";
import Skills from "./cards/Skills";
import Education from "./cards/Education";

export default class Content extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  }

  render() {
    return (
      <Fragment>
        <div style={{ padding: 20 }}></div>
        <div className="container">
          <div className="">
            <div className="col-sm">
              <Fade top>
                <Skills />
              </Fade>

              <LightSpeed top cascade>
                <div>
                  <p style={{ color: "white" }}>
                    <span style={{ color: "#00FF00" }}>Languages:</span>{" "}
                    JavaScript, C, Python, PHP, HTML/CSS
                  </p>
                  <p style={{ color: "white" }}>
                    <span style={{ color: "#00FF00" }}>Frameworks:</span> React
                    Native, VueJS
                  </p>
                  <p style={{ color: "white" }}>
                    <span style={{ color: "#00FF00" }}>Libraries:</span>{" "}
                    ReactJS, Redux
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
              </LightSpeed>
            </div>
            <div style={{ padding: 10 }}></div>
            <div className="col-sm">
              <Fade right>
                <Education />
              </Fade>
            </div>
          </div>
        </div>
        <div style={{ padding: 50 }}></div>
      </Fragment>
    );
  }
}
