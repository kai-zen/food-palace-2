import { Paper, Rating, Typography, IconButton, Button } from '@mui/material';
import React from 'react';
import SingleComment from '../tabs/comments-tab/SingleComment';
import { Favorite, ShoppingCart } from '@mui/icons-material';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const SingleFoodPage = () => {
  let { foodId } = useParams();
  const allFoods = useSelector((state) => state.foods.allFoods);
  const food = allFoods[foodId];
  return (
    <Paper
      sx={{
        width: { sm: 'calc(100% - 260px)' },
        ml: { sm: '260px' },
        pt: '98px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <img
        src={`${food.image}`}
        alt={food.name}
        style={{
          margin: '20px',
          borderRadius: '50%',
          width: '80%',
          maxWidth: '450px',
          border: '2px solid black',
        }}
      />
      <Typography variant="h4" sx={{ m: 3 }}>
        {food.name}
      </Typography>
      <Typography variant="h6" color="text.secondary">
        Price: {food.price} $
      </Typography>
      <Typography variant="h6" color="text.secondary">
        Order quantity: {food.orderQuantity}
      </Typography>
      <Rating
        sx={{ m: 2 }}
        size="large"
        defaultValue={food.rate}
        precision={0.5}
      />
      <div style={{ margin: '0 10px 10px' }}>
        <IconButton size="large">
          <ShoppingCart fontSize="inherit" />
        </IconButton>
        <IconButton size="large">
          <Favorite fontSize="inherit" />
        </IconButton>
      </div>
      <div style={{ margin: '0px 10px 20px 10px', float: 'left' }}>
        <Button variant="contained" color="secondary">
          Leave a comment about this food
        </Button>
      </div>
      <SingleComment />
    </Paper>
  );
};

export default SingleFoodPage;
