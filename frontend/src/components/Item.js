import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import image from "../assets/images/vehicle.jpg";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Item = ({ name, catagery, description, amount, img, id }) => {
  const navigate = useNavigate();

  const handdleExploreClick = () => {
    navigate(`/item/${id}`);
  };
  return (
    <Box display="flex" flexWrap="wrap">
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image={image}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {description}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {amount}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {catagery}
          </Typography>
        </CardContent>
        <CardActions>
          <Button variant="contained" color="success" size="small">
            Bid Here
          </Button>
          <Button size="small" onClick={handdleExploreClick}>
            Explore
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default Item;
