import React, { Component } from "react";

export default class Jumbotron extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    timeout: false,
    icon: ""
  };

  componentDidMount() {
    const icons = [
      "fas fa-fan fa-pulse",
      "fab fa-ello fa-pulse",
      "fas fa-cookie fa-pulse",
      "fab fa-cloudsmith fa-pulse",
      "fab fa-codepen fa-pulse",
      "fab fa-codepen fa-pulse",
      "fab fa-codepen fa-pulse",
      "fab fa-codepen fa-pulse",
      "fab fa-codepen fa-pulse",
      "fab fa-codepen fa-pulse",
      "fab fa-codepen fa-pulse",
      "fab fa-codepen fa-pulse",
      "fab fa-codepen fa-pulse",
      "fab fa-codepen fa-pulse",
      "fas fa-clock fa-pulse",
      "fas fa-clock fa-pulse",
      "fas fa-clock fa-pulse",
      "far fa-clock fa-pulse",
      "far fa-clock fa-pulse",
      "far fa-clock fa-pulse",
      "far fa-clock fa-pulse",
      "fas fa-clock fa-pulse",
      "fas fa-clock fa-pulse",
      "fas fa-clock fa-pulse",
      "far fa-clock fa-pulse",
      "far fa-clock fa-pulse",
      "far fa-clock fa-pulse",
      "far fa-clock fa-pulse",
      "fas fa-circle-notch fa-pulse",
      "fas fa-circle-notch fa-pulse",
      "fas fa-circle-notch fa-pulse",
      "fas fa-atom fa-pulse",
      "fas fa-atom fa-pulse",
      "fas fa-atom fa-pulse",
      "fas fa-atom fa-pulse",
      "fas fa-atom fa-pulse",
      "fas fa-dice-d20 fa-pulse",
      "fas fa-adjust fa-pulse",
      "fas fa-star fa-pulse",
      "fas fa-adjust fa-pulse",
      "fas fa-star fa-pulse",
      "fas fa-adjust fa-pulse",
      "fas fa-star fa-pulse",
      "fas fa-compress fa-pulse",
      "fas fa-arrows-alt fa-pulse",
      "fas fa-arrows-alt fa-pulse",
      "fas fa-arrows-alt fa-pulse",
      "fas fa-arrows-alt fa-pulse",
      "fas fa-arrows-alt fa-pulse",
      "fas fa-arrows-alt fa-pulse",
      "fas fa-asterisk fa-pulse",
      "fas fa-bacon fa-pulse",
      "fas fa-egg fa-pulse",
      "fas fa-ellipsis-v fa-pulse",
      "fab fa-dyalog fa-pulse",
      "fas fa-ellipsis-h fa-pulse",
      "fas fa-fighter-jet fa-pulse",
      "fas fa-fighter-jet fa-pulse",
      "fas fa-fighter-jet fa-pulse",
      "fas fa-eye fa-pulse",
      "far fa-eye fa-pulse",
      "fas fa-eye fa-pulse",
      "far fa-eye fa-pulse",
      "fas fa-external-link-alt fa-pulse",
      "fas fa-exclamation-triangle fa-pulse",
      "fas fa-fire-alt fa-pulse",
      "fas fa-fire fa-pulse",
      "fas fa-fire-alt fa-pulse",
      "fas fa-fire fa-pulse",
      "fas fa-ghost fa-pulse",
      "far fa-gem fa-pulse",
      "far fa-gem fa-pulse",
      "fas fa-globe-africa fa-pulse",
      "fas fa-globe-americas fa-pulse",
      "fas fa-globe-americas fa-pulse",
      "fas fa-globe-americas fa-pulse",
      "fas fa-globe-americas fa-pulse",
      "fas fa-globe-americas fa-pulse",
      "fas fa-globe-europe fa-pulse",
      "fas fa-globe-asia fa-pulse",

      "fab fa-hotjar fa-pulse",
      "fab fa-hubspot fa-pulse",
      "fab fa-hubspot fa-pilse",
      "fas fa-haykal fa-spin",
      "fas fa-fan fa-pulse",
      "fab fa-ello fa-pulse",
      "fas fa-cookie fa-pulse",
      "fab fa-cloudsmith fa-pulse",
      "fab fa-codepen fa-pulse",
      "fas fa-clock fa-pulse",
      "far fa-clock fa-pulse",
      "fas fa-circle-notch fa-pulse",
      "fas fa-atom fa-pulse",
      "fas fa-dice-d20 fa-pulse",
      "fas fa-adjust fa-pulse",
      "fas fa-star fa-pulse",
      "fas fa-compress fa-pulse",
      "fas fa-arrows-alt fa-pulse",
      "fas fa-asterisk fa-pulse",
      "fas fa-bacon fa-pulse",
      "fas fa-bacon fa-pulse",
      "fas fa-bacon fa-pulse",
      "fas fa-bacon fa-pulse",
      "fas fa-bacon fa-pulse",
      "fas fa-bacon fa-pulse",
      "fas fa-bacon fa-pulse",
      "fas fa-bacon fa-pulse",
      "fas fa-bacon fa-pulse",
      "fas fa-bacon fa-pulse",
      "fas fa-bacon fa-pulse",
      "fas fa-bacon fa-pulse",
      "fas fa-bacon fa-pulse",
      "fas fa-bacon fa-pulse"
    ];
    const iconLength = icons.length;
    setTimeout(() => {
      this.setState({
        timeout: !this.state.timeout,
        icon: icons[Math.floor(Math.random() * iconLength)]
      });
    }, 3000);

    setInterval(() => {
      this.setState({
        icon: icons[Math.floor(Math.random() * iconLength)]
      });
    }, 3000);
  }

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
                      textAlign: "center",
                      color: "white"
                    }}
                  >
                    Contact me to write your website
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
                      <i class="far fa-envelope"></i>
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
                          className="fab fa-github-square"
                          style={{ color: "#000", fontSize: 20 }}
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
                          style={{ color: "#000", fontSize: 20 }}
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
                          style={{ color: "#000", fontSize: 20 }}
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
                      style={{ fontSize: 180, color: "white", marginTop: 15 }}
                    ></i>
                  ) : (
                    <i
                      class={this.state.icon}
                      style={{
                        fontSize: 180,
                        color: "#FEFF01",
                        marginTop: 15
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
