import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import CardComponent from "../components/CardComponent";
import projects from "../config/projects";

const styles = {
  root: {
    flexGrow: 1,
    marginTop: 4,
    padding: "20px",
    height: "100vh", // Full viewport height
  },
};

const PortfolioPage = () => {
  return (
    <Container sx={styles.root} maxWidth="none">
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
    </Container>
  );
};

export default PortfolioPage;
