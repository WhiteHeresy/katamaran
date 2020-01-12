import React, { useState, useEffect } from "react";
import sampleData from "../sample_data/data.json";
import Sidebar from "./Sidebar.js";

function Main() {
  const [data, setData] = useState(sampleData.sampleData);
  const dataKeys = Object.keys(data[15000]);

  return (
    <div className="wholeMain">
      <Sidebar></Sidebar>
      <div>
        <div>Sample Data: {data.length} elements</div>
        <br></br>
        <p>Structure of elements: </p>
        <ol style={{ marginLeft: "50px" }}>
          {dataKeys.map(item => (
            <li>{item}</li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default Main;
