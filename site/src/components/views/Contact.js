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
        <div classstyle={{ width: "70vw" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Jump>
              <form
                action="https://sendpoint.io/id/gWFzbxh9O"
                method="POST"
                style={{}}
              >
                <div
                  className="row"
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: 50
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
                    marginTop: 30
                  }}
                >
                  {this.state.name === "" ? null : (
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
                    style={
                      {
                        // background: "transparent",
                        // border: "white",
                        // color: "white"
                      }
                    }
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
                    style={
                      {
                        // background: "transparent",
                        // border: "transparent",
                        // color: "white"
                      }
                    }
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
                    style={
                      {
                        // background: "transparent",
                        // border: "transparent",
                        // color: "white"
                      }
                    }
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
                      if (body === "" || email === "" || name === "") {
                        e.preventDefault();
                        window.alert("Please fill out form");
                      }
                    }}
                  />
                </div>
              </form>
            </Jump>
          </div>
        </div>
      </div>
    );
  }
}
