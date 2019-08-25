import React, { Component } from "react";
import { Nav, Navbar } from "react-bootstrap";

export default class Header extends Component {
  render() {
    return (
      <div style={{}}>
        <Navbar style={{ justifyContent: "right" }} variant="dark" bg="dark">
          <Navbar.Brand href="/">Home</Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link href="/work">Projects</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="#/contact">Contact</Nav.Link>
          </Nav>
        </Navbar>
      </div>
    );
  }
}
