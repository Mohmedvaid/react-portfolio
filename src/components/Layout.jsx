// src/components/Layout.jsx
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

import Menu from "./Menu";
const styles = {
  wrapper: {
    margin: "100px 0",
  },
  page: {
    flexGrow: 1,
    marginTop: 4,
    padding: "20px",
    height: "100vh", // Full viewport height
    paddingBottom: "100px",
  },
};

const Layout = ({ children, menuItems, showMenu = true }) => {
  const location = useLocation();
  const [value, setValue] = useState(location.pathname);

  useEffect(() => {
    setValue(location.pathname);
  }, [location]);

  return (
    <Box sx={styles.wrapper}>
      {showMenu && <Menu menuItems={menuItems} value={value} />}
      <Container sx={styles.root} maxWidth="none">
        {children}
      </Container>
    </Box>
  );
};

export default Layout;
