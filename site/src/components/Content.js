import React, { Component, Fragment } from "react";
import Fade from "react-reveal/Fade";
import Skills from "./cards/Skills";

const animateList = [1, 2, 3, 5];

export default class Content extends Component {
  render() {
    return (
      <Fragment>
        {animateList.map((item, key) => (
          <div key={key}>
            <Fade top>
              <h1>{`block ${item}`}</h1>
            </Fade>
          </div>
        ))}
        <Fade top>
          <Skills />
        </Fade>
      </Fragment>
    );
  }
}
