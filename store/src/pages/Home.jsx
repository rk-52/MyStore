import React from "react";
import { Container, Typography, Button, Box, Grid2, Card, CardContent, CardMedia, IconButton } from "@mui/material";
import { ShoppingCart, LocalShipping, ThumbUp, AttachMoney, Timer } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import Carousel from "../components/Carousel";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      {/* Carousel */}
      <Carousel />

      {/* Icon Section */}
      <Container sx={{ py: 4, textAlign: "center" }}>
        <Grid2 container spacing={4} justifyContent="center">
          {[
            { icon: <LocalShipping />, title: "Fast, Free Shipping", subtitle: "On order over $50" },
            { icon: <Timer />, title: "Next Day Delivery", subtitle: "Free – spend over $99" },
            { icon: <AttachMoney />, title: "Low Price Guarantee", subtitle: "We offer competitive prices" },
            { icon: <ThumbUp />, title: "Satisfaction Guarantee", subtitle: "We Guarantee Our Products" }
          ].map((item, index) => (
            <Grid2 item xs={12} sm={6} md={3} key={index}>
              <Card sx={{ textAlign: "center", p: 2, transition: "0.3s", "&:hover": { boxShadow: 6 } }}>
                <IconButton color="primary" sx={{ fontSize: 40 }}>
                  {item.icon}
                </IconButton>
                <Typography variant="h6" mt={2}>{item.title}</Typography>
                <Typography variant="body2" color="textSecondary">{item.subtitle}</Typography>
              </Card>
            </Grid2>
          ))}
        </Grid2>
      </Container>

      {/* Banner Section */}
      <Container sx={{ py: 4 }}>
        <Grid2 container spacing={4}>
          {[
            { title: "NEW ARRIVALS", subtitle: "Enjoy a 3-year guarantee", color: "#E8F5E9", img: "https://via.placeholder.com/400x200?text=New+Arrivals" },
            { title: "CLEARANCE", subtitle: "Get up to 15% off", color: "#E3F2FD", img: "https://via.placeholder.com/400x200?text=Kitchen+Bundle" },
            { title: "FEATURED", subtitle: "Up to 25% Off", color: "#FFF8E1", img: "https://via.placeholder.com/400x200?text=Hygienic+Shaving" }
          ].map((banner, index) => (
            <Grid2 item xs={12} sm={4} key={index}>
              <Card sx={{ backgroundColor: banner.color, transition: "0.3s", "&:hover": { boxShadow: 8 } }}>
                <CardMedia
                  component="img"
                  height="200"
                  image={banner.img}
                  alt={banner.title}
                />
                <CardContent>
                  <Typography variant="h5">{banner.title}</Typography>
                  <Typography variant="body2">{banner.subtitle}</Typography>
                  <Button
                    size="small"
                    color="primary"
                    onClick={() => navigate("/products")}
                  >
                    Shop Now
                  </Button>
                </CardContent>
              </Card>
            </Grid2>
          ))}
        </Grid2>
      </Container>

      {/* Flash Deals Section */}
      <Container sx={{ py: 5, textAlign: "center" }}>
        <Typography variant="h4" gutterBottom>
          Flash Deals
        </Typography>
        <Grid2 container spacing={4}>
          {[
            { name: "Laptop", price: "$999", img: "https://via.placeholder.com/300", label: "Sale" },
            { name: "Smartphone", price: "$499", img: "https://via.placeholder.com/300", label: "Hot" },
            { name: "Camera", price: "$299", img: "https://via.placeholder.com/300", label: "Sale" },
            { name: "Smartwatch", price: "$199", img: "https://via.placeholder.com/300", label: "Sale" }
          ].map((product, index) => (
            <Grid2 item xs={12} sm={6} md={3} key={index}>
              <Card sx={{ position: "relative", transition: "0.3s", "&:hover": { boxShadow: 6 } }}>
                <CardMedia
                  component="img"
                  height="200"
                  image={product.img}
                  alt={product.name}
                />
                <CardContent>
                  <Typography variant="h6">{product.name}</Typography>
                  <Typography variant="body1" color="primary">{product.price}</Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    sx={{ mt: 2 }}
                    startIcon={<ShoppingCart />}
                  >
                    Add to Cart
                  </Button>
                  <Box
                    sx={{
                      position: "absolute",
                      top: 10,
                      left: 10,
                      backgroundColor: "red",
                      color: "white",
                      px: 1,
                      py: 0.5,
                      borderRadius: 1,
                      fontSize: 12
                    }}
                  >
                    {product.label}
                  </Box>
                </CardContent>
              </Card>
            </Grid2>
          ))}
        </Grid2>
      </Container>

      {/* Footer */}
      <Box
        sx={{
          bgcolor: "primary.main",
          color: "white",
          py: 4,
          textAlign: "center",
          mt: 5
        }}
      >
        <Typography variant="body1">© 2025 Anwesha's Store. All rights reserved.</Typography>
      </Box>
    </div>
  );
};

export default Home;
