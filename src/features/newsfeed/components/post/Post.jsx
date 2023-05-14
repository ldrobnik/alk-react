import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import { pink } from "@mui/material/colors";

import { PostWrapper } from "./Post.styles";

export default function Post(props) {
  // Capitalizes the first letter of a string
  const capitalizeFirstLetter = (string) => {
    const firstLetter = string.charAt(0);
    const firstLetterCap = firstLetter.toUpperCase();
    const remainingLetters = string.slice(1);
    const capitalizedText = firstLetterCap + remainingLetters;
    return capitalizedText;
  };

  return (
    <PostWrapper>
      <Card
        sx={{
          backgroundColor: pink[50],
        }}
      >
        <CardMedia component="img" image={props.url} alt={props.title} />
        <CardActions
          sx={{
            backgroundColor: pink[50],
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
            backgroundColor: pink[50],
          }}
        >
          <Typography variant="body2" color="text.secondary">
            {capitalizeFirstLetter(props.title)}
          </Typography>
        </CardContent>
      </Card>
    </PostWrapper>
  );
}
