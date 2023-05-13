import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
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
  const location = useLocation();
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
    <ToggleButtonGroup orientation="vertical" value={currentPage} exclusive>
      {SIDEBAR_BUTTONS.map((button) => {
        return (
          <ToggleButton
            key={button.value}
            value={button.value}
            sx={{
              border: "none",
              borderRadius: "0%",
            }}
          >
            <Link to={button.path}>{buttonIcons[button.value]}</Link>
          </ToggleButton>
        );
      })}
    </ToggleButtonGroup>
  );
}
