import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import ZigzagLine from "../../components/SVG/ZigzagLine";
import ParallaxWrapper from "../../components/ParallaxWrapper";
import { section2 } from "../../data/home";

// Icons
import reactIcon from "../../assets/img/react.png";
import reduxIcon from "../../assets/img/redux.png";
import photoshopIcon from "../../assets/img/ps.png";
import nodeIcon from "../../assets/img/node.png";
import mongoIcon from "../../assets/img/mongo.png";
import expressIcon from "../../assets/img/express.png";
import pythonIcon from "../../assets/img/python.png";
import brushStrokeBg from "../../assets/img/brushStroke.png";

const { design, engineering } = section2;

const sectionStyles = {
  sectionContainer: {
    marginTop: "40px",
    padding: "20px",
    position: "relative",
    height: "100vh",
    overflow: "hidden",
  },
  zigzagLine: {
    stroke: "rgba(245, 245, 245, 0.7)",
    strokeWidth: "2",
    fontSize: "50px",
    opacity: "0.5",
    position: "absolute",
  },
  contentGrid: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    gap: 5,
  },
  aboutText: {
    fontFamily: "Silkscreen, sans-serif",
    fontWeight: "bold",
    fontSize: "1rem",
    marginBottom: "20px",
  },
  imageContainer: {
    height: "150px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "20px",
    gap: 10,
    backgroundImage: `url(${brushStrokeBg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  },
  zigzagPositions: [
    { top: "10%", left: "5%", transform: "rotate(20deg)" },
    { top: "20%", right: "17%", transform: "rotate(30deg)" },
    { top: "70%", right: "70%", transform: "rotate(-15deg)" },
  ],
};

const Section2 = () => {
  return (
    <Box sx={sectionStyles.sectionContainer}>
      {sectionStyles.zigzagPositions.map((position, index) => (
        <ZigzagLine
          key={index}
          style={{ ...sectionStyles.zigzagLine, ...position }}
        />
      ))}
      <Grid container sx={sectionStyles.contentGrid}>
        <Grid item xs={12} md={6}>
          <ParallaxWrapper
            speed={10}
            translateY={[-20, 20]}
            translateX={["70px", "1px"]}
          >
            <Box sx={sectionStyles.imageContainer}>
              <img src={nodeIcon} alt="Node.js logo" width="110px" />
              <img src={reactIcon} alt="React logo" width="70px" />
              <img src={reduxIcon} alt="Redux logo" width="70px" />
              <img src={photoshopIcon} alt="Photoshop logo" width="70px" />
            </Box>
          </ParallaxWrapper>
          <Typography variant="h2" align="center" gutterBottom>
            {design.title}
          </Typography>
          <Typography sx={sectionStyles.aboutText} align="center">
            {design.text}
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h2" align="center" gutterBottom>
            {engineering.title}
          </Typography>
          <Typography sx={sectionStyles.aboutText} align="center">
            {engineering.text}
          </Typography>
          <ParallaxWrapper
            speed={10}
            translateY={[-20, 20]}
            translateX={["1px", "70px"]}
          >
            <Box sx={sectionStyles.imageContainer}>
              <img src={expressIcon} alt="Express.js logo" width="200px" />
              <img src={pythonIcon} alt="Python logo" width="70px" />
              <img src={mongoIcon} alt="MongoDB logo" width="200px" />
            </Box>
          </ParallaxWrapper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Section2;
