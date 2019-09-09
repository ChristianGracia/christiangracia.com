import React, { Component } from "react";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";
import { Button } from "react-bootstrap";

class Github extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clientId: "46b8392fd79883d79872",
      clientSecret: "dca20f02bb83bb007e422c0a1e96573ad5c107a0",
      count: 5,
      sort: "created asc",
      repos: [],
      showRepo: true
    };
  }

  componentDidMount() {
    const { count, sort, clientId, clientSecret } = this.state;
    const url = `https://api.github.com/users/ChristianGracia/repos?per_page=${count}&sort=${sort}&client_id=${clientId}&client_secret=${clientSecret}`;
    fetch(url)
      .then(res => res.json())
      .then(data => {
        if (this.refs.myRef) {
          this.setState({ repos: data });
        }
        console.log(data);
      })
      .catch(err => console.log(err));
  }
  render() {
    const { repos } = this.state;

    const repoItems = repos.map(repo => (
      <div style={{}}>
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
        <div style={{ padding: 15, paddingTop: 10 }}>
          <hr />
          <h3
            className="mb-4"
            style={{ color: "white", textAlign: "center", fontWeight: "bold" }}
          >
            Latest Github Repos <i class="fab fa-github"></i>
          </h3>
          <p
            style={{ color: "white", textAlign: "center", fontWeight: "bold" }}
          >
            Updated automatically{" "}
            <i
              class="fas fa-circle-notch fa-spin"
              style={{ color: "#00FE00" }}
            ></i>
          </p>
          <div style={{ padding: 26 }}></div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              paddingBottom: 20,
              marginTop: -10
            }}
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
                <span
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    alignContent: "center"
                  }}
                >
                  Show/Hide Github repos
                </span>
                <span style={{ paddingLeft: 10 }}></span>
                <span style={{ padingLeft: 5, color: "black" }}>
                  <i class="fas fa-chevron-down"> </i>
                </span>
              </Button>
            </Fade>
          </div>

          {this.state.showRepo ? (
            <div style={{ justifyContent: "center", alignItems: "center" }}>
              {" "}
              {repoItems}
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}

export default Github;
