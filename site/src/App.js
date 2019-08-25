import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Jumbotron from "./components/Jumbotron";
import Content from "./components/Content";
import Header from "./components/Header";
import Work from "./components/views/Work";

import "./App.css";

function App() {
  return (
    <div className="App" style={{ backgroundColor: "#343A40" }}>
      <Header />
      <Jumbotron />
      <Content />
      <Router>
        <Route exact path="/work" component={Work} />
      </Router>
      <Router>
        <Route exact path="/about" component={Work} />
      </Router>
      <Router>
        <Route exact path="/contact" component={Work} />
      </Router>
      <Router>
        <Route exact path="/home" component={Work} />
      </Router>

      <p>writing this site when I have time</p>
      <p>@lil_cuffy</p>
    </div>
  );
}

export default App;
