import React, { Component } from "react";
import { Button } from "react-bootstrap";

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showButton: true,
      showGame: false
    };
  }
  playGame() {
    this.setState({ showButton: false, showGame: true });
  }

  render() {
    return (
      <div className="joke" style={{}}>
        {this.state.showButton ? (
          <h1 style={{ textAlign: "center", color: "white" }}>Other</h1>
        ) : null}

        {this.state.showButton ? (
          <div
            style={{
              paddingTop: 100,
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <Button>
              <span
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  alignContent: "center"
                }}
                onClick={this.playGame.bind(this)}
              >
                Play Black Jack
              </span>
            </Button>
          </div>
        ) : null}
        {!this.state.showGame ? null : (
          <h1 style={{ textAlign: "center", paddingTop: "30", fontSize: "30" }}>
            Hi
          </h1>
        )}

        <div style={{ paddingBottom: 1000 }}></div>
      </div>
    );
  }
}
