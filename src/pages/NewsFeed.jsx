import { useEffect } from "react";
import Typography from "@mui/material/Typography";
import { FormattedMessage } from "react-intl";

import usePhotos from "../shared/hooks/usePhotos";

const NewsFeed = () => {
  const { data, isLoading } = usePhotos();

  useEffect(() => {
    console.log(data, isLoading);
  }, [data, isLoading]);

  return (
    <Typography variant="h2" component="h1">
      <FormattedMessage id="newsfeed.title" defaultMessage={"News Feed"} />
    </Typography>
  );
};

export default NewsFeed;
