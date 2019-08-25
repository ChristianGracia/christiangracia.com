import React, { Component, Fragment } from "react";
import Fade from "react-reveal/Fade";
import Skills from "./cards/Skills";
import Education from "./cards/Education";

export default class Content extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  }

  render() {
    return (
      <Fragment>
        <div style={{ padding: 20 }}></div>
        <div className="container">
          <div className="">
            <div className="col-sm">
              <Fade top>
                <Skills />
              </Fade>
            </div>
            <div style={{ padding: 10 }}></div>
            <div className="col-sm">
              <Fade top>
                <Education />
              </Fade>
            </div>
          </div>
        </div>
        <div style={{ padding: 50 }}></div>
      </Fragment>
    );
  }
}
