import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Work from "./components/views/Work";
import About from "./components/views/About";
import Home from "./components/views/Home";
import Contact from "./components/views/Contact";

import "./App.css";

function App() {
  return (
    <div
      className="colorful"
      style={{
        flex: 1,
        width: "100%",
        height: "100%"
      }}
    >
      <Header />

      <Router>
        <Route exact path="/" component={Home} />
      </Router>

      <Router>
        <Route exact path="/work" component={Work} />
      </Router>
      <Router>
        <Route exact path="/about" component={About} />
      </Router>
      <Router>
        <Route exact path="/contact" component={Contact} />
      </Router>
      <Router>
        <Route exact path="/home" component={Work} />
      </Router>

      <div style={{ paddingBottom: 200 }}></div>
    </div>
  );
}

export default App;
