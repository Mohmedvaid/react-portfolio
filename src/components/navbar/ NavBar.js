import React, { useState, useEffect } from "react";
import { Link, useLocation } from 'react-router-dom'
import {Nav, Navbar} from 'react-bootstrap'

import "./styles.css"

function NavBar() {
  const [expanded, setExpanded] = useState(false);

  let logo = document.querySelector('a.logo.nav-brand');

window.onResize = function() {
  if (window.innerWidth <= 992) logo.classList.add('justify-content-center');
  else logo.classList.remove('justify-content-center');
};


    return ( 
        <>
          <Navbar sticky="top" collapseOnSelect expand="lg" expanded={expanded}  expand="lg" bg="dark-4" variant="dark">
            <Navbar.Brand className="logo"><Link to="/" className="logo">MV</Link></Navbar.Brand>
            <Navbar.Toggle onClick={() => setExpanded(expanded ? false : "expanded")}  aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" className="navLinks">
              <Nav className="ml-auto">
                  <Nav.Link onClick={() => setExpanded(false)}>
                    <Link className="navlink" to="/">HOME</Link>
                  </Nav.Link>
                  <Nav.Link onClick={() => setExpanded(false)}>
                    <Link className="navlink" to="/portfolio">PORTFOLIO</Link>
                  </Nav.Link>
                  <Nav.Link onClick={() => setExpanded(false)}>
                    <Link className="navlink" to="/contact">CONTACT</Link>
                  </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </>
    )
}

export default NavBar;