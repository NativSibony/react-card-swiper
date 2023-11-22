import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardContainer } from "./styled/styled";
import { CardProps } from "@mui/material";
import { forwardRef } from "react";

interface SwipeCardProps extends CardProps {
  image: string;
}

const SwipeCard = forwardRef<HTMLDivElement, SwipeCardProps>(({ image, ...props }, ref) => {
  return (
    <CardContainer {...props} ref={ref}>
      <CardMedia component="img" image={image} title="app" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents
          except Antarctica
        </Typography>
      </CardContent>
    </CardContainer>
  );
});

export default SwipeCard;
