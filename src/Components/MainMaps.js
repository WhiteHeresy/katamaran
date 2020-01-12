import React from "react";
import Map from "pigeon-maps";
import Marker from "pigeon-marker";
import Overlay from "pigeon-overlay";
import Sidebar from "./Sidebar.js";
import MapProper from "./MapProper.js";

function MainMaps() {
  return (
    <div className="wholeMain">
      <Sidebar></Sidebar>
      <MapProper></MapProper>
    </div>
  );
}

export default MainMaps;
