import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import sampleData from "../sample_data/data.json";

function MainGraphs() {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div className="wholeMain">
      <Sidebar></Sidebar>
      <p>Graphs</p>
    </div>
  );
}

export default MainGraphs;
