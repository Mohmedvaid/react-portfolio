// src/components/Menu.jsx
import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";

import useScrollCheck from "../hooks/useScrollCheck";
import logo from "../assets/img/logo.png";

const styles = {
  appBarTransparent: {
    color: "#000000",
    borderRadius: "50px", // Rounded top
    transition: "all 0.5s ease",
    width: "70%",
    boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.35)",
  },
  desktopMenu: {
    flexGrow: 1,
    display: { xs: "none", md: "flex" },
    justifyContent: "flex-end",
  },
  mobileMenu: {
    display: { xs: "block", md: "none" },
  },
  mobileMenuContainer: {
    flexGrow: 1,
    display: { xs: "flex", md: "none" },
    justifyContent: "flex-end",
  },
  toolbarCentered: {
    justifyContent: "center",
  },
};

function ResponsiveAppBar({ menuItems }) {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const isScrolled = useScrollCheck();

  const handleOpenNavMenu = (event) => setAnchorElNav(event.currentTarget);
  const handleCloseNavMenu = () => setAnchorElNav(null);

  return (
    <AppBar
      position="fixed"
      sx={{
        ...styles.appBar,
        ...(isScrolled && styles.appBarTransparent),
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={styles.toolbarCentered}>
          <RouterLink to="/">
            <img src={logo} alt="logo" width="100" style={styles.logo} />
          </RouterLink>
          {/* Mobile menu icon */}
          <Box sx={styles.mobileMenuContainer}>
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          </Box>

          {/* Mobile menu */}
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={styles.mobileMenu}
          >
            {menuItems.map((page) => (
              <MenuItem
                key={page.id}
                onClick={handleCloseNavMenu}
                component={RouterLink}
                to={page.path === "/" ? "/" : `/${page.path.toLowerCase()}`}
              >
                {page.label}
              </MenuItem>
            ))}
          </Menu>

          {/* Desktop menu items */}
          <Box sx={styles.desktopMenu}>
            {menuItems.map((page) => (
              <Button
                key={page.id}
                component={RouterLink}
                to={page.path === "/" ? "/" : `/${page.path.toLowerCase()}`}
              >
                {page.label}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
