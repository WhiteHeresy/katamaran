import React, { Component } from "react";
import Sidebar from "./Sidebar.js";
import MapProper from "./MapProper.js";
import sampleData from "../sample_data/data.json";

class MainMaps extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: sampleData.sampleData,
      filData: {},
      mapWidth: 0.8 * window.innerWidth,
      mapHeight: 0.8 * window.innerHeight,
      initCenter: [50.288052, 18.676916]
    };
  }

  render() {
    return (
      <div className="wholeMain">
        <Sidebar></Sidebar>
        <MapProper></MapProper>
      </div>
    );
  }
}

export default MainMaps;
