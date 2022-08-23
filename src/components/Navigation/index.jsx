import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import Icon from "../Icon";
import Button from "../Button";

import logo from "../../assets/logo.svg";

function Navigation() {
  const [openMenu, setOpenMenu] = useState(false);

  // Reference to DOM elements
  const menuRef = useRef();
  const openMenuRef = useRef();
  const closeMenuRef = useRef();

  useEffect(() => {
    openMenuRef.current.addEventListener("click", (e) => {
      setOpenMenu(true);
    });

    closeMenuRef.current.addEventListener("click", (e) => {
      setOpenMenu(false);
    });
  }, []);

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar__nav">
          <div className="navbar__logo">
            <img src={logo} alt="Hafrikplay logo" />
          </div>

          <div
            className={`navbar__nav-li navbar__mobile ${
              !openMenu ? "navbar__hidden" : ""
            }`}
            ref={menuRef}
          >
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

            <div className="navbar__close" ref={closeMenuRef}>
              <span>&nbsp;</span>
              <span>&nbsp;</span>
              {/* <span>&nbsp;</span> */}
            </div>
          </div>

          <div className="navbar__hamburger" ref={openMenuRef}>
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
