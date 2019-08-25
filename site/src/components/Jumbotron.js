import React, { Component } from "react";

export default class Jumbotron extends Component {
  render() {
    return (
      <div>
        <div
          class="jumbotron jumbotron-fluid"
          style={{
            alignItems: "center",
            justifyContent: "center",
            alignContent: "center"
          }}
        >
          <div>
            <div class="container" style={{ alignItems: "center" }}>
              <div class="row">
                <div class="col-sm">
                  <div>
                    <h1
                      class="display-4"
                      style={{
                        fontWeight: "bold",
                        textAlign: "center",
                        marginTop: 20
                      }}
                    >
                      Christian Gracia
                    </h1>
                  </div>

                  <p
                    class="lead"
                    style={{ fontWeight: "bold", textAlign: "center" }}
                  >
                    Full stack web developer, RI
                  </p>
                </div>
                <div class="col-sm">
                  <img
                    src="https://scx2.b-cdn.net/gfx/news/hires/2018/space.jpg"
                    width="100%"
                    height="200px"
                  />
                </div>
              </div>

              <p style={{ fontWeight: "bold" }}>
                Email: christianmgracia@gmail.com
              </p>

              <div style={{ alignItems: "center", justifyContent: "center" }}>
                <a href="https://github.com/ChristianGracia">
                  <span style={{ paddingRight: 5 }}>GitHub</span>
                  <i class="fab fa-github-square"></i>
                </a>
                <span style={{ padding: 10 }}></span>
                <a href="https://www.linkedin.com/in/christian-gracia-32729768">
                  <span style={{ paddingRight: 5 }}>LinkedIn</span>
                  <i class="fab fa-linkedin"></i>
                </a>
                <span style={{ padding: 10 }}></span>

                <a href="http://www.twitter.com/CG_CODING">
                  <span style={{ paddingRight: 5 }}>Twitter</span>
                  <i class="fab fa-twitter"></i>
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
