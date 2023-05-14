import { useEffect } from "react";

import Layout from "../features/layout/components/layout/Layout";
import PostList from "../features/newsfeed/components/postList/PostList";

export default function Home() {
  useEffect(() => {
    document.title = "Instaclone - Home";
  }, []);

  return (
    <Layout>
      <PostList />
    </Layout>
  );
}
