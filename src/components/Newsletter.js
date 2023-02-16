import React from 'react';
import "./Footer.css"

const Newsletter = () => {

  return (
    <div className='newsletter'>
      <div className='overlay-news'></div>
      <div className='container d-flex justify-content-evenly'>
        <div className='row'>

          <div className='subscribe-button'>
            <br />
            <p className='lora-font'>Subscribe to our Newsletter</p>
            <input type='email' className='newsletter-input lora-font' placeholder='Email'/>


            <button type='submit' className='btn btn-primary'> Subscribe </button>
          
          </div>

        </div>

      </div>

    </div>

  );
}

export default Newsletter;
