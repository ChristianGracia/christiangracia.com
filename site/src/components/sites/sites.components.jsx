import React from "react";
import "./sites.styles.css";
import Fade from "react-reveal/Fade";

const Sites = () => {
  return (
    <Fade left cascade>
      <div className="sites-container">
        <span className="sites-header">Sites I built and host</span>
        <span className="site-div">
          <a
            className="site-link btn btn-danger"
            href="https://www.onabeat.com"
          >
            onabeat.com
          </a>
        </span>
        <span className="site-div" style={{ marginTop: 30, marginBottom: 30 }}>
          <a
            className="site-link btn btn-danger"
            href="https://www.nflandscaping.com"
          >
            nflandscaping.com
          </a>
        </span>
        {/* <span className="sites-detail">
          This site will be up soon. On a slow load server for now so it takes a
          min or two to load until we buy host
        </span>
        <span className="site-div">
          <a className="site-link" href="https://crane-site.herokuapp.com/">
            crane-site.herokuapp.com/
          </a>
        </span>
        <span className="site-div">
          <a className="site-link" href="http://www.christiangracia.com">
            insurance site coming soon(weeks)
          </a>
        </span> */}
        <span
          style={{
            fontWeight: "bold",
            color: "rgb(0,255,0)",
            fontSize: 23,
            marginTop: 10
          }}
        >
          All sites are clients
        </span>
      </div>
    </Fade>
  );
};
export default Sites;
