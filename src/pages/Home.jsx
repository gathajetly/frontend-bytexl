import React from "react";
import { restaurants } from "../data/restaurants";
import RestaurantCard from "../components/RestaurantCard";
import { Box, Typography } from "@mui/material";

export default function Home() {
  return (
    <Box p={3}>
      <Typography variant="h4" mb={2}>
        Restaurants Near You
      </Typography>

      <Box display="flex" flexWrap="wrap">
        {restaurants.map((res) => (
          <RestaurantCard key={res.id} item={res} />
        ))}
      </Box>
    </Box>
  );
}
