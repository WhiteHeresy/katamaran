import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import sampleData from "../sample_data/data.json";
import GraphProper from "./GraphProper";

function MainGraphs() {
  const [startDate, setStartDate] = useState(new Date());
  const graphWidth = 0.8 * window.innerWidth;
  const graphHeight = 0.8 * window.innerHeight;

  return (
    <div className="wholeMain">
      <Sidebar></Sidebar>
      <GraphProper
        graphWidth={graphWidth}
        graphHeight={graphHeight}
      ></GraphProper>
    </div>
  );
}

export default MainGraphs;
