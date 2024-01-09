// src/components/Description.jsx
import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import TypingEffect from "../components/TypingEffect";
import { description } from "../config/content";

const styles = {
  root: {
    display: "flex",
    justifyContent: "center", // Center container
    transition: "transform 0.5s ease", // Smooth transition for moving container
    // alignItems: "center",
    flexDirection: "column",
  },

  textTitle: {
    fontFamily: "Silkscreen, sans-serif",
    fontWeight: "bold",
    fontSize: "3.7rem",
    marginBottom: "100px",
  },
  description: {
    fontFamily: "Silkscreen, sans-serif",
    marginBottom: "100px",
    fontSize: "1.2rem",
    textAlign: "right",
  },
  column: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "30%", // Ensures columns span the full height
  },
  columnText: {
    width: "50%",
    alignSelf: "flex-end", // Aligns the first column text to the end (right)
  },
  columnTextSecond: {
    width: "50%",
    alignSelf: "flex-start", // Aligns the second column text to the start (left)
  },
};

const HomePage = () => {
  return (
    <Grid item xs={12} md={7} sx={styles.root}>
      {/* 70% of the screen */}
      <TypingEffect sx={styles.textTitle}>{description.title}</TypingEffect>
      <Typography sx={styles.description}>{description.text}</Typography>
    </Grid>
  );
};

export default HomePage;
