// src/components/Description.jsx
import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import TypingEffect from "../components/TypingEffect";
import { description } from "../data/home";

const styles = {
  root: {
    display: "flex",
    justifyContent: "center",
    transition: "transform 0.5s ease", // Smooth transition for moving container
    flexDirection: "column",
  },
  textTitle: {
    fontWeight: "bold",
    fontSize: "2.7rem",
    marginBottom: "100px",
    textAlign: "center",
  },
  description: {
    fontSize: "1.2rem",
    textAlign: "center",
  },
};

const HomePage = () => {
  return (
    <Grid item xs={12} md={7} sx={styles.root}>
      {/* 70% of the screen */}
      <TypingEffect variant="h3" sx={styles.textTitle}>
        {description.title}
      </TypingEffect>
      <Typography sx={styles.description}>{description.text}</Typography>
    </Grid>
  );
};

export default HomePage;
