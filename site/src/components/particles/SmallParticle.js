import React, { Component } from "react";
import Particle from "react-particles-js";

export default class SmallParticle extends Component {
  render() {
    return (
      <div>
        <Particle
          params={{
            particles: {
              line_linked: {
                shadow: {
                  enable: true,
                  color: "#3CA9D1",
                  blur: 5
                }
              }
            },
            interactivity: {
              events: {
                onhover: {
                  enable: true,
                  mode: "repulse"
                }
              }
            }
          }}
          style={{
            background: `#3993EC`
          }}
        />
      </div>
    );
  }
}
