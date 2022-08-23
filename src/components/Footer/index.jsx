import React from "react";
import { Link, useLocation } from "react-router-dom";

import Heading from "../Heading";

import logo from "../../assets/logo.svg";
import facebook from "../../assets/facebook.svg";
import twitter from "../../assets/twitter.svg";
import instagram from "../../assets/instagram.svg";
import linkedin from "../../assets/linkedin.svg";

function Footer() {
  const { pathname } = useLocation();
  console.log(pathname);

  // const routes = []

  return pathname === "/" ? (
    <footer className="footer">
      <div className="container">
        <div className="footer__footer">
          <div className="footer__left">
            <img src={logo} alt="Hafrikplay logo" />

            <p>Copyright © 2022</p>

            <div className="footer__socials">
              <a href="#" className="footer__link">
                <img src={facebook} alt="Facebook Icon" />
              </a>
              <a href="#" className="footer__link">
                <img src={twitter} alt="Twitter Icon" />
              </a>
              <a href="#" className="footer__link">
                <img src={instagram} alt="Instagram Icon" />
              </a>
              <a href="#" className="footer__link">
                <img src={linkedin} alt="LinkedIn Icon" />
              </a>
            </div>
          </div>

          <div className="footer__right">
            <ul className="footer__list">
              <Heading size={4} className="accent__text">
                Company
              </Heading>
              <li className="footer__item">
                <Link to="#">About</Link>
              </li>
              <li className="footer__item">
                <Link to="#">Jobs</Link>
              </li>
              <li className="footer__item">
                <Link to="#">For the record</Link>
              </li>
            </ul>
            <ul className="footer__list">
              <Heading size={4} className="accent__text">
                Communities
              </Heading>

              <li className="footer__item">
                <Link to="#">For artists</Link>
              </li>

              <li className="footer__item">
                <Link to="#">Adverting</Link>
              </li>

              <li className="footer__item">
                <Link to="#">Investors</Link>
              </li>

              <li className="footer__item">
                <Link to="#">Developers</Link>
              </li>

              <li className="footer__item">
                <Link to="#">Vendors</Link>
              </li>
            </ul>

            <ul className="footer__list">
              <Heading size={4} className="accent__text">
                Useful Links
              </Heading>

              <li className="footer__item">
                <Link to="#">Support</Link>
              </li>

              <li className="footer__item">
                <Link to="#">Download Andriod</Link>
              </li>

              <li className="footer__item">
                <Link to="#">Dowload IOS</Link>
              </li>

              <li className="footer__item">
                <Link to="#">Web Player</Link>
              </li>

              <li className="footer__item">
                <Link to="#">Free Mobile App</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  ) : (
    <footer className="footer__auth">
      <div className="container">
        <p>Hafrikplay Copyright © 2022</p>

        <ul>
          <li>
            <Link to={"#"}>Privacy policy</Link>
          </li>
          <li>
            <Link to={"#"}> Terms and Conditions</Link>
          </li>
          <li>
            <Link to={"#"}>Download</Link>
          </li>
        </ul>

        <div className="footer__socials">
          <a href="#" className="footer__link">
            <img src={facebook} alt="Facebook Icon" />
          </a>
          <a href="#" className="footer__link">
            <img src={twitter} alt="Twitter Icon" />
          </a>
          <a href="#" className="footer__link">
            <img src={instagram} alt="Instagram Icon" />
          </a>
          <a href="#" className="footer__link">
            <img src={linkedin} alt="LinkedIn Icon" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
