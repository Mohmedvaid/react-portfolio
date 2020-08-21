import React, { Component } from "react";
import Home from "../pages/home/Home";
import Portfolio from "../pages/portfolio/Portfolio";
import Contact from "../pages/contact/Contact";
import NavBar from './navbar/ NavBar'

class PortfolioClass extends Component {
  state = {
    currentPage: "Home"
  };

  handleChange = page => {
    this.setState({ currentPage: page });
  };


  renderPage = () => {
    if (this.state.currentPage === "Home") {
      return <Home
      currentPage={this.state.currentPage}
      handleChange={this.handleChange}
      />;
    } else if (this.state.currentPage === "Portfolio") {
      return <Portfolio />;
    } else if (this.state.currentPage === "Contact") {
      return <Contact />;
    } else {
      return <Home />;
    }
  };

  render() {
    return (
      <div>
        <NavBar
        currentPage={this.state.currentPage}
        handleChange={this.handleChange}
        />
        <div
          className="main">
         {this.renderPage()}
        </div>
      </div>
    );
  }
}

export default PortfolioClass;
