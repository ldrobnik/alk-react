import Typography from "@mui/material/Typography";
import { FormattedMessage } from "react-intl";

import Layout from "../features/layout/components/layout/Layout";

const NewsFeed = () => {
  return (
    <Layout>
      <Typography variant="h2" component="h1">
        <FormattedMessage id="newsfeed.title" defaultMessage="News Feed" />
      </Typography>
    </Layout>
  );
};

export default NewsFeed;
