import React from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

import Title from "../components/Title";
import Description from "../components/Description";
import ScratchOff from "../components/ScratchOff";
import Box from "@mui/material/Box";
import SvgIcon from "@mui/material/SvgIcon";

import topImage from "../assets/img/me.jpeg";
import revealImage from "../assets/img/me.png";

const styles = {
  root: {
    flexGrow: 1,
    marginTop: 4,
    padding: "20px",
    height: "100vh", // Full viewport height
  },
  textTitle: {
    fontFamily: "Silkscreen, sans-serif",
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
  scratchOffSize: {
    width: "100%", // Adjust as needed
    height: "500px", // Adjust as needed
  },
  newSection: {
    marginTop: "40px",
    padding: "20px",
    position: "relative",
    height: "100vh", // Full viewport height
    // backgroundColor: "#f5f5f5", // Background color
  },
  decorativeBox: {
    width: "20px", // Increase box size
    height: "20px", // Increase box size
    border: "2px solid rgba(245, 245, 245, 0.7)", // Slightly transparent white border
    margin: "10px", // Add more margin between boxes
    borderRadius: "50%", // Make the boxes circular
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
    top: "40%", // Adjust positioning
    right: "10%", // Adjust positioning
    transform: "rotate(-45deg)", // Different example rotation
  },
  secondSection: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100%", // Full viewport height
  },
};

const ZigzagLine = ({ style }) => (
  <SvgIcon style={style} viewBox="0 0 800 160">
    <path
      d="M 0,80 L 160,40 L 320,120 L 480,40 L 640,120 L 800,40"
      fill="none"
      stroke="#f5f5f5"
      strokeWidth="100"
    />
  </SvgIcon>
);

const HomePage = () => {
  return (
    <Container sx={styles.root} maxWidth="none">
      <Title />
      <Grid container spacing={2}>
        <Description />
        <Grid item xs={12} md={5}>
          <ScratchOff
            imageSrc={topImage}
            revealImageSrc={revealImage}
            containerWidth={styles.scratchOffSize.width}
            containerHeight={styles.scratchOffSize.height}
          />
        </Grid>
      </Grid>

      {/* second section */}
      <Box position="relative" sx={styles.newSection}>
        <ZigzagLine
          style={{ ...styles.zigzagLine, ...styles.zigzagPosition1 }}
        />
        <ZigzagLine
          style={{ ...styles.zigzagLine, ...styles.zigzagPosition2 }}
        />
        <Grid container sx={styles.secondSection}>
          <Grid item xs={12} md={6}>
            <p style={styles.aboutText}>Here's a little bit about me...</p>
          </Grid>
          <Grid item xs={12} md={6}>
            <p style={styles.aboutText}>Continuing my journey...</p>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default HomePage;
