import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { IconButton } from '@mui/material';
import { Favorite, Info, ShoppingCart } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { toggleToCart, toggleToFavorites } from '../../../features/foodsSlice';

export default function SearchSingleCard({ food }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
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
    <Card
      sx={{
        display: 'flex',
        minHeight: '122px',
        mt: 3,
        width: '90%',
        maxWidth: '600px',
        minWidth: '320px',
        justifyContent: 'space-between',
        boxShadow: 5,
        overflowY: 'auto',
        opacity: '.8',
        '&:hover': {
          opacity: '1',
        },
        transition: '.3s',
      }}
      key={food.id}
    >
      <CardContent sx={{ display: 'flex', flexDirection: 'column' }}>
        <Typography
          component="div"
          variant="h6"
          sx={{ fontWeight: 'bold', whiteSpace: 'nowrap' }}
        >
          {food.name}
        </Typography>
        <Typography color="text.secondary">{`${food.price} $`}</Typography>
        <div>
          <IconButton
            onClick={() => {
              dispatch(toggleToCart(food));
              cartColorToggler();
            }}
            size="small"
          >
            <ShoppingCart color={cartColor} />
          </IconButton>
          <IconButton
            onClick={() => {
              dispatch(toggleToFavorites(food));
              heartColorToggler();
            }}
            size="small"
          >
            <Favorite color={heartColor} />
          </IconButton>
          <IconButton
            onClick={() => navigate(`/single/${food.id}`)}
            size="small"
          >
            <Info />
          </IconButton>
        </div>
      </CardContent>
      <CardMedia
        component="img"
        sx={{
          width: 90,
          height: 90,
          margin: '11px',
          borderRadius: '50%',
          border: '3px solid gold',
        }}
        image={food.image}
        alt={food.name}
      />
    </Card>
  );
}
