import { createTheme } from "@mui/material/styles";
import { alpha } from "@mui/material";

const lightMode = false;

export default createTheme({
  palette: {
    mode: lightMode ? "light" : "dark",
    background: {
      paper: lightMode ? alpha("#fff", 0.6) : alpha("#000", 0.6),
    },
  },
  typography: {
    fontFamily: ["RobotoMono"].join(","),
    fontSize: 12,
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          paddingLeft: "0 !important",
          paddingRight: "0 !important",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          border: 1,
          borderStyle: "solid",
          borderColor: lightMode ? alpha("#fff", 0.6) : alpha("#000", 0.6),
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          minWidth: 16,
        },
      },
    },
    MuiTable: {
      styleOverrides: {
        root: {
          border: 1,
          borderStyle: "solid",
          borderColor: lightMode ? alpha("#fff", 0.6) : alpha("#000", 0.6),
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          padding: "6px 6px",
        },
      },
    },
  },
});
