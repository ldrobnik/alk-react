import usePageTitle from "../shared/hooks/usePageTitle";

import Layout from "../features/layout/components/layout/Layout";
import PostList from "../features/newsfeed/components/postList/PostList";

export default function Home() {
  usePageTitle("Home");

  return (
    <Layout>
      <PostList />
    </Layout>
  );
}
