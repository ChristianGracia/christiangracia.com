import React, { Component } from "react";
import SocialMediaLinks from "../common/social-links/social-links.component";
import "./headline.styles.css";
import LazyLoad from 'react-lazyload';
import Spinner from "../common/spinner/spinner.component";

export default class Jumbotron extends Component {
  state = {
    timeout: false,
    icon: ""
  };

  render() {
    return (
      <div style={{ flex: 1, width: "auto" }}>
        <div
          className="jumbotron jumbotron-fluid jumbo"
          style={{
            alignItems: "center",
            justifyContent: "center",
            alignContent: "center",
            backgroundColor: "transparent"
          }}
        >
          <div>
            <div className="container" style={{ alignItems: "center" }}>
              <div className="row">
                <div className="col-sm">
                  <div
                    style={{
                      alignItems: "center",
                      justifyContent: "center",
                      alignContent: "center"
                    }}
                  >
                    <h1
                      style={{
                        fontWeight: "bold",
                        textAlign: "center",

                        color: "#FEFF01"
                      }}
                    >
                      Christian Gracia
                    </h1>
                  </div>
                  <p
                    className="lead"
                    style={{
                      fontWeight: "bold",
                      textAlign: "center",
                      color: "white"
                    }}
                  >
                    Software Engineer <i className="fas fa-laptop-code"></i>
                    {"  "}
                    {"  "}
                    Providence, RI
                  </p>
                  <p
                    style={{
                      fontStyle: "italic",
                      fontWeight: "bold",
                      color: "#FEFF01",
                      textAlign: "center"
                    }}
                  >
                    React, Java, React Native, C#, ++
                  </p>
                  <p
                    style={{
                      fontWeight: "bold",
                      color: "white",
                      textAlign: "center",
                      fontSize: 15
                    }}
                  >
                    Email{" "}
                    <span style={{ color: "#FEFF01" }}>
                      <i className="fas fa-envelope"></i>
                    </span>{" "}
                    <span
                      className="email-home"
                      style={{
                        color: "#fff",
                        fontWeight: "bold"
                      }}
                    >
                      christianmgracia@gmail.com
                    </span>
                  </p>

                  <div style={{ padding: 5 }}>

                    <LazyLoad height={200} placeholder={<Spinner />} once>
                      <SocialMediaLinks />
                    </LazyLoad>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
