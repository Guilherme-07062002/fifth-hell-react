import { createTheme } from "@mui/material";

const temaPadrao = createTheme({
  palette: {
    background: {
      default: "#FFFFFF",
      paper: "rgb(229,229,229)",
    },
    primary: {
      main: "#ff623b",
      contrastText: "#FFFF",
    },
    secondary: {
      main: "#535257",
    },
    text: {
      primary: "#535257",
      secondary: "#FFFFF",
    },
  },
  typography: {
    fontFamily: "PF,sans-serif",
    fontSize: 18,
    htmlFontSize: 16,
  },
});

export default temaPadrao;
