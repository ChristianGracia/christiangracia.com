import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/nav/header.component.jsx";
import Work from "./components/pages/work-page/work-page.component";
import About from "./components/pages/about-page/about-page.component";
import Home from "./components/pages/home-page/home-page.component";
import Contact from "./components/pages/contact-page/contact-page.component";

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

      <div style={{ paddingBottom: 350 }}></div>
    </div>
  );
}

export default App;
