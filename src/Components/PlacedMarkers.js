import React, { Component } from "react";
import Marker from "pigeon-marker";

class PlacedMarkers extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mapData: this.props.mapData, //still pure data
      handleClick: this.props.handleClick
    };
  }

  render() {
    const { mapData, handleClick } = this.state;

    return mapData.map(marker => (
      <Marker
        anchor={[parseFloat(marker.LATITUDE), parseFloat(marker.LONGITUDE)]}
        payload={marker.ID}
        onClick={handleClick}
      />
    ));
  }
}

export default PlacedMarkers;
