import { styled } from "@mui/material/styles";

export const ListWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "100%",
  padding: theme.spacing(2),
  gap: theme.spacing(2),
}));
