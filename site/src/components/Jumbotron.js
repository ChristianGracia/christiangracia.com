import React, { Component } from "react";

export default class Jumbotron extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    timeout: false,
    icon: ""
  };

  render() {
    return (
      <div style={{ flex: 1 }}>
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
                  <div
                    style={{
                      alignItems: "center",
                      justifyContent: "center",
                      alignContent: "center"
                    }}
                  >
                    {!this.state.timeout ? (
                      <h1
                        style={{
                          fontWeight: "bold",
                          textAlign: "center",

                          color: "white"
                        }}
                      >
                        Christian Gracia
                      </h1>
                    ) : (
                      <h1
                        style={{
                          fontWeight: "bold",
                          textAlign: "center",

                          color: "#FEFF01"
                        }}
                      >
                        Christian Gracia
                      </h1>
                    )}
                  </div>
                  <p
                    className="lead"
                    style={{
                      fontWeight: "bold",
                      textAlign: "center",
                      color: "white"
                    }}
                  >
                    Full stack web developer <i class="fas fa-laptop-code"></i>
                    {"  "}
                    {"  "}
                    Providence, RI
                  </p>
                  <p
                    style={{
                      fontStyle: "italic",
                      fontWeight: "bold",
                      color: "#FEFF01",
                      textAlign: "center"
                    }}
                  >
                    React, React Native, C#, and more
                  </p>
                  <p
                    style={{
                      fontWeight: "bold",
                      color: "white",
                      textAlign: "center",
                      fontSize: 15
                    }}
                  >
                    Email{" "}
                    <span style={{ color: "#FEFF01" }}>
                      <i class="fas fa-envelope"></i>
                    </span>{" "}
                    <span
                      style={{
                        color: "#fff",
                        fontWeight: "bold"
                      }}
                    >
                      christianmgracia@gmail.com
                    </span>
                  </p>

                  <div
                    style={{
                      alignItems: "center",
                      justifyContent: "center",
                      textAlign: "center",
                      fontWeight: "bold"
                    }}
                  >
                    <a href="https://github.com/ChristianGracia">
                      <span style={{ paddingRight: 5, color: "white" }}>
                        GitHub
                      </span>
                      <span>
                        <i
                          className="fab fa-github"
                          style={{ color: "#FEFF01", fontSize: 20 }}
                        ></i>
                      </span>
                    </a>
                    <span style={{ padding: 10 }}></span>
                    <a href="https://www.linkedin.com/in/christian-gracia-32729768">
                      <span style={{ paddingRight: 5, color: "white" }}>
                        LinkedIn
                      </span>
                      <span>
                        <i
                          className="fab fa-linkedin"
                          style={{ color: "#FEFF01", fontSize: 20 }}
                        ></i>
                      </span>
                    </a>
                    <span style={{ padding: 10 }}></span>

                    <a href="http://www.twitter.com/CG_CODING">
                      <span style={{ paddingRight: 5, color: "white" }}>
                        Twitter
                      </span>
                      <span>
                        <i
                          className="fab fa-twitter"
                          style={{ color: "#FEFF01", fontSize: 20 }}
                        ></i>
                      </span>
                    </a>
                  </div>
                  <div style={{ padding: 5 }}></div>
                </div>
                <div
                  className="col-sm"
                  style={{
                    textAlign: "center"
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
