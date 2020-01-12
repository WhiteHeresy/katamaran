import React from "react";
import Header from "./Components/Header.js";
import Main from "./Components/Main.js";
import Footer from "./Components/Footer.js";
import MainMaps from "./Components/MainMaps";
import MainGraphs from "./Components/MainGraphs";
import MainAbout from "./Components/MainAbout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"; //router has to stay

function App() {
  return (
    <div className="site">
      <Header />
      <Switch>
        <Route path="/maps">
          <MainMaps />
        </Route>
        <Route path="/graphs">
          <MainGraphs />
        </Route>
        <Route path="/about">
          <MainAbout />
        </Route>
        <Route path="/">
          <Main />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
