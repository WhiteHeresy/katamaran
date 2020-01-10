import React from "react";

function Header() {
  return (
    <header className="wholeHeader">
      <div className="logoHeader">
        <span className="logoTextHeader">Katamaran Web App</span>
      </div>
      <button className="btn">Maps</button>
      <button className="btn">Graps</button>
      <button className="btn">Help</button>
    </header>
  );
}

export default Header;
