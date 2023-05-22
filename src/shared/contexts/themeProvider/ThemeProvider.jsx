import CssBaseline from "@mui/material/CssBaseline";
import { orange, grey } from "@mui/material/colors";

import {
  createTheme,
  ThemeProvider,
  responsiveFontSizes,
} from "@mui/material/styles";

let theme = createTheme({
  palette: {
    primary: {
      main: orange[700],
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
