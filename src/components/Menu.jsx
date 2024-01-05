import React, { useState, useEffect } from "react";
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
import logo from "../assets/img/logo.png";

const styles = {
  appBar: {
    backgroundColor: "rgba(144, 238, 144, 0.3)", // Light greenish background, mostly transparent
  },
  appBarTransparent: {
    color: "#000000",
    borderRadius: "50px", // Rounded top
    transition: "all 0.5s ease",
    width: "70%",
  },
  appBarSolid: {
    boxShadow: "none",
    transition: "all 0.5s ease",
    borderRadius: "0", // No rounded corners
  },
  logo: {
    marginRight: "20px",
  },
  desktopMenu: {
    flexGrow: 1,
    display: { xs: "none", md: "flex" },
    justifyContent: "flex-end",
  },
  desktopMenuItem: {
    my: 2,
    color: "white",
    display: "block",
  },
  mobileMenu: {
    display: { xs: "block", md: "none" },
  },
  mobileMenuItem: {
    color: "black",
    display: "block",
  },
  mobileMenuContainer: {
    flexGrow: 1,
    display: { xs: "flex", md: "none" },
    justifyContent: "flex-end",
  },
  modileMenuIcon: {
    color: "white",
  },
  toolbarCentered: {
    justifyContent: "center",
  },
};

function ResponsiveAppBar({ menuItems }) {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleOpenNavMenu = (event) => setAnchorElNav(event.currentTarget);
  const handleCloseNavMenu = () => setAnchorElNav(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AppBar
      position="fixed"
      sx={{
        ...styles.appBar,
        ...(!isScrolled ? styles.appBarSolid : styles.appBarTransparent),
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={styles.toolbarCentered}>
          {/* Logo for all sizes */}
          <img src={logo} alt="logo" width="100" style={styles.logo} />

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
                sx={styles.desktopMenuItem}
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
