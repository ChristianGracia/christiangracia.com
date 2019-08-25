import React, { Component } from "react";
import { ListGroup } from "react-bootstrap";

export default class Skills extends Component {
  render() {
    return (
      <div style={{}}>
        <h1 style={{ textAlign: "center", color: "white" }}>Skills</h1>
        <ListGroup style={{}}>
          <ListGroup.Item>
            Languages: JavaScript, C, Python, PHP, HTML/CSS
          </ListGroup.Item>
          <ListGroup.Item>Frameworks: React Native, VueJS</ListGroup.Item>
          <ListGroup.Item>Libraries: ReactJS, Redux</ListGroup.Item>

          <ListGroup.Item>
            MongoDB, MERN Stack apps, REST API, GraphQL
          </ListGroup.Item>
          <ListGroup.Item>
            Agile Development Methodogy, Linux/ubuntu , Server hosting
          </ListGroup.Item>
        </ListGroup>
      </div>
    );
  }
}
