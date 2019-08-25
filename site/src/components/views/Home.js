import React, { Component } from "react";
import Jumbotron from "../Jumbotron";
import Fade from "react-reveal/Fade";
import ContentCall from "../ContentCall";

export default class Home extends Component {
  constructor(props) {
    super(props);
  }
  state = { isShow: true };

  hideBar = () => {
    if (this.state.isShow && window.scrollY < 100) {
      this.setState({ isShow: false });
    }

    console.log(this.state.isShow);
  };

  componentDidMount() {
    window.addEventListener("scroll", this.hideBar);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.hideBar);
  }

  render() {
    return (
      <div>
        {this.state.isShow ? <Jumbotron /> : null}
        {this.state.isShow ? (
          <Fade top>
            <p style={{ color: "white", textAlign: "center", marginTop: -35 }}>
              Site written by me in ReactJs <i className="fab fa-react"></i>
            </p>
          </Fade>
        ) : null}
        {this.state.isShow ? (
          <Fade top>
            <p
              className="scroller"
              style={{ textAlign: "center", color: "white", marginTop: -14 }}
            >
              Scroll down <i className="fas fa-arrow-down"></i>
            </p>
          </Fade>
        ) : null}{" "}
        {this.stateisShow ? null : <ContentCall />}
        <div style={{ padding: 30 }}></div>
      </div>
    );
  }
}
