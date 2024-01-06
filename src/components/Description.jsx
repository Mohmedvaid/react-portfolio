import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import TypingEffect from "../components/TypingEffect";

const styles = {
  root:{
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
    marginBottom: "100px",
    fontSize: "1.7rem",
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
      <TypingEffect sx={styles.textTitle}>Software Engineer</TypingEffect>
      <Typography sx={styles.description}>
        I like to develop robust and scalable software products with outstanding
        user experiences.
      </Typography>
    </Grid>
  );
};

export default HomePage;
