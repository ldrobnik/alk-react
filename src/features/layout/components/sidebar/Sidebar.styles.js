import { styled } from "@mui/material/styles";
import ToggleButton from "@mui/material/ToggleButton";
import { orange } from "@mui/material/colors";

export const NavButton = styled(ToggleButton)({
  border: "none",
  borderRadius: "0%",
  width: "100%",
  height: "100%",
  display: "block",
  margin: 0,
  "&.active": {
    color: orange[700],
  },
});
