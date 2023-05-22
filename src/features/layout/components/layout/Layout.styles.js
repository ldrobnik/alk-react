import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { grey, orange } from "@mui/material/colors";

export const RootContainer = styled("div")({
  display: "flex",
  "::selection, *::selection": {
    backgroundColor: orange[700],
    color: grey[50],
  },
});

export const SidebarContainer = styled(Box)(({ theme }) => ({
  height: "100vh",
  width: theme.spacing(6),
  position: "fixed",
  flexDirection: "column",
}));

export const MainPanel = styled("div")(({ theme }) => ({
  marginLeft: theme.spacing(6),
  minHeight: "100vh",
  width: "100%",
  padding: theme.spacing(3),
}));
