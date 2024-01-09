// src/pages/HomePage.jsx
import React from "react";

import Container from "@mui/material/Container";

const styles = {
  root: {
    flexGrow: 1,
    marginTop: 4,
    padding: "20px",
    height: "100vh", // Full viewport height
    paddingBottom: "100px",
  },
};

const Page = ({ children }) => (
  <Container sx={styles.root} maxWidth="none">
    {children}
  </Container>
);

export default Page;
