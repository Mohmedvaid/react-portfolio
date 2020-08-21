import React from 'react'
import { Navbar, Nav} from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom'
import "./styles.css"

function NavBar() {

  let logo = document.querySelector('a.logo.nav-brand');

window.onResize = function() {
  if (window.innerWidth <= 992) logo.classList.add('justify-content-center');
  else logo.classList.remove('justify-content-center');
};


    return ( 
        <>
          <Navbar sticky="top" collapseOnSelect expand="lg" bg="dark-4" variant="dark">
            <Navbar.Brand className="logo"><Link to="/">MV</Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" className="navLinks">
              <Nav className="ml-auto">
                   <Link to="/">
                  HOME
                </Link>
                <Link to="/contact">
                  CONTACT
                </Link>
                <Link to="/portfolio">
                  PORTFOLIO
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </>
    )
}

export default NavBar;