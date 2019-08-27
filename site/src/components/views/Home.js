import React, { Component } from "react";
import Jumbotron from "../Jumbotron";
import Fade from "react-reveal/Fade";
import ContentCall from "../ContentCall";
import { Button } from "react-bootstrap";

export default class Home extends Component {
  constructor(props) {
    super(props);
  }
  state = { isShow: true };

  hideArrow = () => {
    if (this.state.isShow && window.scrollY < 100) {
      this.setState({ isShow: false });
    }
  };

  componentDidMount() {
    window.addEventListener("scroll", this.hideArrow);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.hideArrow);
  }

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
          <div style={{ flex: 1, paddingTop: 20 }}>
            <Jumbotron />

            <div
              style={{
                flex: 1,
                margin: 0
              }}
            >
              <Fade top>
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
              </Fade>

              <div
                style={{
                  alignItems: "center",
                  textAlign: "center",
                  flex: 1
                }}
              >
                <Fade top>
                  <Button
                    onClick={() => this.setState({ isShow: false })}
                    style={{
                      textAlign: "center",
                      color: "white",
                      fontWeight: "bold",
                      backgroundColor: "transparent",
                      border: "none",
                      fontSize: 20
                    }}
                    variant="dark"
                  >
                    Scroll down or click
                    <span style={{ paddingLeft: 10 }}>
                      <i
                        className="fas fa-arrow-down"
                        style={{ color: "#00FE00" }}
                      ></i>{" "}
                    </span>
                  </Button>
                </Fade>
              </div>
            </div>
          </div>
        ) : (
          <div style={{ paddingTop: 50 }}>
            <ContentCall />
          </div>
        )}
      </div>
    );
  }
}
