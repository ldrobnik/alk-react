import { styled } from "@mui/material/styles";
import Container from "@mui/material/Container";

export const ListWrapper = styled(Container)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "calc(100vw - 48px)",
  padding: theme.spacing(2),
  gap: theme.spacing(2),
}));
