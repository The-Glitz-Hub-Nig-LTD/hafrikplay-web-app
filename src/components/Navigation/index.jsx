import React from "react";
import { Link } from "react-router-dom";

import Icon from "../Icon";
import Button from "../Button";

import logo from "../../assets/logo.svg";

function Navigation() {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar__nav navbar__mobile">
          <div className="navbar__logo">
            <img src={logo} alt="Hafrikplay logo" />
          </div>

          <div className="navbar__links">
            <Link className="navbar__link" to="#">
              About
            </Link>
            <Link className="navbar__link" to="#">
              Support
            </Link>
            <Link className="navbar__link" to="#">
              Download
            </Link>
          </div>

          <Button className="btn btn__primary">
            <Icon size={24} name={"person-outline"} />
            <span>Login</span>
          </Button>

          <div className="navbar__hamburger">
            <span>&nbsp;</span>
            <span>&nbsp;</span>
            <span>&nbsp;</span>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
