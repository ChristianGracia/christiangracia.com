import React from "react";
import "./sites.styles.css";

const Sites = () => {
  return (
    <div className="sites-container">
      <span className="sites-header">Sites I built and host</span>
      <span>
        <a className="site-link" href="https://www.onabeat.com">
          onabeat.com
        </a>
      </span>
      <span>
        <a className="site-link" href="https://www.nflandscaping.com">
          nflandscaping.com
        </a>
      </span>

      <span>On a slow load server</span>
      <span>Takes 2 mins to load will by host soon</span>

      <span>
        <a className="site-link" href="https://www.nflandscaping.com">
          nflandscaping.com
        </a>
      </span>

      <span>
        <a className="site-link" href="https://www.nflandscaping.com">
          nflandscaping.com
        </a>
      </span>
    </div>
  );
};
export default Sites;
