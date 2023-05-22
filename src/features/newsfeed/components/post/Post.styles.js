import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import CardMedia from "@mui/material/CardMedia";

export const PostWrapper = styled(Box)({
  maxWidth: "500px",
});

export const PhotoWrapper = styled(CardMedia)(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    minWidth: "500px",
    minHeight: "500px",
  },
  [theme.breakpoints.down("md")]: {
    minWidth: "1fr",
    minHeight: "1fr",
  },
}));
