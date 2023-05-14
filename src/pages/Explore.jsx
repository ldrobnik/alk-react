import { useEffect } from "react";

import ImageGrid from "../features/explore/components/imageGrid/ImageGrid";
import Layout from "../features/layout/components/layout/Layout";

export default function Explore() {
  useEffect(() => {
    document.title = "Instaclone - Explore";
  }, []);
  return (
    <Layout>
      <ImageGrid />
    </Layout>
  );
}
