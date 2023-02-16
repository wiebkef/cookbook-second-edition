import React from 'react';
import "./Footer.css"
import logo from "../images/chomp-logo.svg";
import { Link } from "react-router-dom";

const Footer = ({handleHome, scrollToTop}) => {
  return (
    <div className='main-footer'>
      <div className='container'>
        <div className='row'>
             
              <div className='col text-start'>
                  <img src={logo} width="200px" />
                  <ul className='list-unstyled'>
                      <p>Find out more about our blog, and also find all kinds of recipes. You can easily choose from our main ingredientsß </p>
                  </ul>
              </div>
              
              <div className='col'>
                <h3 className='anton-font text-start'>Navigation</h3>
                <ul className='list-unstyled text-start'>
                      <li onClick={scrollToTop}>
                      <Link to="/"  onClick={(e) => handleHome()}>Home</Link>
                      </li>
                      <li onClick={scrollToTop}>
                      <Link to="/about">About</Link>
                        </li>
                      <li onClick={scrollToTop}>
                      <Link to="/recipes">Recipes</Link>
                        </li>
                      <li onClick={scrollToTop}>
                      <Link to="/contact">Contact</Link>
                        </li>
                </ul>

              </div>
             
              <div className='col'>
                <h4 className='anton-font text-start'>Our Terms</h4>
                <ul className='list-unstyled text-start'>
                      <li>Terms of use</li>
                      <l1>Impressum</l1>

                </ul>

              </div>

        </div>
        <hr />
        <div className='row' id='copyright'>
          <p className='col-sm'>
             {new Date().getFullYear()} CHOMP CHEFS INC | All Rights Reserved &copy; | Terms of Services | Privacy
          </p>

        </div>

      </div>
    </div>
  )
}

export default Footer;
