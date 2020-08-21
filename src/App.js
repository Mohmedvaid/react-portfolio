import React from "react";
import PortfolioContainer from "./components/PortfolioContainer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/navbar/ NavBar"
import Home from './pages/home/Home'
import Contact from './pages/contact/Contact'
import Portfolio from './pages/portfolio/Portfolio'


function App(){
    return(
        <Router>
        <div>
        <div className="flex-wrapper">
          <NavBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/contact" component={Contact} /> 
            <Route exact path="/portfolio" component={Portfolio} /> 
          </Switch>
          </div>
        </div>
        </Router>
    )
}

export default App;

