import React, { Component } from "react";
import Sidebar from "./Sidebar.js";
import MapProper from "./MapProper.js";
import sampleData from "../sample_data/data.json";
import DatePicker from "react-datepicker";
import Papa from "papaparse";

class MainMaps extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mapData: sampleData.sampleData, //all the data got from a query
      filData: {}, //the data filtered client-side
      mapWidth: 0.8 * window.innerWidth, //prolly constant
      mapHeight: 0.8 * window.innerHeight, //prolly constant
      initCenter: [50.283752, 18.700894], //change to reflect the first element of query
      dispPath: false, //to display the path
      startDate: new Date(), //for filtering based on data
      uploadedMap: null, // the coordinates uploaded by the user
      uploaded: false //to check whether a file has been uploaded
    };
  }

  handlePathClick = () => {
    this.setState(prevState => ({
      dispPath: !prevState.dispPath
    }));
  };

  uploadFile = event => {
    let file = event.target.files[0];

    if (file) {
      this.setState({
        uploaded: true,
        uploadedMap: file
      });
      // axios.post('/files', data)...
    }
  };

  importCSV = () => {
    const { uploadedMap } = this.state;
    Papa.parse(uploadedMap, {
      complete: this.updateData,
      header: true
    });
  };

  updateData(result) {
    var data = result.data;
    console.log(data);
  }

  render() {
    const { mapData, initCenter, dispPath, startDate } = this.state;
    return (
      <div className="wholeMain">
        <div className="wholeSidebar">
          <DatePicker
            selected={startDate}
            onChange={date => this.setState(startDate)}
          />
          {/* 
          <div className="inputSidebar"> */}
          <label
            for="fileUpload"
            /* style={{
              width: "100%",
              height: "100%",
              display: "block",
              boxSizing: "border-box",
              cursor: "pointer",
              padding: "0.6em 1.4em 0.5em 0.8em"
            }} */
            className="btnSidebar"
            style={{ boxSizing: "border-box" }}
          >
            {this.state.uploaded
              ? this.state.uploadedMap.name
              : "Upload the map "}
          </label>
          <input
            type="file"
            id="fileUpload"
            accept=".csv"
            onChange={this.uploadFile}
            style={{ display: "none" }}
          />
          {/* </div> */}
          <button className="btnSidebar" onClick={this.handlePathClick}>
            Display the vehicle path: {dispPath ? "Yes" : "No"}
          </button>
          <select class="selectSidebar">
            <option>Select the module</option>
            <option>Apples</option>
            <option>Bananas</option>
            <option>Grapes</option>
            <option>Oranges</option>
          </select>
          <select class="selectSidebar">
            <option>Select the data to display</option>
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
