import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#1e1e1e", // Dark greenish-gray for background
      paper: "#2c3e50", // Complementary darker shade
    },
    primary: {
      main: "#56c288", // Soft green for primary actions and highlights
    },
    cta: {
      main: "#56c288", // Brighter green for call-to-action buttons
      hover: "#57d299", // Slightly darker on hover
    },
    text: {
      primary: "#ffffff",
      secondary: "#a1a1a1",
    },
  },
  typography: {
    fontFamily: "Silkscreen, sans-serif",
    h1: {
      fontFamily: "Stalinist One",
      fontWeight: 700,
      fontSize: "3.5rem",
    },
    h2: {
      fontFamily: "Stalinist One",
      fontSize: "2.2rem",
    },
    h3: {
      fontSize: "1.8rem",
    },
    h6: {
      fontWeight: 500,
    },
    body1: {
      fontSize: "1rem",
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "rgba(144, 238, 144, 0.3)", // Light greenish background, mostly transparent
          boxShadow: "none",
          transition: "all 0.5s ease",
          borderRadius: "0", // No rounded corners
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          color: "white",
        },
      },
    },
  },
});

export default theme;
