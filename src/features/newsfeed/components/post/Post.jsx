import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import { orange } from "@mui/material/colors";
import { LoremIpsum } from "lorem-ipsum";

import { PostWrapper, PhotoWrapper } from "./Post.styles";

// Parameters of the dummy text:
const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 3,
    min: 2,
  },
  wordsPerSentence: {
    max: 10,
    min: 7,
  },
});

export default function Post(props) {
  return (
    <PostWrapper>
      <Card
        sx={{
          backgroundColor: orange[100],
        }}
      >
        <PhotoWrapper component="img" image={props.url} alt={props.title} />
        <CardActions
          sx={{
            backgroundColor: orange[100],
          }}
          disableSpacing
        >
          <IconButton color="primary" aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton color="primary" aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>
        <CardContent
          sx={{
            backgroundColor: orange[100],
          }}
        >
          <Typography variant="body2" color="text.secondary">
            {lorem.generateParagraphs(1)}
          </Typography>
        </CardContent>
      </Card>
    </PostWrapper>
  );
}
