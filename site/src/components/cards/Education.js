import React, { Component } from "react";

export default class Education extends Component {
  render() {
    return (
      <div style={{}}>
        <h1
          style={{
            textAlign: "center",
            color: "white",

            fontWeight: "bold",
            fontSize: 35
          }}
        >
          Education <i class="fas fa-graduation-cap"></i>
        </h1>

        <div
          class="col-sm"
          style={{
            textAlign: "center",
            color: "white",
            fontWeight: "bold",
            fontSize: 30
          }}
        >
          {" "}
          <div style={{ marginTop: 50 }}>
            <p style={{ color: "#FFFF00" }}>Career Devs </p>{" "}
            <p>Computer Science University 2018-2019</p>
            <p>1000+ hours of in-person class </p>
          </div>
          <div style={{ marginTop: 50 }}>
            <p style={{ color: "#FFFF00" }}>
              {" "}
              Rhode Island College{" "}
              <span style={{ color: "white" }}>2012-2016</span>{" "}
            </p>
            <p>BS in General Management</p>
          </div>
        </div>
      </div>
    );
  }
}
