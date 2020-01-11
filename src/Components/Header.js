import React from "react";
import { useHistory } from "react-router";

function Header() {
  const { push } = useHistory();
  return (
    <header className="wholeHeader">
      <div className="logoHeader">
        <span className="logoTextHeader">Katamaran Web App</span>
      </div>
      <button className="btn" onClick={() => push("/maps")}>
        Maps
      </button>
      <button className="btn" onClick={() => push("/graphs")}>
        Graphs
      </button>
      <button className="btn" onClick={() => push("/about")}>
        About
      </button>
    </header>
  );
}

export default Header;
