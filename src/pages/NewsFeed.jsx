import Typography from "@mui/material/Typography";
import { FormattedMessage } from "react-intl";

const NewsFeed = () => {
  return (
    <Typography variant="h2" component="h1">
      <FormattedMessage id="explore.newsfeed" defaultMessage={"News Feed"} />
    </Typography>
  );
};

export default NewsFeed;
