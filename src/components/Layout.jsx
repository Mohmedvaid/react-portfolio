// frontend/src/components/Layout.jsx
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Box from "@mui/material/Box";

import Menu from "./Menu";
const styles = {
  wrapper: {
    margin: "100px 0",
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
      <Box>{children}</Box>
    </Box>
  );
};

export default Layout;
