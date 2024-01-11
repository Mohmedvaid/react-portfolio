import React from "react";
import { Link } from "react-router-dom";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import CardComponent from "../../components/CardComponent";
import projects from "../../data/portfolio";

const fewProjects = projects.slice(0, 3); // Assuming you have at least 3 projects

const Section3 = () => (
  <Box component="section" id="portfolio" sx={{ padding: 2 }}>
    <Grid container spacing={4}>
      <Grid item xs={12}>
        <Typography variant="h2" textAlign="center" gutterBottom>
          Portfolio
        </Typography>
      </Grid>

      {fewProjects.map((project, index) => (
        // Adjusted breakpoints for responsive layout
        <Grid item sm={12} md={6} lg={4} key={project.id || index}>
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
