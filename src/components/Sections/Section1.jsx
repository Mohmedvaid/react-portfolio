import React from "react";
import Grid from "@mui/material/Grid";

import Description from "../../components/Description";
import ScratchOff from "../../components/ScratchOff";

import topImage from "../../assets/img/me.jpeg";
import revealImage from "../../assets/img/me.png";

const styles = {
  scratchOffSize: {
    width: "100%",
    height: "500px",
  },
};

const Section1 = () => (
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
);

export default Section1;
