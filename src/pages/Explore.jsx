import usePageTitle from "../shared/hooks/usePageTitle";
import ImageGrid from "../features/explore/components/imageGrid/ImageGrid";
import Layout from "../features/layout/components/layout/Layout";

export default function Explore() {
  usePageTitle("Explore");

  return (
    <Layout>
      <ImageGrid />
    </Layout>
  );
}
