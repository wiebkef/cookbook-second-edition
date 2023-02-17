import React, { useEffect } from 'react';
import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from "../images/chomp-logo.svg";

function Navigation({handleHome, scrollToTop }) {

  const [scrollPosition, setSrollPosition] = useState(0);

  const [ isScrolled, setIsScrolled ] = useState(false);

  const [isClassActive, setIsClassActive] = useState(true);

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

  const handleMobileNav = (e) => {

    const navBar = document.querySelector('.navbar-collapse');
    console.log(navBar);
    if(e.target.innerText == 'menu') {
      setIsClassActive(false);

    } else if (e.target.innerText == 'close') {

      setIsClassActive(true);
    }
  }

  return (

     <Navbar className={ isScrolled ? "fixed-top scrolled" :  "fixed-top" }  expand="lg">
      <Container>
        <Navbar.Brand >
          <Link  to="/"  onClick={(e) => handleHome()} >
          <img src={logo} alt="Chomp Blog" width="150px"  />
          </Link>
        </Navbar.Brand>
        <button aria-controls="basic-navbar-nav" onClick={handleMobileNav} type="button" aria-label="Toggle navigation" className="navbar-toggler collapsed">
          <span class="material-symbols-outlined">
          {isClassActive ? 'menu' : 'close'}
          </span>
        </button>
        <div className={isClassActive ? 'justify-content-end colapse navbar-collapse collapse' : 'justify-content-end colapse navbar-collapse'} id="basic-navbar-nav">

          <Nav className="nav justify-content-end">
            <NavLink to="/"  onClick={(e) => {handleHome(); scrollToTop(); handleMobileNav()}}>Home</NavLink>
            <NavLink  onClick={()=> {scrollToTop(); handleMobileNav()}} to="/about">About</NavLink>
            <NavLink  onClick={()=> {scrollToTop(); handleMobileNav()}} to="/recipes">Recipes</NavLink>
            <NavLink  onClick={()=> {scrollToTop(); handleMobileNav()}} to="/contact">Contact</NavLink>
            
          </Nav>

        </div>
      </Container>
    </Navbar>

  )
}

export default Navigation
