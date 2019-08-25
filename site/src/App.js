import React from "react";
import Jumbotron from "./components/Jumbotron";
import Content from "./components/Content";
import Header from "./components/Header";

import "./App.css";

function App() {
  return (
    <div className="App" style={{ backgroundColor: "#343A40" }}>
      <Header />
      <Jumbotron />

      <Content />

      <p>writing this site when I have time</p>
      <p>@lil_cuffy</p>
    </div>
  );
}

export default App;
