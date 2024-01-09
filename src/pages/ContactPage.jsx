// src/pages/ContactPage.jsx
import React from "react";
import { Box, Typography, Link, Grid, Paper, IconButton } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import DescriptionIcon from "@mui/icons-material/Description";

import FadeInAnimation from "../components/Animations/FadeInAnimation";
import SlideInAnimation from "../components/Animations/SlideInAnimation";
import ZoomInAnimation from "../components/Animations/ZoomInAnimation";
import RotateInAnimation from "../components/Animations/RotateInAnimation";

const Contact = () => (
  <Box sx={{ p: 4 }}>
    <FadeInAnimation>
      <Typography
        variant="h4"
        textAlign="center"
        sx={{ mb: 4, fontWeight: "bold" }}
      >
        Let's Get In Touch!
      </Typography>
    </FadeInAnimation>

    <Grid container spacing={2} justifyContent="center">
      <Grid item xs={12} md={6} lg={4}>
        <SlideInAnimation>
          <ItemWithIcon
            icon={<PhoneIcon fontSize="large" />}
            label="Phone"
            content={<Link href="tel:+1(312)975 2811">+1(312)975 2811</Link>}
          />
        </SlideInAnimation>
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <ZoomInAnimation>
          <ItemWithIcon
            icon={<EmailIcon fontSize="large" />}
            label="Email"
            content={
              <Link href="mailto:Mohmedvaid@gmail.com">
                Mohmedvaid@gmail.com
              </Link>
            }
          />
        </ZoomInAnimation>
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <SlideInAnimation direction="right">
          <ItemWithIcon
            icon={<DescriptionIcon fontSize="large" />}
            label="PDF Resume (Open In Browser)"
            content={
              <Link href="assets/resume/Mohmedhusain_Vaid_Resume.pdf">
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
              <Link href="assets/resume/Mohmedhusain_Vaid_Resume.docx">
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
          href="https://www.linkedin.com/in/mohmedhusain-v-0374b2128/"
          target="_blank"
          rel="noreferrer"
          color="primary"
        >
          <LinkedInIcon fontSize="large" />
        </IconButton>
        <IconButton
          href="https://github.com/Mohmedvaid/"
          target="_blank"
          rel="noreferrer"
          color="inherit"
        >
          <GitHubIcon fontSize="large" />
        </IconButton>
      </FadeInAnimation>
    </Box>
  </Box>
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
