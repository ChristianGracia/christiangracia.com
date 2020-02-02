import React, { Component } from "react";
import Jump from "react-reveal/Jump";
import { Card } from "react-bootstrap";
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
        <div className="contact-form-container">
          <Jump>
            <form action="https://sendpoint.io/id/gWFzbxh9O" method="POST">
              <div
                className="row"
                style={{
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <i
                  className="fas fa-mail-bulk"
                  style={{ fontSize: 80, color: "white" }}
                ></i>
              </div>

              <div
                className="row"
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: 20
                }}
              >
                {this.state.email === "" ? null : (
                  <span
                    style={{
                      fontWeight: "bold",
                      color: "#fff",
                      paddingRight: 5
                    }}
                  >
                    Email:{" "}
                  </span>
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
                <div
                  className="row"
                  style={{
                    textAlign: "center",
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: 5
                  }}
                >
                  <span
                    style={{
                      textAlign: "center",
                      fontWeight: "bold",
                      color: "white",
                      fontSize: 15
                    }}
                  >
                    Message
                  </span>
                </div>
              )}
              <div
                className="row"
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: 20
                }}
              >
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
              <div
                className="row"
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: 20
                }}
              >
                <input
                  className=""
                  type="submit"
                  value="send"
                  style={{ backgroundColor: "white", borderRadius: 19 }}
                  onClick={e => {
                    if (body === "" || email === "") {
                      e.preventDefault();
                      window.alert("Please fill out form");
                    }
                  }}
                />
              </div>
            </form>
          </Jump>
          <div style={{ paddingBottom: 600 }}></div>
        </div>
      </div>
    );
  }
}
