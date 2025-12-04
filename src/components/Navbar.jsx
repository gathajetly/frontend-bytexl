import React from "react";
import { AppBar, Toolbar, Typography, IconButton, Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <AppBar position="sticky" color="warning">
      <Toolbar>
        <Typography variant="h5" sx={{ flexGrow: 1 }}>
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            Swiggy Clone
          </Link>
        </Typography>

        <IconButton component={Link} to="/cart" color="inherit">
          <Badge badgeContent={2} color="error">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
