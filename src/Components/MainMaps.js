import React from "react";
import Map from "pigeon-maps";
import Marker from "pigeon-marker";
import Overlay from "pigeon-overlay";
import Sidebar from "./Sidebar.js";
import MapProper from "./MapProper.js";

function MainMaps() {
  const mapWidth = 0.8 * window.innerWidth;
  const mapHeight = 0.8 * window.innerHeight;
  const initCenter = [50.2944923, 18.6713802];

  return (
    <div className="wholeMain">
      <Sidebar></Sidebar>
      <MapProper
        mapWidth={mapWidth}
        mapHeight={mapHeight}
        center={initCenter}
        zoom={10}
      ></MapProper>
    </div>
  );
}

export default MainMaps;
