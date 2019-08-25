import React, { Component } from "react";
import { Nav, Navbar } from "react-bootstrap";

export default class Header extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    timeout: false
  };
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        timeout: true
      });
    }, 3000);
  }

  render() {
    return (
      <div style={{}}>
        <Navbar
          style={{ justifyContent: "right", backgroundColor: "transparent" }}
        >
          <Navbar.Brand href="/" style={{ color: "white" }}>
            Home{" "}
            {this.state.timeout ? (
              <i
                class="fas fa-dice-d20 fa-pulse"
                style={{ fontSize: 20, color: "white", marginTop: 4 }}
              ></i>
            ) : (
              <i
                class="fas fa-dice-d20"
                style={{ fontSize: 20, color: "white", marginTop: 4 }}
              ></i>
            )}
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
