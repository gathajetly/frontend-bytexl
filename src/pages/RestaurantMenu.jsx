import { useParams } from "react-router-dom";
import { restaurants } from "../data/restaurants";
import { Box, Typography, Button, Card, CardContent } from "@mui/material";

export default function RestaurantMenu() {
  const { id } = useParams();
  const restaurant = restaurants.find((r) => r.id == id);

  return (
    <Box p={3}>
      <Typography variant="h4">{restaurant.name}</Typography>
      <Typography color="text.secondary">{restaurant.cuisine}</Typography>

      <Box mt={3}>
        {restaurant.menu.map((m) => (
          <Card key={m.id} sx={{ mb: 2, p: 2 }}>
            <CardContent>
              <Typography variant="h6">{m.name}</Typography>
              <Typography>₹{m.price}</Typography>
              <Button variant="contained" sx={{ mt: 1 }}>
                Add to Cart
              </Button>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
}
