// src/pages/PortfolioPage.jsx
import React from "react";
import Grid from "@mui/material/Grid";

import Page from "../components/Page";
import CardComponent from "../components/CardComponent";
import projects from "../data/portfolio";

const PortfolioPage = () => (
  <Page>
    <Grid container spacing={2}>
      {projects.map((project, index) => (
        <Grid item xs={12} sm={6} key={index}>
          <CardComponent
            title={project.name}
            content={project.description}
            image={project.image}
            repoLink={project.repoLink}
          />
        </Grid>
      ))}
    </Grid>
  </Page>
);

export default PortfolioPage;
