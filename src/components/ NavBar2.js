import React from 'react'
import { Navbar, Nav, Dropdown} from 'react-bootstrap';

function Navbar2(props) {

  let logo = document.querySelector('a.logo.nav-brand');

window.onResize = function() {
  if (window.innerWidth <= 992) logo.classList.add('justify-content-center');
  else logo.classList.remove('justify-content-center');
};


    return ( 
        <>
          <Navbar sticky="top" collapseOnSelect expand="lg" bg="dark-4" variant="dark">
            <Navbar.Brand href="#home" className="logo">MV</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" className="navLinks">
              <Nav className="ml-auto">
                <Nav.Link href="#"
                onClick={()=> props.handleChange("Home")}
                >Home</Nav.Link>

                <Nav.Link href="#Portfolio"
                onClick={()=> props.handleChange("Portfolio")}
                >Portfolio</Nav.Link>

                <Nav.Link href="#Contact"
                onClick={()=> props.handleChange("Contact")}
                >Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </>
    )
}

export default Navbar2;