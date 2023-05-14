import CssBaseline from "@mui/material/CssBaseline";
import { pink, orange } from "@mui/material/colors";

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
    secondary: {
      main: orange[500],
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
