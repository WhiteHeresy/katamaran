import React, { Component } from "react";
import { Map, TileLayer, Polyline } from "react-leaflet";
import PlacedMarkers from "./PlacedMarkers";

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
    const polyList = [];
    mapData.map(markerData =>
      polyList.push([
        parseFloat(markerData.LATITUDE),
        parseFloat(markerData.LONGITUDE)
      ])
    );
    return (
      <div>
        <Map center={center} zoom={initZoom} id={"mapid"}>
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <PlacedMarkers mapData={mapData}></PlacedMarkers>
          {this.props.dispPath ? (
            <Polyline color={"red"} positions={polyList} />
          ) : null}
          ;
        </Map>
      </div>
    );
  }
}

export default MapProper;
