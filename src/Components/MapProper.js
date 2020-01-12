import React, { useState, useEffect } from "react";
import Map from "pigeon-maps";
import Marker from "pigeon-marker";
import Overlay from "pigeon-overlay";

function MapProper() {
  const [zoom, setZoom] = useState(5);
  const [center, setCenter] = useState([50.1102, 3.1506]);

  const zoomIn = () => {
    setZoom({
      zoom: Math.min(zoom + 1, 18)
    });
  };

  const zoomOut = () => {
    this.setZoom({
      zoom: Math.max(zoom - 1, 1)
    });
  };

  const handleBoundsChange = ({ center, zoom, bounds, initial }) => {
    if (initial) {
      console.log("Got initial bounds: ", bounds);
    }
    this.setState({ center, zoom });
  };

  const handleClick = ({ event, latLng, pixel }) => {
    console.log("Map clicked!", latLng, pixel);
  };

  const handleMarkerClick = ({ event, payload, anchor }) => {
    console.log(`Marker #${payload} clicked at: `, anchor);
  };

  const handleAnimationStart = () => {
    this.setState({ animating: true });
  };

  const handleAnimationStop = () => {
    this.setState({ animating: false });
  };

  const mapWidth = 0.8 * window.innerWidth;
  const mapHeight = 0.8 * window.innerHeight;
  return (
    <Map
      center={[51.879, 4.6997]}
      zoom={5}
      width={mapWidth}
      height={mapHeight}
      metaWheelZoom={false}
    >
      <Marker
        anchor={[50.874, 4.6947]}
        payload={1}
        onClick={({ event, anchor, payload }) => {}}
      />
    </Map>
  );
}

export default MapProper;
