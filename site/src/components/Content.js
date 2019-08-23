import React, { Component, Fragment } from "react";
import Fade from "react-reveal/Fade";
import Skills from "./cards/Skills";
import Education from "./cards/Education";

// const animateList = [1, 2, 3, 5];

export default class Content extends Component {
  render() {
    return (
      <Fragment>
        {/* {animateList.map((item, key) => (
          <div key={key}>
            <Fade top>
              <h1>{`block ${item}`}</h1>
            </Fade>
          </div>
        ))} */}
        <div className="container">
          <div className="row">
            <div className="col-sm">
              <Fade top>
                <Skills />
              </Fade>
            </div>
            <div className="col-sm">
              <Fade top>
                <Education />
              </Fade>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
