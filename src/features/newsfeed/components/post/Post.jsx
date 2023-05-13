import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";

export default function Post(props) {
  return (
    <Card>
      <CardMedia component="img" image={props.url} alt={props.title} />
      <CardContent>{props.title}</CardContent>
    </Card>
  );
}
