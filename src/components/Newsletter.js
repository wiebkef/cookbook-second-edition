import React from 'react';
import "./Footer.css"

const Newsletter = () => {

  return (
    <div className='newsletter'>
      <div className='container d-flex justify-content-evenly'>
        <div className='row'>

          <div className='subscribe-button'>
            <p>Receive Updates by Subscribing for our Newsletter</p>
            <input type='email' className='input' placeholder='Email'/>
            <br />
            <input type='password' className='input' placeholder='password'/>
            <br />
            <button type='submit' className='button  background-color: #C7CEEA!important;'> Subscribe </button>
          
          </div>

        </div>

      </div>

    </div>

  );
}

export default Newsletter;
