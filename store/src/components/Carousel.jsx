import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "../styles/carousel.css";  // Ensure you have the styles applied

const Carousel = () => {
  const navigate = useNavigate();

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Box sx={{ width: "100%", maxWidth: "100vw", overflow: "hidden" }}>
      <Slider {...settings}>
        {/* Slide 1 */}
        <div className="slide">
          <img src="https://via.placeholder.com/1500x500?text=Exclusive+Offer" alt="Exclusive Offer" />
          <div className="overlay">
            <Typography variant="h3" sx={{ mb: 2 }}>Exclusive Offer</Typography>
            <Typography variant="h5">Get up to 50% off on all products!</Typography>
            <Button
              variant="contained"
              color="primary"
              sx={{ mt: 2 }}
              onClick={() => navigate("/products")}
            >
              Shop Now
            </Button>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="slide">
          <img src="https://via.placeholder.com/1500x500?text=New+Arrivals" alt="New Arrivals" />
          <div className="overlay">
            <Typography variant="h3" sx={{ mb: 2 }}>New Arrivals</Typography>
            <Typography variant="h5">Check out the latest collection!</Typography>
            <Button
              variant="contained"
              color="primary"
              sx={{ mt: 2 }}
              onClick={() => navigate("/products")}
            >
              Explore Now
            </Button>
          </div>
        </div>

        {/* Slide 3 */}
        <div className="slide">
          <img src="https://via.placeholder.com/1500x500?text=Best+Deals" alt="Best Deals" />
          <div className="overlay">
            <Typography variant="h3" sx={{ mb: 2 }}>Best Deals</Typography>
            <Typography variant="h5">Unbeatable prices just for you!</Typography>
            <Button
              variant="contained"
              color="primary"
              sx={{ mt: 2 }}
              onClick={() => navigate("/products")}
            >
              Discover Deals
            </Button>
          </div>
        </div>
      </Slider>
    </Box>
  );
};

export default Carousel;
