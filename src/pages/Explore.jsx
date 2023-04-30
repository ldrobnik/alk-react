import Typography from "@mui/material/Typography";
import { FormattedMessage } from "react-intl";

const Explore = () => {
  return (
    <Typography variant="h2" component="h1">
      <FormattedMessage id="explore.title" defaultMessage={"Explore"} />
    </Typography>
  );
};

export default Explore;
