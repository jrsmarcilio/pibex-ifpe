import React from "react";
import logo from "../../assets/logo_ifpe.png";

import "./styles.css";

const Header = () => {
  return (
    <div>
      <header className="header">
        <div className="logo">
        {/* <a href="https://ifpe.edu.br" id="portal-logo"> */}
          <span className="portal-title">IFPE</span>
          {/* <h1 className="portal-title loungo">
            Instituto Federal de Pernambuco
          </h1>
          <span className="portal-discription">Ministério da Educação</span> */}
        {/* </a> */}
        </div>

      </header>
    </div>
  );
};

export default Header;
