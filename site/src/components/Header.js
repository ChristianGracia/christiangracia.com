import React, { Component } from "react";
import { Nav, Navbar } from "react-bootstrap";

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      icon: "",
      timeout: false
    };
  }
  state = {
    timeout: false
  };

  componentDidMount() {
    const icons = [
      "fas fa-fan fa-pulse",
      "fab fa-ello fa-pulse",
      "fas fa-cookie fa-pulse",
      "fab fa-cloudsmith fa-pulse",
      "fab fa-codepen fa-pulse",
      "fab fa-codepen fa-pulse",
      "fab fa-codepen fa-pulse",
      "fab fa-codepen fa-pulse",
      "fab fa-codepen fa-pulse",
      "fab fa-codepen fa-pulse",
      "fab fa-codepen fa-pulse",
      "fab fa-codepen fa-pulse",
      "fab fa-codepen fa-pulse",
      "fab fa-codepen fa-pulse",
      "fas fa-clock fa-pulse",
      "fas fa-clock fa-pulse",
      "fas fa-clock fa-pulse",
      "far fa-clock fa-pulse",
      "far fa-clock fa-pulse",
      "far fa-clock fa-pulse",
      "far fa-clock fa-pulse",
      "fas fa-clock fa-pulse",
      "fas fa-clock fa-pulse",
      "fas fa-clock fa-pulse",
      "far fa-clock fa-pulse",
      "far fa-clock fa-pulse",
      "far fa-clock fa-pulse",
      "far fa-clock fa-pulse",
      "fas fa-circle-notch fa-pulse",
      "fas fa-circle-notch fa-pulse",
      "fas fa-circle-notch fa-pulse",
      "fas fa-atom fa-pulse",
      "fas fa-atom fa-pulse",
      "fas fa-atom fa-pulse",
      "fas fa-atom fa-pulse",
      "fas fa-atom fa-pulse",
      "fas fa-dice-d20 fa-pulse",
      "fas fa-adjust fa-pulse",
      "fas fa-star fa-pulse",
      "fas fa-adjust fa-pulse",
      "fas fa-star fa-pulse",
      "fas fa-adjust fa-pulse",
      "fas fa-star fa-pulse",
      "fas fa-compress fa-pulse",
      "fas fa-arrows-alt fa-pulse",
      "fas fa-arrows-alt fa-pulse",
      "fas fa-arrows-alt fa-pulse",
      "fas fa-arrows-alt fa-pulse",
      "fas fa-arrows-alt fa-pulse",
      "fas fa-arrows-alt fa-pulse",
      "fas fa-asterisk fa-pulse",
      "fas fa-bacon fa-pulse",
      "fas fa-egg fa-pulse",
      "fas fa-ellipsis-v fa-pulse",
      "fab fa-dyalog fa-pulse",
      "fas fa-ellipsis-h fa-pulse",
      "fas fa-fighter-jet fa-pulse",
      "fas fa-fighter-jet fa-pulse",
      "fas fa-fighter-jet fa-pulse",
      "fas fa-eye fa-pulse",
      "far fa-eye fa-pulse",
      "fas fa-eye fa-pulse",
      "far fa-eye fa-pulse",
      "fas fa-external-link-alt fa-pulse",
      "fas fa-exclamation-triangle fa-pulse",
      "fas fa-fire-alt fa-pulse",
      "fas fa-fire fa-pulse",
      "fas fa-fire-alt fa-pulse",
      "fas fa-fire fa-pulse",
      "fas fa-ghost fa-pulse",
      "far fa-gem fa-pulse",
      "far fa-gem fa-pulse",
      "fas fa-globe-africa fa-pulse",
      "fas fa-globe-americas fa-pulse",
      "fas fa-globe-americas fa-pulse",
      "fas fa-globe-americas fa-pulse",
      "fas fa-globe-americas fa-pulse",
      "fas fa-globe-americas fa-pulse",
      "fas fa-globe-europe fa-pulse",
      "fas fa-globe-asia fa-pulse",

      "fab fa-hotjar fa-pulse",
      "fab fa-hubspot fa-pulse",
      "fab fa-hubspot fa-pilse",
      "fas fa-haykal fa-spin",
      "fas fa-fan fa-pulse",
      "fab fa-ello fa-pulse",
      "fas fa-cookie fa-pulse",
      "fab fa-cloudsmith fa-pulse",
      "fab fa-codepen fa-pulse",
      "fas fa-clock fa-pulse",
      "far fa-clock fa-pulse",
      "fas fa-circle-notch fa-pulse",
      "fas fa-atom fa-pulse",
      "fas fa-dice-d20 fa-pulse",
      "fas fa-adjust fa-pulse",
      "fas fa-star fa-pulse",
      "fas fa-compress fa-pulse",
      "fas fa-arrows-alt fa-pulse",
      "fas fa-asterisk fa-pulse",
      "fas fa-bacon fa-pulse",
      "fas fa-bacon fa-pulse",
      "fas fa-bacon fa-pulse",
      "fas fa-bacon fa-pulse",
      "fas fa-bacon fa-pulse",
      "fas fa-bacon fa-pulse",
      "fas fa-bacon fa-pulse",
      "fas fa-bacon fa-pulse",
      "fas fa-bacon fa-pulse",
      "fas fa-bacon fa-pulse",
      "fas fa-bacon fa-pulse",
      "fas fa-bacon fa-pulse",
      "fas fa-bacon fa-pulse",
      "fas fa-bacon fa-pulse"
    ];
    const iconLength = icons.length;
    setTimeout(() => {
      this.setState({
        timeout: !this.state.timeout,
        icon: icons[Math.floor(Math.random() * iconLength)]
      });
    }, 3000);

    setInterval(() => {
      this.setState({
        icon: icons[Math.floor(Math.random() * iconLength)]
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
              <span style={{}}>
                <i
                  className={this.state.icon}
                  style={{ fontSize: 20, marginTop: 4, color: "#FEFF01" }}
                ></i>
              </span>
            ) : (
              <i
                className="fas fa-dice-d20"
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
