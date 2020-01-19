import React from "react";

function MainAbout() {
  var pjson = require("../../package.json");
  return (
    <div className="wholeMain">
      <div>
        <h2 style={{ margin: "1rem", fontWeight: "bold" }}>
          Katamaran web app ver. {pjson.version}
        </h2>
        <section>
          <h3 className="listHeading">Software used:</h3>
          <ul className="list">
            <li>React {React.version}</li>
            <li>React-router 5.1.2</li>
            <li>Leaflet 1.6.0</li>
            <li>React Leaflet 2.6.1</li>
            <li>Node </li>
            <li>React Date Picker</li>
            <li>Papa parse</li>
          </ul>
        </section>
        <section>
          <h3 className="listHeading">Notes and usage:</h3>
          <ul className="list">
            <li>The app uses OSM.</li>
            <li>
              Please disable any kind of adblock and/or script disallowing
              software
            </li>
            <li>
              When uploading a polygon of the area, please do so in the form of
              a CSV file, with the format <i>[LNG LAT, LNG LAT</i>...] <br />
              For files exported from QGIS, you only need to delete everything
              before and after the actual data. Additionally, the first and the
              last point must be different.
              <br></br>
              Both may be subject to change later (can be filtered)
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default MainAbout;
