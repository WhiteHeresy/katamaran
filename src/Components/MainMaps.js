import React, { Component } from "react";
import Sidebar from "./Sidebar.js";
import MapProper from "./MapProper.js";
import sampleData from "../sample_data/data.json";
import DatePicker from "react-datepicker";

class MainMaps extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mapData: sampleData.sampleData,
      filData: {},
      mapWidth: 0.8 * window.innerWidth,
      mapHeight: 0.8 * window.innerHeight,
      initCenter: [50.288052, 18.676916],
      dispPath: false,
      startDate: new Date()
    };
  }

  handlePathClick = () => {
    this.setState(prevState => ({
      dispPath: !prevState.dispPath
    }));
  };

  render() {
    const { mapData, initCenter, dispPath, startDate } = this.state;
    return (
      <div className="wholeMain">
        <div className="wholeSidebar">
          <DatePicker
            selected={startDate}
            onChange={date => this.setState(startDate)}
          />
          <button className="btnSidebar" onClick={this.handlePathClick}>
            Display the vehicle path: {dispPath ? "Yes" : "No"}
          </button>
          <select class="selectSidebar">
            <option>Select an attribute to filter by</option>
            <option>Apples</option>
            <option>Bananas</option>
            <option>Grapes</option>
            <option>Oranges</option>
          </select>
          <select class="selectSidebar">
            <option>Select an attribute to filter by</option>
            <option>Apples</option>
            <option>Bananas</option>
            <option>Grapes</option>
            <option>Oranges</option>
          </select>
          <select class="selectSidebar">
            <option>Select an attribute to filter by</option>
            <option>Apples</option>
            <option>Bananas</option>
            <option>Grapes</option>
            <option>Oranges</option>
          </select>
          <select class="selectSidebar">
            <option>Select an attribute to filter by</option>
            <option>Apples</option>
            <option>Bananas</option>
            <option>Grapes</option>
            <option>Oranges</option>
          </select>
          <button className="btnSidebar" onClick="">
            Filter data
          </button>
          <button className="btnSidebar" onClick="">
            Fetch new data
          </button>
        </div>
        <MapProper
          mapData={[
            mapData[1000],
            mapData[1100],
            mapData[1200],
            mapData[1300],
            mapData[1400],
            mapData[1500]
          ]}
          initCenter={initCenter}
          initZoom={18}
          dispPath={dispPath}
        ></MapProper>
      </div>
    );
  }
}

export default MainMaps;
