import React from 'react';
import "./Footer.css"

const Footer = () => {
  return (
    <div className='main-footer'>
      <div className='container'>
        <div className='row'>
             
              <div className='col'>
                  <h2>CHOMP CHEFS INC</h2>
                  <ul className='list-unstyled'>
                      <p>Find out more about our blog, and also find all kinds of recipes. You can easily choose from our main ingredientsß </p>
                  </ul>
              </div>
              
              <div className='col'>
                <h3>Navigation</h3>
                <ul className='list-unstyled'>
                      <li>Home</li>
                      <li>About</li>
                      <li>Recipes</li>
                      <li>Contact</li>
                </ul>

              </div>
             
              <div className='col'>
                <h4>Our Terms</h4>
                <ul className='list-unstyled'>
                      <li>Terms of use</li>
                      <l1>Impressum</l1>

                </ul>

              </div>

        </div>
        <hr />
        <div className='row' id='copyright'>
          <p className='col-sm'>
              &copy;{new Date().getFullYear()} CHOMP CHEFS INC | All Rights Reserved | Terms of Services | Privacy
          </p>

        </div>

      </div>
    </div>
  )
}

export default Footer;
