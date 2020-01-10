import React from "react";

function Footer() {
  return (
    <footer className="wholeFooter">
      <hr className="breakFooter" />
      <div className="allLogosFooter">
        <img
          src={require("../img/ps_logo.png")}
          alt="Polsl Logo"
          className="oneLogoFooter"
        />
        <img
          src={require("../img/gh_logo.png")}
          alt="GitHub Logo"
          className="oneLogoFooter"
        />
      </div>
    </footer>
  );
}

export default Footer;
