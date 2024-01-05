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
    text: {
      primary: "#ffffff",
      secondary: "#a1a1a1",
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
    h1: {
      fontWeight: 700,
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
          backgroundColor: "#2e3e4e", // Darker shade for AppBar
          color: "#ffffff",
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
