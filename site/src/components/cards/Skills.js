import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import SmallParticle from "../particles/SmallParticle"

export default class Skills extends Component {
  render() {
    return (
      <div style={{ width: "", padding: 10 }}>
        <div style={{ textAlign: "center", fontSize: 70 }}>
          <i class="fas fa-hammer" style={{ color: "#FFFF00" }}></i>
        </div>

        <div
          style={{
            flex: 1,
            flexDirection: "column",
            textAlign: "center",
            paddingTop: 30
          }}
        >
          <Fade left cascade>
            <div style={{ color: "white", margin: "auto", fontSize: 25 }}>
              <p>Web Design</p>
              <p>REST API Design</p>
              <p>Software Design</p>
              <p>iOS/Android Mobile Apps</p>
            </div>
          </Fade>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div style={{ height: 80, width: 200 }}><SmallParticle number={10} /></div></div>
        </div>
        <div style={{paddingBottom: 30}}></div>

      </div>
    );
  }
}
