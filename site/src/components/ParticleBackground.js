import React, { Component } from "react";
import Particles from "react-particles-js";

class Particle extends Component {
  render() {
    return (
      <Particles
        className="particle-background"
        params={{
          particles: {
            line_linked: {
              color: "#39F077"
            },
            number: {
              value: 40
            },
            size: {
              value: 3
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
          width: "100%",
          background: `#3993EC`
        }}
      />
    );
  }
}
export default Particle;
