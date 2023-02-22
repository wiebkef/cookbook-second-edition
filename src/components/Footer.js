import React from "react";
import "../css/Footer.css";
import logo from "../images/chomp-logo.svg";
import { Link } from "react-router-dom";

const Footer = ({ handleHome, scrollToTop }) => {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row justify-content-space-around">
          <div className="col ">
            <img src={logo} width="200px" alt="logo" />
            <ul className="list-unstyled">
              <p>
                Find out more about our blog, and also find all kinds of
                recipes. You can easily choose from our main ingredientsß{" "}
              </p>
            </ul>
          </div>

          <div className="col">
            <h3 className="anton-font ">Navigation</h3>
            <ul className="list-unstyled">
              <li onClick={scrollToTop}>
                <Link
                  to="/"
                  onClick={(e) => handleHome()}
                  className="footer-link-item"
                >
                  Home
                </Link>
              </li>
              <li onClick={scrollToTop}>
                <Link to="/about" className="footer-link-item">
                  About
                </Link>
              </li>
              <li onClick={scrollToTop}>
                <Link to="/recipes" className="footer-link-item">
                  Recipes
                </Link>
              </li>
              <li onClick={scrollToTop}>
                <Link to="/contact" className="footer-link-item">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="col">
            <h4 className="anton-font">Our Terms</h4>
            <ul className="list-unstyled ">
              <li>Terms of use</li>
              <l1>Impressum</l1>
            </ul>
          </div>
        </div>
        <hr />
        <div className="row" id="copyright">
          <p className="col-sm">
            {new Date().getFullYear()} CHOMP CHEFS INC | All Rights Reserved
            &copy; | Terms of Services | Privacy
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
