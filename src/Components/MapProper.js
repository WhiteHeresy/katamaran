import React, { Component } from "react";
import Map from "pigeon-maps";
import Marker from "pigeon-marker";
import Overlay from "pigeon-overlay";
import PlacedMarkers from "./PlacedMarkers";

const lng2tile = (lon, zoom) => {
  return ((lon + 180) / 360) * Math.pow(2, zoom);
};
const lat2tile = (lat, zoom) => {
  return (
    ((1 -
      Math.log(
        Math.tan((lat * Math.PI) / 180) + 1 / Math.cos((lat * Math.PI) / 180)
      ) /
        Math.PI) /
      2) *
    Math.pow(2, zoom)
  );
};

class MapProper extends Component {
  constructor(props) {
    super(props);

    this.state = {
      center: this.props.center,
      zoom: this.props.zoom,
      provider: "osm",
      metaWheelZoom: false,
      twoFingerDrag: true,
      animate: true,
      animating: false,
      zoomSnap: true,
      mouseEvents: true,
      touchEvents: true,
      minZoom: 1,
      maxZoom: 20,
      mapData: this.props.mapData
    };
  }

  zoomIn = () => {
    this.setState({
      zoom: Math.min(this.state.zoom + 1, 18)
    });
  };

  zoomOut = () => {
    this.setState({
      zoom: Math.max(this.state.zoom - 1, 1)
    });
  };

  handleBoundsChange = ({ center, zoom, bounds, initial }) => {
    this.setState({ center, zoom });
  };

  handleClick = ({ event, latLng, pixel }) => {};

  handleMarkerClick = ({ event, payload, anchor }) => {
    console.log(`Marker #${payload} clicked at: `, anchor);
  };

  handleAnimationStart = () => {
    this.setState({ animating: true });
  };

  handleAnimationStop = () => {
    this.setState({ animating: false });
  };

  btnStyle = {
    color: "#444",
    cursor: "pointer",
    border: "1px solid #aaa",
    borderRadius: "0.3em",
    backgroundColor: "#fff",
    transition: "background-color 0.2s ease-out",
    backgroundmage: "linearGradient(#ffffff, #e5e5e5)",
    margin: "0.2em"
  };

  render() {
    const {
      zoom,
      animate,
      metaWheelZoom,
      twoFingerDrag,
      zoomSnap,
      mouseEvents,
      touchEvents,
      minZoom,
      maxZoom,
      mapData
    } = this.state;
    const center = this.state.center.map(item => parseFloat(item)); //no destruct since it needs to be a float
    return (
      <div
        style={{
          width: this.props.mapWidth,
          height: this.props.mapHeight,
          margin: "0.6em 1.4em 0.5em 0.8em"
        }}
      >
        <div>
          <button onClick={this.zoomIn} style={this.btnStyle}>
            Zoom In
          </button>
          <button onClick={this.zoomOut} style={this.btnStyle}>
            Zoom Out
          </button>{" "}
          {Math.round(center[0] * 10000) / 10000} ({lat2tile(center[0], zoom)})
          {" x "}
          {Math.round(center[1] * 10000) / 10000} ({lng2tile(center[1], zoom)})
        </div>
        <Map
          limitBounds="edge"
          center={center}
          zoom={zoom}
          dprs={[1, 2]}
          onBoundsChanged={this.handleBoundsChange}
          onClick={this.handleClick}
          onAnimationStart={this.handleAnimationStart}
          onAnimationStop={this.handleAnimationStop}
          animate={animate}
          metaWheelZoom={metaWheelZoom}
          twoFingerDrag={twoFingerDrag}
          zoomSnap={zoomSnap}
          mouseEvents={mouseEvents}
          touchEvents={touchEvents}
          minZoom={minZoom}
          maxZoom={maxZoom}
          defaultWidth={this.props.mapWidth}
          height={this.props.mapHeight}
          boxClassname="pigeon-filters"
        >
          {mapData.map(markerItem => (
            <Marker
              key={markerItem.ID}
              anchor={[
                parseFloat(markerItem.LATITUDE),
                parseFloat(markerItem.LONGITUDE)
              ]}
              payload={markerItem.ID}
              onClick={this.handleMarkerClick}
            />
          ))}
        </Map>
      </div>
    );
  }
}

export default MapProper;
