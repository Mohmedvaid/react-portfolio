// Section3.js
import React from "react";
import Grid from "@mui/material/Grid";
import CardComponent from "../../components/CardComponent";
import projects from "../../config/projects";
console.log(projects);

const Section3 = () => {
  return (
    <Grid container spacing={2}>
      {projects.map((project, index) => (
        <Grid item xs={12} sm={6} md={6} lg={6} key={index}>
          <CardComponent
            title={project.name}
            content={project.description}
            image={project.image}
            repoLink={project.repoLink}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default Section3;
