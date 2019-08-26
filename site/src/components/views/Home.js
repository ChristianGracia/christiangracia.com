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
      <div>
        <div style={{ padding: 20 }}></div>
        {this.state.isShow ? (
          <div>
            <Jumbotron />

            <div style={{ padding: 50 }}></div>
            <div
              style={{
                position: "fixed",
                bottom: 20,
                left: 0,
                right: 0
              }}
            >
              <Fade top>
                <p
                  style={{
                    color: "#FFFF00",
                    textAlign: "center",
                    fontSize: 20,
                    fontWeight: "bold"
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
                  textAlign: "center"
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
                    <span style={{ padding: 10 }}>
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
          <div style={{paddingBottom: 50}}></div>
          <ContentCall />
        )}

        <div style={{ paddingBottom: 220 }}></div>
        <div style={{ marginTop: 200 }}></div>
      </div>
    );
  }
}
