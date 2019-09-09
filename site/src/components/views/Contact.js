import React, { Component } from "react";
import Jump from "react-reveal/Jump";

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      body: "",
      name: "",
      email: ""
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { body, name, email } = this.state;
    return (
      <div
        style={{
          display: "flex",
          flex: 1,
          justifyContent: "center",
          flexDirection: "column",

          alignItems: "center"
        }}
      >
        <div classstyle={{}}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <form
              action="https://sendpoint.io/id/gWFzbxh9O"
              method="POST"
              style={{
                position: "relative"
              }}
            >
              <div
                className="row"
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: 50
                }}
              >
                <Jump>
                  <i
                    class="fas fa-mail-bulk"
                    style={{ fontSize: 80, color: "white" }}
                  ></i>
                </Jump>
              </div>

              <div
                className="row"
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: 20
                }}
              >
                {this.state.name == "" ? null : (
                  <span
                    style={{
                      fontWeight: "bold",
                      color: "#fff",
                      paddingRight: 5
                    }}
                  >
                    Name:{" "}
                  </span>
                )}
                <input
                  type="text"
                  name="name"
                  value={this.state.name}
                  onChange={this.onChange}
                  placeholder="Name"
                  style={{
                    background: "transparent",
                    border: "transparent",
                    color: "white"
                  }}
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
                {this.state.email == "" ? null : (
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
                  style={{
                    background: "transparent",
                    border: "transparent",
                    color: "white"
                  }}
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
                <textarea
                  rows="4"
                  cols="40"
                  type="text"
                  name="body"
                  placeholder="Leave a message"
                  style={{
                    textAlign: "left",
                    color: "black"
                  }}
                  value={this.state.body}
                  onChange={this.onChange}
                  style={{}}
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
                  className="btn-dark"
                  type="submit"
                  value="send"
                  onClick={e => {
                    if (body == "" || email == "" || name == "") {
                      e.preventDefault();
                      window.alert("Please fill out form");
                    }
                  }}
                />
              </div>
              <div className="row">
                <p
                  style={{
                    color: "white",
                    fontSize: "30",
                    fontWeight: "bold",
                    position: "relative",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                    marginTop: 20
                  }}
                >
                  Mail system powered by my friend Tim Wheeler's{" "}
                  <a href="https://sendpoint.io/" style={{ color: "#A5FE00" }}>
                    https://sendpoint.io/
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
