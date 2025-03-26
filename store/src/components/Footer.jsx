import React from "react";
import { Container, Typography } from "@mui/material";


const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Typography variant="body2" color="textSecondary" align="center">
          © {new Date().getFullYear()} Anwesha's Store. All rights reserved.
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;
