import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { IconButton, Rating } from '@mui/material';
import { Favorite, ShoppingCart } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

export default function SingleCategoriesCard({ food }) {
  let navigate = useNavigate();
  return (
    <Card
      sx={{
        maxWidth: '240px',
        boxShadow: 10,
        overflowY: 'auto',
        cursor: 'pointer',
      }}
      onClick={() => navigate(`/single/${food.id}`)}
    >
      <CardMedia
        component="img"
        alt={food.name}
        height="240px"
        image={food.image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {food.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Price: {food.price}$
        </Typography>
        <br />
        <div
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
          }}
        >
          <Rating
            name="half-rating-read"
            defaultValue={food.rate}
            precision={0.5}
            readOnly
          />
          <div>
            <IconButton aria-label="delete">
              <Favorite />
            </IconButton>
            <IconButton aria-label="delete">
              <ShoppingCart />
            </IconButton>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
