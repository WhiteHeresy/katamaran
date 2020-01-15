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
          </ul>
        </section>
      </div>
    </div>
  );
}

export default MainAbout;
