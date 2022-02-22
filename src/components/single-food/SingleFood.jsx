import { Paper, Rating, Typography, IconButton, Button } from '@mui/material';
import React, { useState } from 'react';
import SingleComment from '../tabs/comments-tab/SingleComment';
import { Favorite, ShoppingCart } from '@mui/icons-material';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toggleToCart, toggleToFavorites } from '../../features/foodsSlice';

const SingleFoodPage = () => {
  let { foodId } = useParams();
  const dispatch = useDispatch();
  const allFoods = useSelector((state) => state.foods.allFoods);
  const comments = useSelector((state) => state.comments.comments);
  const food = allFoods[foodId];
  const thisFoodComments = [...comments].filter((comment) => {
    return comment.foodId === food.id;
  });
  const [heartColor, setHeartColor] = useState(
    food.isItInFav ? 'error' : 'action'
  );
  const [cartColor, setCartColor] = useState(
    food.isItInCart ? 'success' : 'action'
  );
  const heartColorToggler = () => {
    if (heartColor === 'action') {
      setHeartColor('error');
    } else {
      setHeartColor('action');
    }
  };
  const cartColorToggler = () => {
    if (cartColor === 'action') {
      setCartColor('success');
    } else {
      setCartColor('action');
    }
  };

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
        <IconButton
          size="large"
          onClick={() => {
            dispatch(toggleToCart(food));
            cartColorToggler();
          }}
        >
          <ShoppingCart fontSize="inherit" color={cartColor} />
        </IconButton>
        <IconButton
          size="large"
          onClick={() => {
            dispatch(toggleToFavorites(food));
            heartColorToggler();
          }}
        >
          <Favorite fontSize="inherit" color={heartColor} />
        </IconButton>
      </div>
      <div style={{ margin: '0px 10px 20px 10px', float: 'left' }}>
        <Button variant="contained" color="secondary">
          Leave a comment about this food
        </Button>
      </div>
      {thisFoodComments.map((comment) => {
        return <SingleComment comment={comment} />;
      })}
    </Paper>
  );
};

export default SingleFoodPage;
