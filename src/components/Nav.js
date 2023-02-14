import React, { useEffect } from 'react';
import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from "../images/chomp-logo.svg";

function Navigation() {

  const [scrollPosition, setSrollPosition] = useState(0);

  const [ isScrolled, setIsScrolled ] = useState(false);

  const handleScroll = () => {
    const position = window.pageYOffset;
    if(position > 30) {
      setIsScrolled(true)
    } else if(position < 30) {
      setIsScrolled(false)
    }

  };

  console.log(isScrolled)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
        window.removeEventListener('scroll', handleScroll);
    };

  }, [])



  return (

     <Navbar className={ isScrolled ? "fixed-top scrolled" :  "fixed-top" }  expand="lg">
      <Container>
        <Navbar.Brand >
          <Link  to="/">
          <img src={logo} alt="Chomp Blog" width="150px"  />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className='justify-content-end' id="basic-navbar-nav" >
          <Nav className="nav justify-content-end">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/recipes">Recipes</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  )
}

export default Navigation
