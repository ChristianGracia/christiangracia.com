import React, { Component } from "react";
import { Nav, Navbar } from "react-bootstrap";

export default class Header extends Component {
  render() {
    return (
      <div style={{}}>
        <Navbar
          style={{ justifyContent: "right", backgroundColor: "transparent" }}
        >
          <Navbar.Brand href="/" style={{ color: "white" }}>
            Home{" "}
            <i
              className="fas fa-radiation fa-spin"
              style={{
                fontSize: 20,
                color: "white",
                marginTop: 4,
                positon: "absolute",
                float: "top"
              }}
            ></i>
          </Navbar.Brand>

          <Nav className="ml-auto">
            <Nav.Link href="/work" style={{ color: "white" }}>
              Projects
            </Nav.Link>
            <Nav.Link href="/about" style={{ color: "white" }}>
              About
            </Nav.Link>
            <Nav.Link href="/contact" style={{ color: "white" }}>
              Contact
            </Nav.Link>
          </Nav>
        </Navbar>
      </div>
    );
  }
}
