import React, { Component } from "react";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";

class Github extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clientId: "46b8392fd79883d79872",
      clientSecret: "dca20f02bb83bb007e422c0a1e96573ad5c107a0",
      count: 5,
      sort: "created asc",
      repos: []
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
      <div>
        <Fade top>
          <div
            key={repo.id}
            className="card card-body mb-2"
            style={{
              alignItems: "center",
              justifyContent: "center",
              alignContent: "center"
            }}
          >
            <div className="row">
              <div className="col-md-6">
                <h4 style={{ color: "black" }}>
                  <Link
                    to={`//${repo.html_url.substr(7)}`}
                    className="text-info"
                    target="_blank"
                  >
                    {repo.name}
                  </Link>
                </h4>
                <p>{repo.description}</p>
              </div>

              <div className="col-md-6">
                <span className="badge badge-info mr-1">
                  Stars: {repo.stargazers_count}
                </span>
                <span className="badge badge-secondary mr-1">
                  Watchers: {repo.watchers_count}
                </span>
                <span className="badge badge-success">
                  Forks: {repo.forks_count}
                </span>
              </div>
            </div>
          </div>
        </Fade>
      </div>
    ));

    return (
      <div ref="myRef">
        <div style={{ alignContent: "center", alignItems: "center" }}>
          <hr />
          <h3
            className="mb-4"
            style={{ color: "white", textAlign: "center", fontWeight: "bold" }}
          >
            Latest Github Repos
          </h3>
          <p
            style={{ color: "white", textAlign: "center", fontWeight: "bold" }}
          >
            Updated automatically
          </p>
          {repoItems}
        </div>
      </div>
    );
  }
}

export default Github;
