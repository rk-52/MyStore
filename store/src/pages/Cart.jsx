import React, { useState, useEffect } from "react";
import { Container, Typography, Grid, Card, CardMedia, CardContent, Button } from "@mui/material";


const Cart = () => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  // Simulating fetching cart data from localStorage or API
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
    calculateTotal(storedCart);
  }, []);

  // Function to calculate the total price
  const calculateTotal = (items) => {
    const totalAmount = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
    setTotal(totalAmount);
  };

  // Remove item from cart
  const removeFromCart = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    calculateTotal(updatedCart);
  };

  return (
    <Container>
      <Typography variant="h4" align="center" gutterBottom>
        Your Cart
      </Typography>

      {cart.length === 0 ? (
        <Typography variant="h6" align="center" color="textSecondary">
          Your cart is empty. 
        </Typography>
      ) : (
        <>
          <Grid container spacing={3}>
            {cart.map((item) => (
              <Grid item xs={12} sm={6} md={4} key={item.id}>
                <Card>
                  <CardMedia
                    component="img"
                    height="200"
                    image={item.image}
                    alt={item.title}
                  />
                  <CardContent>
                    <Typography variant="h6">{item.title}</Typography>
                    <Typography variant="body2" color="textSecondary">
                      Price: ${item.price}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      Quantity: {item.quantity}
                    </Typography>
                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={() => removeFromCart(item.id)}
                      style={{ marginTop: "10px" }}
                    >
                      Remove
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          <Typography variant="h5" align="right" marginTop={3}>
            Total: <strong>${total.toFixed(2)}</strong>
          </Typography>

          <Button variant="contained" color="primary" fullWidth style={{ marginTop: "20px" }}>
            Proceed to Checkout
          </Button>
        </>
      )}
    </Container>
  );
};

export default Cart;
