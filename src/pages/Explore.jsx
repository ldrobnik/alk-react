import Typography from "@mui/material/Typography";
import { FormattedMessage } from "react-intl";

import ImageGrid from "../features/explore/components/imageGrid/ImageGrid";
import Layout from "../features/layout/components/layout/Layout";

export default function Explore() {
  return (
    <Layout>
      <ImageGrid />
    </Layout>
  );
}
