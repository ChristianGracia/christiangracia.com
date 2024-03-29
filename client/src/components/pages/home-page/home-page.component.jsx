import React, { Component } from "react";
import Headline from "../../headline/headline-component";
import PageCombiner from "../../page-combiner/page-combiner.component";
import ParticleBackground from "../../particles/ParticleBackground";
import Fade from "react-reveal/Fade";
import { Button } from "react-bootstrap";

export default class Home extends Component {
  state = { isShow: true };

  hideArrow = () => {
    if (this.state.isShow) {
      this.setState({ isShow: false });
    }
  };

  render() {
    return (
      <div
        style={{
          height: "100%",
          width: "100%",
          justifyContent: "space-between"
        }}
      >
        {this.state.isShow ? (
          <div style={{ flex: 1, marginTop: 10 }}>
            <ParticleBackground style={{}} />
            <Headline />

            <div
              style={{
                flex: 1,
                margin: 0
              }}
            >
              <Fade left>
                <div>
                  <p
                    style={{
                      color: "#FFFF00",
                      textAlign: "center",
                      fontSize: 20,
                      fontWeight: "bold",
                      flex: 1
                    }}
                  >
                    Site written in ReactJs{" "}
                    <span style={{ color: "#60DAFB" }}>
                      <i className="fab fa-react fa-spin"></i>
                    </span>
                  </p>
                </div>
              </Fade>

              <div
                style={{
                  alignItems: "center",
                  textAlign: "center",
                  flex: 1
                }}
              >
                {" "}
                <div className="exploreButton">
                  <Fade right>
                    <Button
                      onClick={() => this.setState({ isShow: false })}
                      style={{
                        textAlign: "center",

                        fontWeight: "bold",

                        fontSize: 20
                      }}
                      variant="light"
                    >
                      <span style={{}}>Click here to see what I do</span>
                    </Button>
                  </Fade>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div style={{ margin: "auto" }}>
            <PageCombiner />
          </div>
        )}{" "}
      </div>
    );
  }
}
