import React, { Component } from "react";

export default class Jumbotron extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    timeout: false
  };
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        timeout: !this.state.timeout
      });
    }, 3000);
  }
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
            marginTop: -70
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

                          color: "#00FE00"
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
                      fontWeight: "bold",
                      color: "white",
                      textAlign: "center"
                    }}
                  >
                    Email{" "}
                    <span>
                      <i class="far fa-envelope"></i>
                    </span>{" "}
                    christianmgracia@gmail.com
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
                          className="fab fa-github-square"
                          style={{ color: "#2EBB4E", fontSize: 20 }}
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
                          style={{ color: "#0077B5", fontSize: 20 }}
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
                          style={{ color: "#1DA1F2", fontSize: 20 }}
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
                >
                  {!this.state.timeout ? (
                    <i
                      class="fas fa-dice-d20"
                      style={{ fontSize: 180, color: "white", marginTop: 2 }}
                    ></i>
                  ) : (
                    <i
                      class="fas fa-dice-d20 fa-pulse"
                      style={{
                        fontSize: 180,
                        color: "#00FE00",
                        marginTop: 2
                      }}
                    ></i>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
