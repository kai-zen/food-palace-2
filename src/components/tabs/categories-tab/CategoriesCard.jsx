import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { IconButton, Rating } from '@mui/material';
import { Favorite, ShoppingCart } from '@mui/icons-material';

export default function SingleCategoriesCard() {
  return (
    <Card>
      <CardMedia
        component="img"
        alt="green iguana"
        // height="140px"
        image="./Images/bests-food-bkg.png"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Price: 2.45$
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
            defaultValue={2.5}
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
