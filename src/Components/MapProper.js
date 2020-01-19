import React, { Component } from "react";
import { Map, TileLayer, Polyline } from "react-leaflet";
import PlacedMarkers from "./PlacedMarkers";
import { Polygon } from "leaflet";

class MapProper extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mapData: this.props.mapData,
      center: this.props.initCenter,
      initZoom: this.props.initZoom
    };
  }

  render() {
    const { center, mapData, initZoom } = this.state;
    const area = this.props.area;
    const path = [];
    const TESTPOLYGON = [
      [51.515, -0.09],
      [51.52, -0.1],
      [51.52, -0.12]
    ];
    mapData.map(markerData =>
      path.push([
        parseFloat(markerData.LATITUDE),
        parseFloat(markerData.LONGITUDE)
      ])
    );

    console.log(path);
    console.log(area);
    return (
      <div style={{ width: "100%", height: "100%" }}>
        <Map center={center} zoom={initZoom} id={"mapid"}>
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <PlacedMarkers mapData={mapData}></PlacedMarkers>
          {this.props.dispPath ? (
            <Polyline color={"red"} opacity={0.5} positions={path} />
          ) : null}
          {this.props.dispArea ? (
            <Polygon color="purple" positions={area} />
          ) : null}
        </Map>
      </div>
    );
  }
}

export default MapProper;
