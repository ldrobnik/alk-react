import CircularProgress from "@mui/material/CircularProgress";

import { SpinnerWrapper } from "./CenteredSpinner.styles";

export default function CenteredSpinner() {
  return (
    <SpinnerWrapper>
      <CircularProgress />
    </SpinnerWrapper>
  );
}
