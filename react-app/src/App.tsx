import React from 'react';
import Banner from "./components/banner";
import LeftMenu from "./components/left-menu";
import RightContainer from "./components/right-container";

import "./resources/css/normalize.css"
import "./resources/css/skeleton.css"
import "./resources/css/index.css"

function App() {
  return (
    <div id="main-container">
      <div className="container">
        <Banner />

        <section id="bottom-section" className="row">
          <div className="four columns"><LeftMenu /></div>
          <div className="eight columns"><RightContainer /></div>
        </section>
      </div>
    </div>
  );
}

export default App;
