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
              color: "#FFFFFF"
            },
            number: {
              value: 70
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
