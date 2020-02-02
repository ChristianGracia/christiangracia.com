import React, { Component } from "react";
import Jump from "react-reveal/Jump";
import { Card, Button } from "react-bootstrap";
import "./contact-page.styles.css";
export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      body: "",
      email: ""
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { body, email } = this.state;
    return (
      <div className="contact-page-container">
        <div className="row" style={{}}>
          <i
            className="fas fa-mail-bulk"
            style={{ fontSize: 80, color: "white", marginTop: 30 }}
          ></i>
        </div>

        <div className="contact-form-container">
          <Jump>
            <form action="https://sendpoint.io/id/gWFzbxh9O" method="POST">
              <div className="row form-row-aligner">
                {this.state.email === "" ? null : (
                  <span className="form-label">Email: </span>
                )}
                <input
                  type="email"
                  name="email"
                  value={this.state.email}
                  onChange={this.onChange}
                  placeholder="Email"
                />
              </div>
              {this.state.body === "" ? null : (
                <div className="row form-row">
                  <span className="form-label">Message</span>
                </div>
              )}
              <div className="row form-row">
                <textarea
                  rows="4"
                  cols="30"
                  type="text"
                  name="body"
                  placeholder="Leave a message"
                  value={this.state.body}
                  onChange={this.onChange}
                />
              </div>
              <div className="row form-row">
                <Button
                  variant="danger"
                  type="submit"
                  onClick={e => {
                    if (body === "" || email === "") {
                      e.preventDefault();
                      window.alert("Please fill out form");
                    }
                  }}
                >
                  Send
                </Button>
              </div>
            </form>
          </Jump>
          <div style={{ paddingBottom: 600 }}></div>
        </div>
      </div>
    );
  }
}
