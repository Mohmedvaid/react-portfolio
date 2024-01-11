import React from "react";
import Grid from "@mui/material/Grid";

import Description from "../../components/Description";
import ScratchOff from "../../components/ScratchOff";

import topImage from "../../assets/img/me.jpeg";
// import revealImage from "../../assets/img/me.png";
// import revealImage from "../../assets/img/code.png";
import revealImage from "../../assets/img/code_2.png";

const revealCode = 
`<head>

  <!-- Head: Filled with endless innovative circuits and bright ideas. -->
  <title>The Adventure of My Mind</title>

</head>

<body>

  <daily-life>
    <!-- Balancing the energy intake (pizza) with some fitness magic! -->
  </daily-life>

  <mind-habits>
    Brain's Status: Solving puzzles. Expert in dodging life's little errors.
    Adventure Log: Charting new paths and avoiding routine ruts.
  </mind-habits>
  
</body>`;

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
        revealCode={revealCode}
        containerWidth={styles.scratchOffSize.width}
        containerHeight={styles.scratchOffSize.height}
      />
    </Grid>
  </Grid>
);

export default Section1;
