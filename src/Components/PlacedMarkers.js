import React, { Component } from "react";
import { render } from "@testing-library/react";
import { Marker, Popup, Polyline } from "react-leaflet";

class PlacedMarkers extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mapData: this.props.mapData
    };
  }

  render() {
    const { mapData } = this.state;
    const positionList = [];
    mapData.map(markerData =>
      positionList.push([
        parseFloat(markerData.LATITUDE),
        parseFloat(markerData.LONGITUDE)
      ])
    );
    const markers = mapData.map(markerData => (
      <Marker
        key={markerData.ID}
        position={[
          parseFloat(markerData.LATITUDE),
          parseFloat(markerData.LONGITUDE)
        ]}
      >
        <Popup key={markerData.ID}>
          ID = {markerData.ID}
          <br></br>
          LAT = {markerData.LATITUDE}
          <br></br>
          LNG = {markerData.LONGITUDE}
        </Popup>
      </Marker>
    ));

    return markers;
  }
}
export default PlacedMarkers;
