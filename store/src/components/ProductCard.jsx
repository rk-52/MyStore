import React from "react";
import { Card, CardMedia, CardContent, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";


const ProductCard = ({ product }) => {
  return (
    <Card className="product-card">
      <CardMedia
        component="img"
        height="200"
        image={product.image}
        alt={product.title}
      />
      <CardContent>
        <Typography variant="h6">{product.title}</Typography>
        <Typography variant="body2" color="textSecondary">
          ${product.price}
        </Typography>
        <Button variant="contained" color="primary" component={Link} to={`/product/${product.id}`}>
          View Details
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
