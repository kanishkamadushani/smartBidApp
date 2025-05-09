/*import React from "react";

const AboutUs = () => {
  return <div>AboutUs</div>;
};

export default AboutUs;*/
import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Avatar,
  useTheme,
} from "@mui/material";
import GavelIcon from "@mui/icons-material/Gavel";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import PublicIcon from "@mui/icons-material/Public";

const features = [
  {
    icon: <GavelIcon fontSize="large" />,
    title: "Dynamic Auctions",
    text: "Unlike traditional marketplaces, our platform enables live bidding for fair, fast, and rewarding transactions.",
    color: "#1976d2",
  },
  {
    icon: <LocalMallIcon fontSize="large" />,
    title: "Seller-First Experience",
    text: "Sellers are in control — list items, receive bids, and get the best value in an engaging auction environment.",
    color: "#43a047",
  },
  {
    icon: <PublicIcon fontSize="large" />,
    title: "Built for Finland",
    text: "Tailored for the Finnish market, we fill a gap with a competitive, modern, and user-friendly auction experience.",
    color: "#ff9800",
  },
];

export default function AboutUs() {
  const theme = useTheme();

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          minHeight: "50vh",
          background: "linear-gradient(135deg, #bec81f 0%, #2E3A59 100%)",
          color: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          px: 2,
          py: 10,
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h2" fontWeight="bold" gutterBottom>
            About Us
          </Typography>
          <Typography variant="h6">
            Welcome to Finland’s next-generation online bidding platform – where
            sellers gain maximum value and buyers thrive in real-time,
            competitive auctions.
          </Typography>
        </Container>
      </Box>

      {/* Features Grid */}
      <Container maxWidth="lg" sx={{ mt: -10, mb: 8 }}>
        <Grid container spacing={4} columns={12} justifyContent="center">
          {features.map((feature, index) => (
            <Grid
              key={index}
              sx={{ width: { xs: "100%", sm: "50%", md: "33.33%" }, p: 2 }}
            >
              <Paper
                elevation={4}
                sx={{
                  height: "100%",
                  p: 4,
                  borderRadius: 4,
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-6px)",
                    boxShadow: theme.shadows[6],
                  },
                }}
              >
                <Avatar
                  sx={{
                    bgcolor: feature.color,
                    width: 64,
                    height: 64,
                    mb: 2,
                  }}
                >
                  {feature.icon}
                </Avatar>
                <Typography variant="h6" gutterBottom>
                  {feature.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {feature.text}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Closing Section */}
      <Box sx={{ backgroundColor: "#f5f5f5", py: 8 }}>
        <Container maxWidth="md" sx={{ textAlign: "center" }}>
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            Built for Modern Commerce
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Whether you're an occasional seller or a frequent buyer, our
            platform gives you the tools to interact, negotiate, and win in a
            transparent and exciting way.
          </Typography>
        </Container>
      </Box>
    </Box>
  );
}
