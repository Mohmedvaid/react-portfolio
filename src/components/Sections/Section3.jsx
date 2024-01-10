// Section3.js
import React from "react";
import { Link } from "react-router-dom";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import CardComponent from "../../components/CardComponent";
import projects from "../../data/portfolio";

const fewProjects = projects.slice(0, 2);

const styles = {
  root: {
    pb: 10,
  },
};

const Section3 = () => (
  <Box component="section" py={10} id="portfolio" sx={styles.root}>
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h2" textAlign="center" gutterBottom>
          Portfolio
        </Typography>
      </Grid>

      {fewProjects.map((project, index) => (
        <Grid item xs={12} sm={6} md={6} lg={6} key={index}>
          <CardComponent
            title={project.name}
            content={project.description}
            image={project.image}
            repoLink={project.repoLink}
          />
        </Grid>
      ))}
      <Grid item xs={12} sx={{ textAlign: "center" }}>
        <Button variant="contained" component={Link} to="/portfolio">
          View More
        </Button>
      </Grid>
    </Grid>
  </Box>
);

export default Section3;
