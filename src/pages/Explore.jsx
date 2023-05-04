import Typography from "@mui/material/Typography";
import { FormattedMessage } from "react-intl";

import Layout from "../features/layout/components/layout/Layout";

const Explore = () => {
  return (
    <Layout>
      <Typography variant="h2" component="h1">
        <FormattedMessage id="explore.title" defaultMessage="Explore" />
      </Typography>
    </Layout>
  );
};

export default Explore;
