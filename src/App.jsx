// frontend/src/App.jsx
import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";

import theme from "./config/theme";
import Layout from "./components/Layout";
import Loader from "./components/Loader";

import "./global/styles.css";

const HomePage = React.lazy(() => import("./pages/HomePage"));

const menuItems = [
  { path: "/", label: "Home", id: 1 },
  {
    path: "portfolio",
    label: "Portfolio",
    id: 2,
  },
  { path: "contact", label: "Contact", id: 3 },
];

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Suspense fallback={<Loader />}>
        <Box className="animatedBackground">
          <Routes>
            <Route
              path="*"
              element={
                <Layout menuItems={menuItems}>
                  <HomePage />
                </Layout>
              }
            />
          </Routes>
        </Box>
      </Suspense>
    </ThemeProvider>
  );
}

export default App;
