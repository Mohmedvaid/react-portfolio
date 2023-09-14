import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import Home from "./pages/home/Home";
import Contact from "./pages/contact/Contact";
import Portfolio from "./pages/portfolio/Portfolio";

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const location = useLocation();

  const isSpecificPage =
    location.pathname === "/" ||
    location.pathname === "/contact" ||
    location.pathname === "/portfolio";

  return (
    <div className="flex-wrapper">
      {isSpecificPage && <NavBar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </div>
  );
}

export default App;
