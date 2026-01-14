import React, { useEffect, useState } from "react";
import { Container, Grid2, Typography } from "@mui/material";
import ProductCard from "../components/ProductCard";
import axios from "axios";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      setProducts(res.data);
    });
  }, []);

  return (
    <Container>
      <Typography variant="h4" align="center" gutterBottom>
        Products
      </Typography>
      <Grid2 container spacing={3}>
        {products.map((product) => (
          <Grid2 item xs={12} sm={6} md={4} key={product.id}>
            <ProductCard product={product} />
          </Grid2>
        ))}
      </Grid2>
    </Container>
  );
};

export default Products;
