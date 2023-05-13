import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

export const RootContainer = styled("div")({
  display: "flex",
});

export const SidebarContainer = styled(Box)(({ theme }) => ({
  height: "100vh",
  width: theme.spacing(6),
  backgroundColor: theme.palette.grey[100],
  flexDirection: "column",
}));

export const MainPanel = styled("div")(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
}));
