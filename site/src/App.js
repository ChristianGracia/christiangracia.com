import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div style={{ marginTop: -15, paddingLeft: 10, paddingRight: 10 }}>
          <h1>Christian Gracia</h1>

          <img src={logo} className="App-logo" alt="logo" />
          <p>Skills: JavaScript, React, React Native, C, Python</p>
          <p>Providence, RI</p>
          <p>Email: christianmgracia@gmail.com</p>
          <a
            style={{ color: "white" }}
            href="http://www.github.com/christiangracia"
          >
            Click to check out my GitHub
          </a>
          <p style={{ fontSize: 40, fontWeight: "bold" }}>
            Writing this site now :)
          </p>
        </div>
      </header>
    </div>
  );
}

export default App;
