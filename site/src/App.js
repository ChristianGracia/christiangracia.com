import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="all" style={{ backgroundColor: "#222" }}>
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Christian Gracia</h2>
          </div>
          <p className="App-intro">
            <div>
              <img src="https://pbs.twimg.com/profile_images/997619453113327618/PV-7rdJG_400x400.jpg" />
            </div>
          </p>
          <p
            style={{
              fontSize: 40,
              fontWeight: "bold",
              color: "white",
              height: 100
            }}
          >
            Coming Soon
          </p>
        </div>
      </div>
    );
  }
}

export default App;
