import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import "./styles.css";

function NavBar() {
  const [expanded, setExpanded] = useState(false);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 992);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 992);
    };

    window.addEventListener("resize", handleResize);

    // Clean-up listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <Navbar
        sticky="top"
        collapseOnSelect
        expand="lg"
        bg="dark-4"
        variant="dark"
        expanded={expanded}
      >
        <Navbar.Brand className={isMobileView ? "justify-content-center" : ""}>
          <Link to="/" className="logo">
            MV
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => setExpanded((prev) => !prev)}
        />
        <Navbar.Collapse id="responsive-navbar-nav" className="navLinks">
          <Nav className="ml-auto">
            <Nav.Link onClick={() => setExpanded(false)}>
              <Link className="navlink" to="/">
                HOME
              </Link>
            </Nav.Link>
            <Nav.Link onClick={() => setExpanded(false)}>
              <Link className="navlink" to="/portfolio">
                PORTFOLIO
              </Link>
            </Nav.Link>
            <Nav.Link onClick={() => setExpanded(false)}>
              <Link className="navlink" to="/contact">
                CONTACT
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default NavBar;
