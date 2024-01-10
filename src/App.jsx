// frontend/src/App.jsx
import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { ghostCursor } from "cursor-effects";
import { ParallaxProvider } from "react-scroll-parallax";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";

import theme from "./config/theme";
import HomePage from "./pages/HomePage";
import Layout from "./components/Layout";
import Loader from "./components/Loader";

import "./global/styles.css"; // bg gradient

new ghostCursor();

// lazy load pages
const PortfolioPage = React.lazy(() => import("./pages/PortfolioPage"));
const ContactPage = React.lazy(() => import("./pages/ContactPage"));
const Fun = React.lazy(() => import("./pages/Fun"));

const menuItems = [
  { path: "/", label: "Home", id: 1 },
  {
    path: "portfolio",
    label: "Portfolio",
    id: 2,
  },
  { path: "contact", label: "Contact", id: 3 },
  { path: "fun", label: "Fun", id: 4 },
];

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Suspense fallback={<Loader />}>
        <Box className="animatedBackground">
          <ParallaxProvider>
            <Routes>
              <Route
                path="/"
                element={
                  <Layout menuItems={menuItems}>
                    <HomePage />
                  </Layout>
                }
              />
              <Route
                path="portfolio"
                element={
                  <Layout menuItems={menuItems}>
                    <PortfolioPage />
                  </Layout>
                }
              />
              <Route
                path="contact"
                element={
                  <Layout menuItems={menuItems}>
                    <ContactPage />
                  </Layout>
                }
              />
              <Route
                path="fun"
                element={
                  <Layout menuItems={menuItems}>
                    <Fun />
                  </Layout>
                }
              />
            </Routes>
          </ParallaxProvider>
        </Box>
      </Suspense>
    </ThemeProvider>
  );
};
export default App;
