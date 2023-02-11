import React from 'react'
import Container from 'react-bootstrap/Container';
import Figure from 'react-bootstrap/Container';
import pork from "../images/pork.svg"
import beef from "../images/beef.svg"
import chicken from "../images/chicken.svg"
import fish from "../images/fish.svg"


function Categories() {
  return (
    <div>
      <div className='categories'>
        <div className='container'>
            <div className='images'>
                <img src={pork} alt="Pork " />
                <h3>Pork</h3>
            </div>
            <div className='images'>
                <img src={beef} alt="Beef" />
                <h3>Pork</h3>
            </div>
            <div className='images'>
                <img src={chicken} alt="Chicken" />
                <h3>Pork</h3>
            </div>
            <div className='images'>
                <img src={fish} alt="Fish" />
                <h3>Pork</h3>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Categories
