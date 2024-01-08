import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import ZigzagLine from "../../components/SVG/ZigzagLine";
import { section2 } from "../../config/content";

const { design, engineering } = section2;

const styles = {
  textTitle: {
    fontFamily: "Stalinist One",
    fontWeight: "bold",
    fontSize: "2.5rem",
    marginBottom: "20px",
  },
  description: {
    marginBottom: "20px",
  },
  column: {
    display: "flex",
    justifyContent: "space-between",
  },
  columnText: {
    width: "48%", // Each column takes roughly half the space
  },
  newSection: {
    marginTop: "40px",
    padding: "20px",
    position: "relative",
    height: "100vh", // Full viewport height
  },
  zigzagLine: {
    // Base style for SVG zigzag lines
    stroke: "rgba(245, 245, 245, 0.7)", // Slightly transparent white
    strokeWidth: "2", // Increase line thickness
    fontSize: "50px", // Increase font size
    opacity: "0.5", // Slightly transparent
  },
  zigzagPosition1: {
    position: "absolute",
    top: "10%", // Adjust positioning
    left: "5%", // Adjust positioning
    transform: "rotate(20deg)", // Example rotation
  },
  zigzagPosition2: {
    position: "absolute",
    top: "20%", // Adjust positioning
    right: "17%", // Adjust positioning
    transform: "rotate(30deg)", // Different example rotation
  },
  zigzagPosition3: {
    position: "absolute",
    top: "60%", // Adjust positioning
    right: "70%", // Adjust positioning
    transform: "rotate(-15deg)", // Different example rotation
  },
  secondSection: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100%", // Full viewport height
    // add space between the two columns
    gap: 5,
  },
  aboutText: {
    fontFamily: "Silkscreen, sans-serif",
    fontWeight: "bold",
    fontSize: "1rem",
    marginBottom: "20px",
  },
  imagePlaceholder: {
    height: "150px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f5f5f5",
    marginBottom: "20px",
  },
};

const HomePage = () => {
  return (
    <Box position="relative" sx={styles.newSection}>
      <ZigzagLine style={{ ...styles.zigzagLine, ...styles.zigzagPosition1 }} />
      <ZigzagLine style={{ ...styles.zigzagLine, ...styles.zigzagPosition2 }} />
      <ZigzagLine style={{ ...styles.zigzagLine, ...styles.zigzagPosition3 }} />
      {/* section 2 */}
      <Grid container sx={styles.secondSection}>
        <Grid item xs={12} md={6} sx={styles.secondSectionItem}>
          {/* title */}
          {/* placeholder image */}
          <Box sx={styles.imagePlaceholder}>Image</Box>

          <Typography sx={styles.textTitle} align="center">
            {design.title}
          </Typography>
          <Typography sx={styles.aboutText} align="center">
            {design.text}
          </Typography>
        </Grid>
        <Grid item xs={12} md={6} sx={styles.secondSectionItem}>
          {/* title */}
          <Typography sx={styles.textTitle} align="center">
            {engineering.title}
          </Typography>
          <Typography sx={styles.aboutText} align="center">
            {engineering.text}
          </Typography>
          {/* placeholder image */}
          <Box sx={styles.imagePlaceholder}>Image</Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HomePage;
