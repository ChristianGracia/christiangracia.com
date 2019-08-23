import React, { Component } from "react";
import { ListGroup } from "react-bootstrap";

export default class Education extends Component {
  render() {
    return (
      <div style={{}}>
        <h1 style={{ textAlign: "center" }}>Education</h1>
        <ListGroup style={{}}>
          <ListGroup.Item>
            Career Devs Computer Science University 2018-2019{"\n"}
            Full Stack Web Development{"\n"}
            <a href="http://careerdevs.com/">Careerdevs.com</a>
          </ListGroup.Item>
          <ListGroup.Item>
            Rhode Island College{"\n"}
            BS in General Management
            {"\n2012-2016"}
          </ListGroup.Item>
        </ListGroup>
      </div>
    );
  }
}
