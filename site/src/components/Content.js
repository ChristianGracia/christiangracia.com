import React, { Component, Fragment } from "react";
import Fade from "react-reveal/Fade";
import LightSpeed from "react-reveal/LightSpeed";
import Skills from "./cards/Skills";
import Education from "./cards/Education";

export default class Content extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lightbulb: false
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    setTimeout(() => {
      this.setState({ lightbulb: true });
    }, 5000);
  }

  render() {
    return (
      <Fragment>
        <div className="container" style={{ marginTop: 30 }}>
          <div className="">
            <div className="col-sm">
              <div
                style={{
                  textAlign: "center",
                  justifyContent: "center",
                  alignItems: "center"
                }}
              ></div>
              <div style={{ paddingBottom: 30 }}></div>
              <Fade top>
                <Skills />
              </Fade>

              <LightSpeed top cascade>
                <div style={{ textAlign: "center", marginTop: 20 }}>
                  <p style={{ color: "white" }}>
                    <span style={{ color: "#FEFE01", fontWeight: "bold" }}>
                      Languages:
                    </span>{" "}
                    JavaScript, C#, Python, C, PHP, HTML/CSS,
                  </p>
                  <p style={{ color: "white" }}>
                    <span style={{ color: "#FEFE01", fontWeight: "bold" }}>
                      Frameworks:
                    </span>{" "}
                    React Native, VueJS
                  </p>
                  <p style={{ color: "white" }}>
                    <span style={{ color: "#FEFE01", fontWeight: "bold" }}>
                      Libraries:
                    </span>{" "}
                    React, Redux, Bootstrap, Express.js, NodeJs
                  </p>
                  <span style={{ marginTop: 20 }}></span>
                  <p style={{ color: "white" }}>
                    MongoDB, MERN Stack apps, REST API, GraphQL, NodeJS, Django,
                    Bootstrap
                  </p>
                  <p style={{ color: "white" }}>
                    Agile Development Methodogy, Linux/Ubuntu , Server hosting,
                    Git
                  </p>
                  <p style={{ color: "white" }}>
                    Object Oriented Programming, Bash scripting, React Hooks
                  </p>
                </div>
              </LightSpeed>
              <LightSpeed left>
                <div
                  style={{
                    padding: 20
                  }}
                >
                  <div
                    className="row"
                    style={{
                      flex: 1,
                      flexDirection: "row",
                      margin: "auto",
                      padding: 2,
                      justifyContent: "space-around"
                    }}
                  >
                    <div className="col-xs">
                      <span style={{ color: "#F5DE19", textAlign: "center" }}>
                        <i
                          style={{ fontSize: 47 }}
                          class="fab fa-js-square"
                        ></i>
                      </span>
                    </div>
                    <div className="col-xs">
                      <span style={{ color: "#3775A8" }}>
                        <i style={{ fontSize: 47 }} class="fab fa-python"></i>
                      </span>
                    </div>
                    <div className="col-xs">
                      <span style={{ color: "#87C000" }}>
                        <i style={{ fontSize: 47 }} class="fab fa-node"></i>
                      </span>
                    </div>
                    <div className="col-xs">
                      <span style={{ color: "#60DBFB" }}>
                        <i style={{ fontSize: 47 }} class="fab fa-react"></i>
                      </span>
                    </div>
                  </div>
                </div>
              </LightSpeed>
            </div>
            <div style={{ padding: 10 }}></div>
            <div className="col-sm">
              <div
                style={{
                  textAlign: "center",
                  justifyContent: "center",
                  alignItems: "center",
                  paddingBottom: 20
                }}
              >
                {" "}
                <div style={{ paddingBottom: 30 }}></div>
                {this.state.lightbulb ? (
                  <span style={{ color: "yellow" }}>
                    <i style={{ fontSize: 200 }} class="far fa-lightbulb"></i>
                  </span>
                ) : (
                  <span style={{ color: "grey" }}>
                    <i style={{ fontSize: 200 }} class="far fa-lightbulb"></i>
                  </span>
                )}
              </div>{" "}
              <div style={{ paddingBottom: 30 }}></div>
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
