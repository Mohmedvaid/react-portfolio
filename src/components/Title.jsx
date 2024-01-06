import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import useScrollCheck from "../hooks/useScrollCheck";

const styles = {
  titleContainer: {
    display: "flex",
    justifyContent: "center", // Center container
    transition: "transform 0.5s ease", // Smooth transition for moving container
  },
  title: {
    fontFamily: "Stalinist One",
  },
  textTitle: {
    fontFamily: "Stalinist One",
    fontWeight: "bold",
    fontSize: "1.5rem",
    marginBottom: "20px",
  },
};

const HomePage = () => {
  const hasScrolled = useScrollCheck();

  return (
    <Box
      sx={{
        ...styles.titleContainer,
        transform: hasScrolled ? "translateX(-50%)" : "none", // Move left on scroll
      }}
    >
      <Typography variant="h1" gutterBottom sx={styles.title}>
        I'm Mohmed
      </Typography>
    </Box>
  );
};

export default HomePage;
