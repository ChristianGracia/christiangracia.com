import React, { Component } from "react";

export default class Jumbotron extends Component {
  render() {
    return (
      <div>
        <div class="jumbotron jumbotron-fluid">
          <div
            style={{
              display: "flex",

              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <div class="container">
              <h1 class="display-4" style={{ fontWeight: "bold" }}>
                Christian Gracia
              </h1>

              <p class="lead" style={{ fontWeight: "bold" }}>
                Full stack web developer
              </p>
              <p>Email: christianmgracia@gmail.com</p>
              <div>
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
