import React, { Component } from "react";
import { Marker, Popup, Circle } from "react-leaflet";

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
    const markers = mapData.map((markerData, index) => (
      <Marker
        key={markerData.ID}
        position={[
          parseFloat(markerData.LATITUDE),
          parseFloat(markerData.LONGITUDE)
        ]}
      >
        {index === 0 ? (
          <Circle
            center={[
              parseFloat(mapData[0].LATITUDE),
              parseFloat(mapData[0].LONGITUDE)
            ]}
            color="red"
            radius={1}
          >
            <Popup>Starting point here!</Popup>
          </Circle>
        ) : null}
        <Popup key={markerData.ID}>
          ID = {markerData.ID}
          <br></br>
          LAT = {markerData.LATITUDE}
          <br></br>
          LNG = {markerData.LONGITUDE}
          <br></br>
          PRIO = {markerData.PRIORITY}
          <br></br>
          HEADING = {markerData.HEADING}
          <br></br>
          ENG_LEFT = {markerData.ENG_LEFT}
          <br></br>
          ENG_RIGHT = {markerData.ENG_RIGHT}
        </Popup>
      </Marker>
    ));

    return markers;
  }
}
export default PlacedMarkers;
