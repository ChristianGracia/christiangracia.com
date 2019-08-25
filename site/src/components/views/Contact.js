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
    console.log(e.target.value);
  }

  render() {
    return (
      <div className="joke" style={{}}>
        <h1 style={{ textAlign: "center" }}>Leave a note</h1>
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
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.onChange}
                placeholder="Name"
              />
              <div style={{ padding: 20 }}></div>
              <input
                type="email"
                name="email"
                value={this.state.email}
                onChange={this.onChange}
                placeholder="Email"
              />
              <div style={{ padding: 20 }}></div>
              <input
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
                // onClick={e => {
                //   e.preventDefault();
                //   alert("Please fill out the form!");
                // }}
              />
            </form>
          </div>
        </div>

        <div style={{ paddingBottom: 1000 }}></div>
      </div>
    );
  }
}
