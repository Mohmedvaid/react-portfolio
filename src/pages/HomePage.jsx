import React, { useState, useEffect } from "react";
import { Grid, Typography, Box, Container } from "@mui/material";
import myImage from "../assets/img/me.jpeg";

const styles = {
  root: {
    flexGrow: 1,
    marginTop: 4,
    padding: "20px",
  },
  titleContainer: {
    display: "flex",
    justifyContent: "center", // Center container
    transition: "transform 0.5s ease", // Smooth transition for moving container
  },
  title: {
    fontFamily: "Stalinist One",
  },
  textTitle: {
    fontFamily: "Stalinist One",
    fontWeight: "bold",
    fontSize: "1.5rem",
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
  myImage: {
    maxWidth: "100%",
    height: "auto",
    borderRadius: "3%",
  },
};

const HomePage = () => {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Container sx={styles.root} maxWidth="none">
      <Box
        sx={{
          ...styles.titleContainer,
          transform: hasScrolled ? "translateX(-50%)" : "none", // Move left on scroll
        }}
      >
        <Typography variant="h1" gutterBottom sx={styles.title}>
          I'm Mohmed
        </Typography>
      </Box>

      <Grid container spacing={2}>
        {/* Text Section */}
        <Grid item xs={12} md={7}>
          {" "}
          {/* 70% of the screen */}
          <Typography sx={styles.textTitle}>Software Engineer</Typography>
          <Typography sx={styles.description}>
            I like to develop robust and scalable software products with
            outstanding user experiences.
          </Typography>
          <Box sx={styles.column}>
            <Typography sx={styles.columnText}>
              Highly skilled at progressive enhancement, system architecture &
              software engineering.
            </Typography>
            <Typography sx={styles.columnText}>
              Proven experience in building successful software solutions for
              clients across several countries.
            </Typography>
          </Box>
          <Box sx={styles.column}>
            <Typography sx={styles.columnText}>
              Expert in modern software development practices and technologies.
            </Typography>
            <Typography sx={styles.columnText}>
              Committed to implementing efficient and maintainable code.
            </Typography>
          </Box>
        </Grid>

        {/* Image Section */}
        <Grid item xs={12} md={5}>
          {" "}
          {/* Remaining 30% of the screen for the image */}
          <img src={myImage} alt="Mohmed" style={styles.myImage} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default HomePage;
