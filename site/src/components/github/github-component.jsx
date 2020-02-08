import React, { Component } from "react";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";
import { Button } from "react-bootstrap";
import "./github.styles.css";

class Github extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 5,
      sort: "created asc",
      repos: [],
      showRepo: true
    };
  }

  async componentDidMount() {
    const { count, sort } = this.state;
    const clientId = require("../../config/keys").clientId;
    const clientSecret = require("../../config/keys").clientSecret;
    const url = `https://api.github.com/users/ChristianGracia/repos?per_page=${count}&sort=${sort}&client_id=${clientId}&client_secret=${clientSecret}`;

    const github = await fetch(url, {
      accept: "application/vnd.github.v3+json"
    });
    const repos = await github.json();
    this.setState({ repos: repos });
  }
  render() {
    const { repos } = this.state;

    const repoItems = repos.map(repo => (
      <div key={repo.id} style={{}}>
        <Fade top>
          <div
            key={repo.id}
            className="card card-body mb-2 bg-light ml-auto mr-auto pr-3"
            style={{ margin: 0, paddingRight: 0, width: "88vw" }}
          >
            <div className="row">
              <div className="col-lg-6" style={{}}>
                <h4 style={{ color: "white" }}>
                  <Link
                    to={`//${repo.html_url.substr(7)}`}
                    className="text-info"
                    target="_blank"
                  >
                    <p style={{ color: "#3993EC" }}>{repo.name}</p>
                  </Link>
                </h4>
                <p>{repo.description}</p>
              </div>

              <div className="col-md-6" style={{}}>
                <span className="badge badge-info mr-1">
                  <i class="fas fa-star"></i> Stars: {repo.stargazers_count}
                </span>
                <span className="badge badge-secondary mr-1">
                  <i class="fas fa-eye"></i> Watchers: {repo.watchers_count}
                </span>
                <span className="badge badge-success">
                  <i class="fas fa-code-branch"></i> Forks: {repo.forks_count}
                </span>
              </div>
            </div>
          </div>
        </Fade>
        <div style={{ padding: 30 }}></div>
      </div>
    ));

    return (
      <div ref="myRef">
        <div style={{ padding: 15, marginTop: 20 }}>
          <div>
            <h3 className="mb-4 page-text">
              Latest Github Repos <i class="fab fa-github"></i>
            </h3>
            <p
              className="page-text"
              style={{
                position: "relative"
              }}
            >
              Updated automatically{" "}
              <i
                class="fas fa-circle-notch fa-spin"
                style={{ color: "#00FE00" }}
              ></i>
            </p>
          </div>
          <div style={{ padding: 26 }}></div>

          <div
            style={{
              display: "flex",
              paddingBottom: 20,
              marginTop: -10
            }}
            className="item-aligner"
          >
            <Fade bottom>
              <Button
                className="btn-danger"
                onClick={() => {
                  if (this.state.showRepo) {
                    this.setState({ showRepo: false });
                  } else {
                    this.setState({ showRepo: true });
                  }
                }}
              >
                <span className="item-aligner">Show/Hide Github repos</span>
                <span style={{ paddingLeft: 10 }}></span>
                <span style={{ padingLeft: 5, color: "black" }}>
                  <i class="fas fa-chevron-down"> </i>
                </span>
              </Button>
            </Fade>
          </div>

          {this.state.showRepo ? (
            <div className="item-aligner">{repoItems}</div>
          ) : null}
        </div>
      </div>
    );
  }
}

export default Github;
