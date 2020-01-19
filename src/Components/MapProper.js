import React, { Component } from "react";
import {
  Map,
  withLeaflet,
  TileLayer,
  ZoomControl,
  Polyline,
  Polygon
} from "react-leaflet";
import PlacedMarkers from "./PlacedMarkers";
import MeasureControlDefault from "react-leaflet-measure";
import { BoxZoomControl } from "react-leaflet-box-zoom";
class MapProper extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mapData: this.props.mapData,
      center: this.props.initCenter,
      initZoom: this.props.initZoom,
      measuredArea: []
    };
  }

  handleMeasureFinish = result => {
    this.setState({
      measuredArea: result.points
    });
  };

  render() {
    const measureOptions = {
      position: "topright",
      primaryLengthUnit: "meters",
      secondaryLengthUnit: "kilometers",
      primaryAreaUnit: "sqmeters",
      secondaryAreaUnit: "acres",
      activeColor: "#db4a29",
      completedColor: "#9b2d14"
    };
    const MeasureControl = withLeaflet(MeasureControlDefault);
    const { center, mapData, initZoom, measuredArea } = this.state;
    const { area, dispPath, dispArea, dispIDW, dispDrawnArea } = this.props;
    const path = [];
    mapData.map(markerData =>
      path.push([
        parseFloat(markerData.LATITUDE),
        parseFloat(markerData.LONGITUDE)
      ])
    );
    console.log(this.state.measuredArea);
    return (
      <div style={{ width: "100%", height: "100%" }}>
        <Map center={center} zoom={initZoom} id={"mapid"} ZoomControl={true}>
          {dispIDW ? null : null}
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          <BoxZoomControl position="topright" />
          <PlacedMarkers mapData={mapData}></PlacedMarkers>
          {dispPath ? (
            <Polyline
              color={"red"}
              opacity={0.5}
              smoothFactor={2.0}
              positions={path}
            />
          ) : null}
          {dispArea ? (
            <Polygon color="purple" fillOpacity={0.2} positions={area} />
          ) : null}
          <MeasureControl
            {...measureOptions}
            onMeasurefinish={this.handleMeasureFinish}
          />
          {dispDrawnArea ? (
            <Polygon
              color="purple"
              fillOpacity={0.2}
              positions={measuredArea}
            />
          ) : null}
        </Map>
      </div>
    );
  }
}

export default MapProper;
