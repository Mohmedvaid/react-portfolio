import React from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

import myImage from "../assets/img/me.jpeg";
import Title from "../components/Title";
import Description from "../components/Description";
import ScratchOff from "../components/ScratchOff";
import topImage from "../assets/img/me.jpeg";
import revealImage from "../assets/img/me.png";

const styles = {
  root: {
    flexGrow: 1,
    marginTop: 4,
    padding: "20px",
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
};

const HomePage = () => {
  return (
    <Container sx={styles.root} maxWidth="none">
      <Title />

      <Grid container spacing={2}>
        {/* Text Section */}
        <Description />

        {/* Image Section */}
        <Grid item xs={12} md={5}>
          <ScratchOff
            imageSrc={topImage}
            revealImageSrc={revealImage}
            containerWidth={styles.scratchOffSize.width}
            containerHeight={styles.scratchOffSize.height}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default HomePage;
