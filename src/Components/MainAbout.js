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
            <li>Node </li>
            <li>React Date Picker</li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default MainAbout;
