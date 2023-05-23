import { NavLink } from "react-router-dom";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import Tooltip from "@mui/material/Tooltip";

import { NavButton } from "./Sidebar.styles";

import { SIDEBAR_BUTTONS } from "../../../../constants";
import { capitalizeFirstLetter } from "../../../../utils";

const buttonIcons = {
  home: <HomeIcon />,
  explore: <SearchIcon />,
};

export default function Sidebar() {
  return (
    <ToggleButtonGroup
      color="primary"
      orientation="vertical"
      sx={{
        padding: 0,
      }}
      exclusive
    >
      {SIDEBAR_BUTTONS.map((button) => {
        const capitalizedTitle = capitalizeFirstLetter(button.value);
        return (
          <NavButton key={button.value} component={NavLink} to={button.path}>
            <Tooltip title={capitalizedTitle} placement="right" arrow>
              {buttonIcons[button.value]}
            </Tooltip>
          </NavButton>
        );
      })}
    </ToggleButtonGroup>
  );
}
