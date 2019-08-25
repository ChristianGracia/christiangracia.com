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
            backgroundColor: "transparent"
          }}
        >
          <div>
            <div className="container" style={{ alignItems: "center" }}>
              <div className="row">
                <div className="col-sm">
                  <div>
                    <h1
                      className="display-4"
                      style={{
                        fontWeight: "bold",
                        textAlign: "center",
                        marginTop: 20,
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
                </div>
                <div className="col-sm">
                  <img
                    src="https://scx2.b-cdn.net/gfx/news/hires/2018/space.jpg"
                    width="100%"
                    height="200px"
                  />
                </div>
              </div>

              <p style={{ fontWeight: "bold", color: "white", paddingTop: 10 }}>
                Email: christianmgracia@gmail.com
              </p>

              <div style={{ alignItems: "center", justifyContent: "center" }}>
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
                <span style={{ padding: 10 }}></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
