import React, { Component } from "react";

class GraphProper extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div
        style={{
          width: this.props.graphWidth,
          height: this.props.graphHeight,
          margin: "0.6em 1.4em 0.5em 0.8em"
        }}
      >
        AAAA CHUJ
      </div>
    );
  }
}

export default GraphProper;
