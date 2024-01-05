// frontend/src/components/Layout.jsx
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Box from "@mui/material/Box";

import Menu from "./Menu";

const Layout = ({ children, menuItems, showMenu = true }) => {
  const location = useLocation();
  const [value, setValue] = useState(location.pathname);

  useEffect(() => {
    setValue(location.pathname);
  }, [location]);

  return (
    <>
      {showMenu && <Menu menuItems={menuItems} value={value} />}
      <Box>{children}</Box>
    </>
  );
};

export default Layout;
