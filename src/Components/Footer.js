import React from "react";

function Footer() {
  return (
    <footer className="wholeFooter">
      <hr className="breakFooter" />
      <div className="allLogosFooter">
        <a href="https://www.polsl.pl/Strony/Witamy.aspx">
          <img
            src={require("../img/ps_logo.png")}
            alt="Polsl Logo"
            className="oneLogoFooter"
          />
        </a>
        <a href="https://www.polsl.pl/wydzialy/rau/Strony/Witamy.aspx">
          <img
            src={require("../img/aei_logo.png")}
            alt="AEiI Logo"
            className="oneLogoFooter"
          />
        </a>
        <a href="https://github.com/WhiteHeresy/katamaran">
          <img
            src={require("../img/gh_logo.png")}
            alt="GitHub Logo"
            className="oneLogoFooter"
          />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
