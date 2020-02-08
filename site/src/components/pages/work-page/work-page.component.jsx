import React, { Component } from "react";
import Github from "../../github/github-component";
import Fade from "react-reveal/Fade";
import { Button } from "react-bootstrap";
import CurrentProjects from "../../current-projects/current-projects.component";
import TweetsComponent from "../../tweets-component/tweets-component";
import LazyLoad from "react-lazyload";
import Spinner from "../../common/spinner/spinner.component";

export default class Work extends Component {
  state = {
    showGithub: false,
    showTwitter: false
  };

  componentDidMount() {}
  render() {
    return (
      <div style={{}}>
        <div
          className="container"
          style={{
            alignItems: "center",
            textAlign: "center",
            justifyContent: "center"
          }}
        >
          <Fade left>
            <p style={{ fontSize: 70, textAlign: "center", color: "yellow" }}>
              <i className="fas fa-running"></i>
            </p>
          </Fade>

          <Fade right>
            <div>
              <p
                style={{
                  color: "white",
                  textAlign: "center",
                  margin: "auto",
                  maxWidth: 720
                }}
              >
                I like to build websites, applications, and mobile apps. I built
                this site on a virtual ubuntu linux server from scratch and am
                hosting it myself. Currently mostly working with Java, React,
                Angular, and C#.
              </p>
            </div>
          </Fade>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            paddingTop: 40
          }}
        >
          <Fade when={this.state.showGithub}>
            <Button
              className="btn btn-success"
              onClick={() => {
                window.location.href =
                  "https://github.com/ChristianGracia/portfolioSite/";
              }}
            >
              <span
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  alignContent: "center"
                }}
              >
                All the code for this website on GitHub{"  "}
              </span>
              <span style={{ padingLeft: 2, color: "#A6FF00" }}>
                <i class="fas fa-code-branch"> </i>
              </span>
            </Button>
          </Fade>
        </div>

        <div style={{}}>
          <Github />
        </div>
        <LazyLoad height={200} placeholder={<Spinner />} offset={100} once>
          <CurrentProjects />
        </LazyLoad>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            margin: "0 auto"
          }}
        >
          <p style={{ fontSize: 30, color: "white", textAlign: "center" }}>
            Twitter Feed
          </p>

          <Button
            className="btn-danger"
            style={{ maxWidth: 320, margin: "0 auto" }}
            onClick={() =>
              this.setState({ showTwitter: !this.state.showTwitter })
            }
          >
            {this.state.showTwitter ? (
              <span>Hide Twitter </span>
            ) : (
              <span>Show Twitter</span>
            )}
          </Button>

          <div>
            <TweetsComponent showTwitter={this.state.showTwitter} />
          </div>
        </div>
      </div>
    );
  }
}
