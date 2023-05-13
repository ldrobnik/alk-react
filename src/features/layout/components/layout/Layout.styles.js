import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

export const RootContainer = styled("div")({
  display: "flex",
});

export const SidebarContainer = styled(Box)(({ theme }) => ({
  height: "100vh",
  width: theme.spacing(6),
  position: "fixed",
  backgroundColor: theme.palette.grey[100],
  flexDirection: "column",
}));

export const MainPanel = styled(Container)(({ theme }) => ({
  marginLeft: theme.spacing(6),
  minHeight: "100vh",
  width: "100%",
  padding: theme.spacing(2),
}));
