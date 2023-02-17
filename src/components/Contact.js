import React from 'react'
import HeroInternal from './HeroInternal'
import Container from "react-bootstrap/Container";
import Button from './Button';
import "../css/Recipe.css";

function Contact() {
  return (
    <div className='background_0'>
      <HeroInternal />
      <Container>
        <div className='row justify-content-center p-5'>
          <div className='col-sm-3 col-md-3 col-lg-4 background-foodies'>

          </div>
          <div className='col-sm-9 col-md-9 col-lg-6 background-white p-5'>
            <h2 className='text-start mb-3'>Contact us now!</h2>
          <div className="mb-3">
            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Enter your E-mail" />
          </div>
          <div className="mb-3">
            <input type="name" className="form-control" id="exampleFormControlInput1" placeholder="Tell us your Name" />
          </div>
          <div className="mb-3">
            <input type="tel" className="form-control" id="exampleFormControlInput1" placeholder="Would you like us to call you?" />
          </div>
          <div className="mb-3">
            <textarea className="form-control" id="exampleFormControlInput1" placeholder="Would you like us to call you?"></textarea>
          </div>
          <div className='mb-3 text-start'>
          <Button name="Submit" buttonClass="btn btn-primary" buttonTarget="#" />
          </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Contact
