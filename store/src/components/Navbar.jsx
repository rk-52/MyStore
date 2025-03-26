import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <AppBar position="sticky" color="primary">
      <Toolbar>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
         Anwesha's Store
      </Typography>
        <Button color="inherit" component={Link} to="/">
          Home
        </Button>
        <Button color="inherit" component={Link} to="/products">
          Products
        </Button>
        <Button color="inherit" component={Link} to="/cart">
          Cart
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
