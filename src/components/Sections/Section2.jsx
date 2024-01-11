import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

import ZigzagLine from "../../components/SVG/ZigzagLine";
import ParallaxWrapper from "../../components/ParallaxWrapper";
import ImageCarousel from "../../components/ImageCarousel";
import { section2 } from "../../data/home";

// Icons
// import reactIcon from "../../assets/img/react.png";
// import reduxIcon from "../../assets/img/redux.png";
import photoshopIcon from "../../assets/img/ps.png";
// import nodeIcon from "../../assets/img/node.png";
// import mongoIcon from "../../assets/img/mongo.png";
// import expressIcon from "../../assets/img/express.png";
// import pythonIcon from "../../assets/img/python.png";
// import brushStrokeBg from "../../assets/img/brushStroke.png";

import reactIcon from "../../assets/img/new/react.png";
import reduxIcon from "../../assets/img/new/redux.png";
import nodeIcon from "../../assets/img/new/nodejs.png";
import mongoIcon from "../../assets/img/new/mongo.png";
import pythonIcon from "../../assets/img/new/python.png";
import awsIcon from "../../assets/img/new/aws.png";
import azureIcon from "../../assets/img/new/azure.png";
import devopsIcon from "../../assets/img/new/devops.webp";
import linuxIcon from "../../assets/img/new/linux.png";
import neuralNetworkIcon from "../../assets/img/new/nn.png";
import machineLearningIcon from "../../assets/img/new/ml.png";
import jsIcon from "../../assets/img/new/js.png";

const { design, engineering } = section2;

const carouselImages = [
  jsIcon,
  reactIcon,
  nodeIcon,
  reduxIcon,
  pythonIcon,
  mongoIcon,
  awsIcon,
  azureIcon,
  devopsIcon,
  linuxIcon,
  neuralNetworkIcon,
  machineLearningIcon,
  photoshopIcon,
];

const sectionStyles = {
  sectionContainer: {
    marginTop: "40px",
    padding: "20px",
    position: "relative",
    height: "100vh",
    display: "flex", // Flex container
    alignItems: "center", // Centers items vertically in the container
    justifyContent: "center", // Centers items horizontally in the container
  },
  subSectionContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  zigzagLine: {
    stroke: "rgba(245, 245, 245, 0.7)",
    strokeWidth: "2",
    fontSize: "50px",
    opacity: "0.5",
    position: "absolute",
  },
  aboutText: {
    fontFamily: "Silkscreen, sans-serif",
    fontWeight: "bold",
    fontSize: "1rem",
    marginBottom: "20px",
  },
  // imageContainer: {
  //   height: "150px",
  //   display: "flex",
  //   alignItems: "center",
  //   justifyContent: "center",
  //   marginBottom: "20px",
  //   gap: 10,
  //   backgroundImage: `url(${brushStrokeBg})`,
  //   backgroundSize: "cover",
  //   backgroundPosition: "center",
  //   backgroundRepeat: "no-repeat",
  // },
  zigzagPositions: [
    { top: "10%", left: "5%", transform: "rotate(20deg)" },
    { top: "20%", right: "17%", transform: "rotate(30deg)" },
    { top: "70%", right: "70%", transform: "rotate(-15deg)" },
  ],
};

const Section2 = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box sx={sectionStyles.sectionContainer}>
      {sectionStyles.zigzagPositions.map((position, index) => (
        <ZigzagLine
          key={index}
          style={{ ...sectionStyles.zigzagLine, ...position }}
        />
      ))}
      {/* DESIGN */}
      <Grid container spacing={2} sx={sectionStyles.contentGrid}>
        <Grid item xs={12} md={4} sx={sectionStyles.subSectionContainer}>
          <Typography variant="h2" align="center" gutterBottom>
            {design.title}
          </Typography>
          <Typography sx={sectionStyles.aboutText} align="center">
            {design.text}
          </Typography>
        </Grid>

        {/* CAROUSEL */}
        <Grid item xs={12} md={4} sx={sectionStyles.carouselContainer} gap={2}>
          <ImageCarousel
            images={carouselImages}
            orientation={isMobile ? "horizontal" : "vertical"}
          />
        </Grid>

        {/* ENGINEERING */}
        <Grid item xs={12} md={4} sx={sectionStyles.subSectionContainer}>
          <Typography variant="h2" align="center" gutterBottom>
            {engineering.title}
          </Typography>
          <Typography sx={sectionStyles.aboutText} align="center">
            {engineering.text}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Section2;
