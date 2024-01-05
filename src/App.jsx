// frontend/src/App.jsx
import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import theme from "./config/theme";
import Layout from "./components/Layout";
import Loader from "./components/Loader";

const HomePage = React.lazy(() => import("./pages/HomePage"));

const menuItems = [
  { path: "/", label: "Home" },
  {
    path: "/upload",
    label: "",
  },
  { path: "/profile", label: "Profile" },
];

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Suspense fallback={<Loader />}>
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
      </Suspense>
    </ThemeProvider>
  );
}

export default App;
