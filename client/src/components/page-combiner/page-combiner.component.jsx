import React, { Component } from "react";
import LazyLoad from "react-lazyload";
import Work from "../pages/work-page/work-page.component";
import About from "../pages/about-page/about-page.component";
import Spinner from "../common/spinner/spinner.component";

export default class PageCombiner extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div>
        <div style={{ padding: 20 }}></div>
        <LazyLoad height={200} once>
          {" "}
          <About />
        </LazyLoad>

        <LazyLoad height={200} placeholder={<Spinner />} offset={100} once>
          {" "}
          <Work />
        </LazyLoad>
      </div>
    );
  }
}
