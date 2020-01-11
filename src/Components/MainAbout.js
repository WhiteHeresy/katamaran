import React from "react";

function MainAbout() {
  return (
    <div className="wholeMain">
      <section>
        <h3 className="listHeading">Software used:</h3>
        <ul className="list">
          <li>React {React.version}</li>
          <li>React-router 5.1.2</li>
        </ul>
      </section>
    </div>
  );
}

export default MainAbout;
