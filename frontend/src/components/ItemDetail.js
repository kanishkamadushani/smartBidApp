import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  CircularProgress,
  Alert,
  Divider,
  Button,
} from "@mui/material";

const ItemDetail = () => {
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const getItem = async () => {
      try {
        const response = await fetch(`/api/item/${id}`);
        const json = await response.json();

        if (response.ok) {
          setItem(json);
        } else {
          setError("Failed to fetch item.");
        }
      } catch (error) {
        console.error("Error fetching item:", error);
        setError("Something went wrong.");
      } finally {
        setLoading(false);
      }
    };

    getItem();
  }, [id]);

  const handleBidClick = () => {
    navigate(`/bid/${id}`);
  };

  if (loading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="80vh"
      >
        <CircularProgress size={60} />
      </Box>
    );
  }

  if (error) {
    return (
      <Box mt={4}>
        <Alert severity="error">{error}</Alert>
      </Box>
    );
  }

  return (
    item && (
      <Box display="flex" justifyContent="center" alignItems="center" p={3}>
        <Card
          sx={{
            maxWidth: 500,
            width: "100%",
            borderRadius: 3,
            boxShadow: 6,
            overflow: "hidden",
            backgroundColor: "#fff",
          }}
        >
          <CardMedia
            component="img"
            height="250"
            image="https://picsum.photos/600/400"
            alt={item.name}
            sx={{ objectFit: "cover" }}
          />
          <CardContent>
            <Typography variant="h5" fontWeight="bold" gutterBottom>
              {item.name}
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph>
              {item.description}
            </Typography>
            <Divider sx={{ my: 2 }} />
            <Typography variant="h6" fontWeight="bold" color="primary">
              Price: ${item.amount}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Seller ID: {item.user_id}
            </Typography>
            <Typography
              variant="caption"
              color="text.secondary"
              display="block"
              mt={1}
            >
              Last updated 3 mins ago
            </Typography>
          </CardContent>

          {/* Button Section */}
          <Box display="flex" justifyContent="center" pb={2}>
            <Button
              variant="contained"
              color="success"
              size="small"
              onClick={handleBidClick}
            >
              Bid Here
            </Button>
          </Box>
        </Card>
      </Box>
    )
  );
};

export default ItemDetail;
