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
      initCenter: [50.284008, 18.70069]
    };
  }

  render() {
    const { mapWidth, mapHeight, initCenter, data } = this.state;
    return (
      <div className="wholeMain">
        <Sidebar></Sidebar>
        <MapProper
          mapWidth={mapWidth}
          mapHeight={mapHeight}
          center={initCenter}
          zoom={17}
          mapData={[data[1], data[2000]]} //mapData forwarded is an array of objects
        ></MapProper>
      </div>
    );
  }
}

export default MainMaps;
