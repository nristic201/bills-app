import { deepPurple, green, grey, red, yellow } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

export const customTheme = createTheme({
  palette: {
    primary: {
      main: deepPurple[500],
      dark: deepPurple[900],
      light: deepPurple[50],
    },
    secondary: {
      main: "#A3D139",
      dark: "#626615",
      light: "rgba(163, 209, 57, 0.2)",
    },
    warning: {
      main: yellow[500],
      light: yellow[100],
      dark: yellow[800],
    },
    error: {
      main: red[500],
      light: red[50],
      dark: red[900],
    },
    info: {
      main: grey[500],
      dark: grey[900],
      light: grey[50],
    },
    success: {
      main: green[500],
      light: green[50],
      dark: green[900],
    },
  },
});
