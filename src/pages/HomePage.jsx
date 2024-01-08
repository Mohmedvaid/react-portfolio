import React from "react";
import Container from "@mui/material/Container";

import Title from "../components/Title";
import Section1 from "../components/Sections/Section1";
import Section2 from "../components/Sections/Section2";

const styles = {
  root: {
    flexGrow: 1,
    marginTop: 4,
    padding: "20px",
    height: "100vh", // Full viewport height
  },
  textTitle: {
    // fontFamily: "Silkscreen, sans-serif",
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
  zigzagPosition3: {
    position: "absolute",
    top: "60%", // Adjust positioning
    right: "70%", // Adjust positioning
    transform: "rotate(-15deg)", // Different example rotation
  },
  secondSection: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%", // Full viewport height
  },

  aboutText: {
    fontFamily: "Silkscreen, sans-serif",
    fontWeight: "bold",
    fontSize: "1rem",
    marginBottom: "20px",
  },
};

const HomePage = () => {
  return (
    <Container sx={styles.root} maxWidth="none">
      <Title />
      <Section1 />
      <Section2 />
    </Container>
  );
};

export default HomePage;
