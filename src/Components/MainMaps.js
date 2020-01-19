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
      startDate: new Date(), //for filtering based on data
      uploadedFile: null, // the file uploaded by the user (for meta)
      uploadedFileData: [], // the coordinates uploaded by the user
      uploadedBool: false //to check whether a file has been uploaded
    };
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
          dispArea={dispArea}
          area={uploadedFileData}
        ></MapProper>
      </div>
    );
  }
}

export default MainMaps;
