import React, { Component } from "react";

export default class Education extends Component {
  render() {
    return (
      <div style={{}}>
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
            <p style={{ color: "#FFFF00" }}>Career Devs </p> <p>2018-2019</p>
            <p>1000+ hours of in-person class</p>
            <a
              href="http://careerdevs.com"
              style={{ color: "#6BDDFF", marginTop: -5 }}
            >
              careerdevs.com
            </a>
          </div>
          <div class="col-sm" style={{ marginTop: 50 }}>
            <p style={{ color: "#FFFF00" }}>Rhode Island College </p>
            <p style={{ color: "white" }}>2012-2016</p>{" "}
            <p>BS in General Management</p>
          </div>
        </div>
      </div>
    );
  }
}
