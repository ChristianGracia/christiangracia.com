import React, { Component } from "react";
import { Nav, Navbar, FormControl } from "react-bootstrap";

export default class Header extends Component {
  render() {
    return (
      <div style={{}}>
        <Navbar style={{ justifyContent: "right" }} variant="dark" bg="dark">
          <Navbar.Brand href="#home">Home</Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link href="#home">Work</Nav.Link>
            <Nav.Link href="#features">About</Nav.Link>
            <Nav.Link href="#pricing">Contact</Nav.Link>
          </Nav>
        </Navbar>
      </div>
    );
  }
}
