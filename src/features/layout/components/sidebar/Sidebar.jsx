import { Link } from "react-router-dom";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";

import { SIDEBAR_BUTTONS } from "../../../../constants";

const buttonIcons = {
  home: <HomeIcon />,
  explore: <SearchIcon />,
};

export default function Sidebar() {
  return (
    <ToggleButtonGroup orientation="vertical" value="home" exclusive>
      {SIDEBAR_BUTTONS.map((button) => {
        return (
          <ToggleButton key={button.value} value={button.value}>
            <Link to={button.path}>{buttonIcons[button.value]}</Link>
          </ToggleButton>
        );
      })}
    </ToggleButtonGroup>
  );
}
