import React from 'react'

function NavBar(props){
    return(
        <div className="navbar-fixed" id="header-nav">
        <nav className="grey darken-4">
          <div className="nav-wrapper">
            <a href="./index.html" className="brand-logo">
              {/* <h1 className="Logo">MV</h1> */}
            </a>
            <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
            <ul className="right hide-on-med-and-down">
              <li><a href="#index"
              onClick={()=> props.handleChange("Home")}
              className={props.currentPage === "Home" ? "nav-link active": "nav-link"}
              >Home</a></li>

              <li><a href="#portfolio"
              onClick={()=> props.handleChange("Portfolio")}
              className={props.currentPage === "Portfolio" ? "nav-link active": "nav-link"}
              >Portfolio</a></li>

              <li><a href="#contact"
              onClick={()=> props.handleChange("Contact")}
              className={props.currentPage === "Contact" ? "nav-link active": "nav-link"}
              >Contact</a></li>
            </ul>
          </div>
        </nav>
      </div>
    )
}

export default NavBar;