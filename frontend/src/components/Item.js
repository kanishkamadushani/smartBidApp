import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import image from "../assets/images/vehicle.jpg"; // Keep the image as it is
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Item = ({ name, catagery, description, amount, img, id }) => {
  const navigate = useNavigate();

  const handleExploreClick = () => {
    navigate(`/item/${id}`);
  };

  const handleBidClick = () => {
    navigate(`/bid/${id}`);
  };

  return (
    <Box display="flex" justifyContent="center" flexWrap="wrap" m={2}>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          alt="item preview"
          height="140"
          image={image} // Keep the provided image here
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {amount}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {catagery}
          </Typography>
        </CardContent>

        <CardActions>
          <Button
            variant="contained"
            color="success"
            size="small"
            onClick={handleBidClick}
          >
            Bid Here
          </Button>
          <Button size="small" onClick={handleExploreClick}>
            Explore
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default Item;
