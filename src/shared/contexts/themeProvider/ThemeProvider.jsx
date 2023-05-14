import CssBaseline from "@mui/material/CssBaseline";
import { pink, orange, grey } from "@mui/material/colors";

import {
  createTheme,
  ThemeProvider,
  responsiveFontSizes,
} from "@mui/material/styles";

let theme = createTheme({
  palette: {
    primary: {
      main: pink[500],
    },
    warning: {
      main: orange[500],
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: grey[200],
        },
      },
    },
  },
});
theme = responsiveFontSizes(theme);

export default function CustomThemeProvider({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
