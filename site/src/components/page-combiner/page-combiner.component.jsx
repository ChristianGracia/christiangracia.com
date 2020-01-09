import React, { Component, Suspense } from "react";
import About from "../pages/About";



export default class PageCombiner extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    const Work = React.lazy(() => import("../pages/Work"));
    return (
      <div>
        <div style={{ padding: 20 }}></div>

        <About />
        <Suspense fallback={<div><p>Lazy Loading....</p></div>}>
          <Work />
        </Suspense>
      </div>
    );
  }
}
