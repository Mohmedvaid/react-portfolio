import React from "react";
import Box from "@mui/material/Box";
import PropTypes from "prop-types";

const ScrollSnapSection = ({ children, sx }) => {
  const defaultStyles = {
    height: "100vh",
    scrollSnapAlign: "start",
  };

  return <Box sx={{ ...defaultStyles, ...sx }}>{children}</Box>;
};

ScrollSnapSection.propTypes = {
  children: PropTypes.node.isRequired,
  sx: PropTypes.object,
};

export default ScrollSnapSection;
