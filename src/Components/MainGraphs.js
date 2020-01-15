import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import sampleData from "../sample_data/data.json";
import GraphProper from "./GraphProper";
import DatePicker from "react-datepicker";

function MainGraphs() {
  const [startDate, setStartDate] = useState(new Date());
  const graphWidth = 0.8 * window.innerWidth;
  const graphHeight = 0.8 * window.innerHeight;

  return (
    <div className="wholeMain">
      <div className="wholeSidebar">
        <DatePicker
          selected={startDate}
          onChange={date => setStartDate(date)}
        />
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
      <GraphProper
        graphWidth={graphWidth}
        graphHeight={graphHeight}
      ></GraphProper>
    </div>
  );
}

export default MainGraphs;
