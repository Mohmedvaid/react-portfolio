import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import ZigzagLine from "../../components/SVG/ZigzagLine";
import ParallaxWrapper from "../../components/ParallaxWrapper";
import { section2 } from "../../data/home";
import reactLogo from "../../assets/img/react.png";

import reduxLogo from "../../assets/img/redux.png";
import psLogo from "../../assets/img/ps.png";
import nodeLogo from "../../assets/img/node.png";
import mongoLogo from "../../assets/img/mongo.png";
import expressLogo from "../../assets/img/express.png";
import pythonLogo from "../../assets/img/python.png";
import brushStrokeImage from "../../assets/img/brushStroke.png";

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
    overflowX: "hidden", // Hide overflowing elements
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
    top: "70%", // Adjust positioning
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
    // backgroundColor: "#f5f5f5",
    marginBottom: "20px",
    gap: 10,
  },
  designLogos: {
    width: "100px",
    display: "flex",
    justifyContent: "space-between",
  },
  brushStrokeBackground: {
    backgroundImage: `url(${brushStrokeImage})`,
    backgroundSize: "cover", // Ensure the image covers the entire element
    backgroundPosition: "center", // Center the image
    backgroundRepeat: "no-repeat", // Prevent the image from repeating
  },
};

const Section2 = () => {
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
          {/* add shadow */}
          <ParallaxWrapper
            speed={10}
            translateY={[-20, 20]}
            translateX={["70px", "1px"]}
          >
            <Box
              sx={{
                ...styles.imagePlaceholder,
                ...styles.brushStrokeBackground,
              }}
            >
              <img src={nodeLogo} alt="react logo" width="110px" />
              <img src={reactLogo} alt="react logo" width="70px" />
              <img src={reduxLogo} alt="photoshop logo" width="70px" />
              <img src={psLogo} alt="redux logo" width="70px" />
            </Box>
          </ParallaxWrapper>

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
          <ParallaxWrapper
            speed={10}
            translateY={[-20, 20]}
            translateX={["1px", "70px"]}
          >
            <Box
              sx={{
                ...styles.imagePlaceholder,
                ...styles.brushStrokeBackground,
              }}
            >
              <img src={expressLogo} alt="express js logo" width="200px" />
              <img src={pythonLogo} alt="python logo" width="70px" />
              <img src={mongoLogo} alt="mongo db logo" width="200px" />
            </Box>
          </ParallaxWrapper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Section2;
