import React from "react";
import { Card, CardContent, CardMedia, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function RestaurantCard({ item }) {
  return (
    <Card sx={{ maxWidth: 300, m: 2, borderRadius: 3 }}>
      <CardMedia component="img" height="180" image={item.image} />
      <CardContent>
        <Typography variant="h6">{item.name}</Typography>
        <Typography variant="body2" color="text.secondary">
          ⭐ {item.rating} • {item.cuisine}
        </Typography>

        <Button
          variant="contained"
          fullWidth
          sx={{ mt: 2 }}
          component={Link}
          to={`/restaurant/${item.id}`}
        >
          View Menu
        </Button>
      </CardContent>
    </Card>
  );
}
