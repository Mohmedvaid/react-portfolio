// src/pages/ContactPage.jsx
import React from "react";
import { Box, Typography, Link, Grid, Paper, IconButton } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import DescriptionIcon from "@mui/icons-material/Description";

import Page from "../components/Page";
import FadeInAnimation from "../components/Animations/FadeInAnimation";
import SlideInAnimation from "../components/Animations/SlideInAnimation";
import ZoomInAnimation from "../components/Animations/ZoomInAnimation";
import RotateInAnimation from "../components/Animations/RotateInAnimation";

import { title, contact } from "../data/contact";

const email = contact.email;
const emailHref = `mailto:${email}`;
const linkedIn = contact.linkedIn;
const github = contact.github;
const resumeDoc = contact.resumeDoc;
const resumePDF = contact.resumePDF;
const styles = {
  title: {
    marginBottom: 4,
    fontWeight: "bold",
  },
};

const Contact = () => (
  <Page>
    <FadeInAnimation>
      <Typography variant="h4" textAlign="center" sx={styles.title}>
        {title}
      </Typography>
    </FadeInAnimation>

    <Grid container spacing={2} justifyContent="center">
      <Grid item xs={12} md={6} lg={4}>
        <ZoomInAnimation>
          <ItemWithIcon
            icon={<EmailIcon fontSize="large" />}
            label="Email"
            content={<Link href={emailHref}>{email}</Link>}
          />
        </ZoomInAnimation>
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <SlideInAnimation direction="right">
          <ItemWithIcon
            icon={<DescriptionIcon fontSize="large" />}
            label="PDF Resume (Open In Browser)"
            content={
              <Link href={resumePDF} target="_blank" rel="noreferrer">
                Open
              </Link>
            }
          />
        </SlideInAnimation>
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <RotateInAnimation>
          <ItemWithIcon
            icon={<DescriptionIcon fontSize="large" />}
            label="Word Doc Resume (Download)"
            content={
              <Link href={resumeDoc} download>
                Download
              </Link>
            }
          />
        </RotateInAnimation>
      </Grid>
    </Grid>

    <Box textAlign="center" sx={{ mt: 4 }}>
      <FadeInAnimation>
        <Typography variant="h6" sx={{ mb: 2 }}>
          Social Media
        </Typography>
        <IconButton
          href={linkedIn}
          target="_blank"
          rel="noreferrer"
          color="primary"
        >
          <LinkedInIcon fontSize="large" />
        </IconButton>
        <IconButton
          href={github}
          target="_blank"
          rel="noreferrer"
          color="inherit"
        >
          <GitHubIcon fontSize="large" />
        </IconButton>
      </FadeInAnimation>
    </Box>
  </Page>
);

const ItemWithIcon = ({ icon, label, content }) => (
  <Paper
    elevation={3}
    sx={{ p: 2, display: "flex", alignItems: "center", gap: 2 }}
  >
    {icon}
    <Box>
      <Typography variant="subtitle1">{label}</Typography>
      <Typography variant="body1">{content}</Typography>
    </Box>
  </Paper>
);

export default Contact;
