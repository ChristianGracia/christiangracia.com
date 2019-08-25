import React, { Component } from "react";
import { Button } from "react-bootstrap";
import Game from "../Game.js";

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
      <div className="joke" style={{}}>
        <h1 style={{ textAlign: "center", fontWeight: "bold", color: "white" }}>
          Leave a note
        </h1>
        <div
          style={{
            paddingTop: 50,
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <div style={{ padding: 20, textAlign: "center" }}>
            <form action="https://sendpoint.io/id/gWFzbxh9O" method="POST">
              <input
                style={{ padding: 5, paddingLeft: 20, paddingRight: 20 }}
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.onChange}
                placeholder="Name"
              />
              <div style={{ padding: 20 }}></div>
              <input
                style={{ padding: 5, paddingLeft: 20, paddingRight: 20 }}
                type="email"
                name="email"
                value={this.state.email}
                onChange={this.onChange}
                placeholder="Email"
              />
              <div style={{ padding: 20 }}></div>
              <textarea
                style={{
                  padding: 5,
                  paddingLeft: 20,
                  paddingRight: 20,
                  paddingBottom: 100
                }}
                type="text"
                name="body"
                placeholder="Leave a message"
                style={{ padding: 20 }}
                value={this.state.body}
                onChange={this.onChange}
              />
              <div style={{ padding: 20 }}></div>
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
            </form>
            <p
              style={{
                color: "white",
                fontSize: "30",
                fontWeight: "bold",
                padding: 30
              }}
            >
              Mail system powered by my friend Tim Wheeler's{" "}
              <a href="https://sendpoint.io/" style={{ color: "#A5FE00" }}>
                https://sendpoint.io/
              </a>
            </p>
          </div>
        </div>

        <div style={{ paddingBottom: 1000 }}></div>
      </div>
    );
  }
}
