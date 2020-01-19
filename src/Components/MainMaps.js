import React, { Component } from "react";
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
      dispArea: false, //to display uploadedd area
      dispIDW: false, //to display the 2D interpolation instead of HeatMap
      dispDrawnArea: false, //to display the area drawn by the user
      startDate: new Date(), //for filtering based on data
      uploadedFile: null, // the file uploaded by the user (for meta)
      uploadedFileData: [], // the coordinates uploaded by the user
      uploadedBool: false //to check whether a file has been uploaded
    };
  }

  componentWillMount() {
    // just delete after true data is passed and not this garbage
    const passedMapData = [];
    for (var i = 600; i < 1000; i = i + 20) {
      if (this.state.mapData[i].LATITUDE && this.state.mapData[i].LONGITUDE)
        passedMapData.push(this.state.mapData[i]);
    }
    this.setState({
      mapData: passedMapData
    });
  }

  handleBoolClick = e => {
    const { name, checked } = e.target;

    this.setState(() => ({
      [name]: checked
    }));
  };

  uploadFile = event => {
    if (event.target.files[0]) {
      this.setState({
        uploadedFile: event.target.files[0],
        uploadedBool: true
      });

      Papa.parse(event.target.files[0], {
        complete: this.updateData,
        header: false
      });

      // axios.post('/files', data)...
    }
  };

  updateData = result => {
    const [raw] = result.data;

    const parsedCoords = raw.map(coords => {
      const [LONG, LAT] = coords.split(" ").map(coord => parseFloat(coord));
      return [LAT, LONG];
    });

    this.setState({
      uploadedFileData: parsedCoords
    });
  };

  render() {
    const {
      mapData,
      initCenter,
      dispPath,
      dispArea,
      dispIDW,
      dispDrawnArea,
      startDate,
      uploadedBool,
      uploadedFile,
      uploadedFileData
    } = this.state;

    return (
      <div className="wholeMain">
        <div className="wholeSidebar">
          <DatePicker
            selected={startDate}
            onChange={date => this.setState(startDate)}
          />
          <label
            for="fileUpload"
            className="btnSidebar"
            style={{ boxSizing: "border-box" }}
          >
            {uploadedBool ? uploadedFile.name : "Upload the area data"}
          </label>
          <input
            type="file"
            id="fileUpload"
            accept=".csv"
            onChange={this.uploadFile}
            style={{ display: "none" }}
          />
          <div
            className="boxSidebar"
            style={{
              display: "flex",
              flexDirection: "column",
              boxSizing: "border-box",
              justifyContent: "space-between"
            }}
          >
            <span
              style={{
                display: "flex",
                justifyContent: "space-between"
              }}
            >
              Display the vehicle path:
              <input
                type="checkbox"
                checked={dispPath}
                name="dispPath"
                onClick={this.handleBoolClick}
              />
            </span>
            <span
              style={{
                display: "flex",
                justifyContent: "space-between"
              }}
            >
              Display the uploaded area:
              <input
                type="checkbox"
                checked={dispArea}
                name="dispArea"
                onClick={this.handleBoolClick}
              />
            </span>
            <span
              style={{
                display: "flex",
                justifyContent: "space-between"
              }}
            >
              Display the drawn area:
              <input
                type="checkbox"
                checked={dispDrawnArea}
                name="dispDrawnArea"
                onClick={this.handleBoolClick}
              />
            </span>
            <span
              style={{
                display: "flex",
                justifyContent: "space-between"
              }}
            >
              2D data representation:
              <input
                type="checkbox"
                checked={dispIDW}
                name="dispIDW"
                onClick={this.handleBoolClick}
              />
            </span>
          </div>

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
          mapData={mapData}
          initCenter={initCenter}
          initZoom={18}
          dispPath={dispPath}
          dispArea={dispArea}
          dispDrawnArea={dispDrawnArea}
          dispIDW={dispIDW}
          area={uploadedFileData}
        ></MapProper>
      </div>
    );
  }
}

export default MainMaps;
