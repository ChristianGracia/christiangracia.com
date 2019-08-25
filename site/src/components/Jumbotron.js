import React, { Component } from "react";

export default class Jumbotron extends Component {
  render() {
    return (
      <div>
        <div
          className="jumbotron jumbotron-fluid"
          style={{
            alignItems: "center",
            justifyContent: "center",
            alignContent: "center",
            backgroundColor: "transparent",
            marginTop: -40
          }}
        >
          <div>
            <div className="container" style={{ alignItems: "center" }}>
              <div className="row">
                <div className="col-sm">
                  <div
                    style={{
                      alignItems: "center",
                      justifyContent: "center",
                      alignContent: "center"
                    }}
                  >
                    <h1
                      className="display-4"
                      style={{
                        fontWeight: "bold",
                        textAlign: "center",

                        color: "white"
                      }}
                    >
                      Christian Gracia
                    </h1>
                  </div>

                  <p
                    className="lead"
                    style={{
                      fontWeight: "bold",
                      textAlign: "center",
                      color: "white"
                    }}
                  >
                    Full stack web developer, RI
                  </p>
                  <p
                    style={{
                      fontWeight: "bold",
                      color: "white",
                      textAlign: "center"
                    }}
                  >
                    Email: christianmgracia@gmail.com
                  </p>

                  <div
                    style={{
                      alignItems: "center",
                      justifyContent: "center",
                      textAlign: "center"
                    }}
                  >
                    <a href="https://github.com/ChristianGracia">
                      <span style={{ paddingRight: 5 }}>GitHub</span>
                      <i className="fab fa-github-square"></i>
                    </a>
                    <span style={{ padding: 10 }}></span>
                    <a href="https://www.linkedin.com/in/christian-gracia-32729768">
                      <span style={{ paddingRight: 5 }}>LinkedIn</span>
                      <i className="fab fa-linkedin"></i>
                    </a>
                    <span style={{ padding: 10 }}></span>

                    <a href="http://www.twitter.com/CG_CODING">
                      <span style={{ paddingRight: 5 }}>Twitter</span>
                      <i className="fab fa-twitter"></i>
                    </a>
                  </div>
                </div>
                <div className="col-sm">
                  <img
                    src="https://scx2.b-cdn.net/gfx/news/hires/2018/space.jpg"
                    width="100%"
                    height="200px"
                    alt="photo"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
