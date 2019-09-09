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
              color: "#4C4C4C"
            },
            number: {
              value: 50
            },
            size: {
              value: 5
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
