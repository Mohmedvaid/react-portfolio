// src/components/Title.jsx
import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import useScrollCheck from "../hooks/useScrollCheck";

import { title } from "../data/home";

const styles = {
  titleContainer: {
    display: "flex",
    justifyContent: "center", // Center container
    transition: "transform 0.5s ease", // Smooth transition for moving container
  },
};

const Title = () => {
  const hasScrolled = useScrollCheck();

  return (
    <Box
      sx={{
        ...styles.titleContainer,
        transform: hasScrolled ? "translateX(-50%)" : "none", // Move left on scroll
      }}
    >
      <Typography variant="h1" gutterBottom>
        {title}
      </Typography>
    </Box>
  );
};

export default Title;
