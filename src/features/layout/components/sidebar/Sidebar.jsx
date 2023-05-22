import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import Tooltip from "@mui/material/Tooltip";

import { SIDEBAR_BUTTONS, capitalizeFirstLetter } from "../../../../constants";

const buttonIcons = {
  home: <HomeIcon />,
  explore: <SearchIcon />,
};

export default function Sidebar() {
  const location = useLocation();
  const navigate = useNavigate();

  const [currentPath, setCurrentPath] = useState("");
  const [currentPage, setCurrentPage] = useState("home");

  useEffect(() => {
    setCurrentPath(location.pathname);
  }, [location]);

  useEffect(() => {
    // Identifies the sidebar button to be active based on the current path.
    const currentButton = SIDEBAR_BUTTONS.find(
      (button) => button.path === currentPath
    );
    // Sets the current page according to the index.
    if (currentButton) {
      setCurrentPage(currentButton.value);
    }
  }, [currentPath]);

  return (
    <ToggleButtonGroup
      color="primary"
      orientation="vertical"
      value={currentPage}
      sx={{
        padding: 0,
      }}
      exclusive
    >
      {SIDEBAR_BUTTONS.map((button) => {
        const capitalizedTitle = capitalizeFirstLetter(button.value);
        return (
          <ToggleButton
            key={button.value}
            value={button.value}
            onClick={() => navigate(button.path)}
            sx={{
              border: "none",
              borderRadius: "0%",
              width: "100%",
              height: "100%",
              display: "block",
              margin: 0,
            }}
          >
            <Tooltip title={capitalizedTitle} placement="right" arrow>
              {buttonIcons[button.value]}
            </Tooltip>
          </ToggleButton>
        );
      })}
    </ToggleButtonGroup>
  );
}
