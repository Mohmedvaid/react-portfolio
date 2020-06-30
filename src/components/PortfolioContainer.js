import React, { Component } from "react";
import NavBar from './NavBar'
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import NavBar2 from './ NavBar2'

class PortfolioClass extends Component {
  state = {
    currentPage: "Home"
  };

  handleChange = page => {
    this.setState({ currentPage: page });
  };

  renderPage = () => {
    if (this.state.currentPage === "Home") {
      return <Home />;
    } else if (this.state.currentPage === "Portfolio") {
      return <Portfolio />;
    } else if (this.state.currentPage === "Contact") {
      return <Contact />;
    } else {
      return <Contact />;
    }
  };

  render() {
    return (
      <>
        <NavBar2
        currentPage={this.state.currentPage}
        handleChange={this.handleChange}
        />
        <div 
          className="main">
         {this.renderPage()}
        </div>
      </>
    );
  }
}

export default PortfolioClass;
