import Typography from "@mui/material/Typography";
import { FormattedMessage } from "react-intl";

import Layout from "../features/layout/components/layout/Layout";
import PostList from "../features/newsfeed/components/postList/PostList";

export default function NewsFeed() {
  return (
    <Layout>
      <Typography variant="h2" component="h1">
        <FormattedMessage id="newsfeed.title" defaultMessage="News Feed" />
      </Typography>
      <PostList />
    </Layout>
  );
}
