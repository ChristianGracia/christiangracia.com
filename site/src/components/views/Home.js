import React, { Component } from "react";
import Jumbotron from "../Jumbotron";
import Fade from "react-reveal/Fade";
import Content from "../Content";

export default class Home extends Component {
  constructor(props) {
    super(props);
  }
  state = { isShow: true };

  hideBar = () => {
    if (this.state.isShow && window.scrollY < 100) {
      this.setState({ isShow: false });
      window.scrollTo(0, 0);
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
            <p style={{ color: "white", textAlign: "center" }}>
              Site written by me in ReactJs <i className="fab fa-react"></i>
            </p>
          </Fade>
        ) : null}

        {this.state.isShow ? (
          <Fade top>
            <p
              className="scroller"
              style={{ textAlign: "center", color: "white", paddingTop: 40 }}
            >
              Scroll down <i className="fas fa-arrow-down"></i>
            </p>
          </Fade>
        ) : null}
        <div style={{ padding: 30 }}></div>
        <Fade top>
          <Content />
        </Fade>
      </div>
    );
  }
}
