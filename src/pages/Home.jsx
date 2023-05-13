import Typography from "@mui/material/Typography";
import { FormattedMessage } from "react-intl";

import Layout from "../features/layout/components/layout/Layout";
import PostList from "../features/newsfeed/components/postList/PostList";

export default function Home() {
  return (
    <Layout>
      <PostList />
    </Layout>
  );
}
