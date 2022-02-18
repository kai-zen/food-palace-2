import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { IconButton, Rating } from '@mui/material';
import { Favorite, ShoppingCart } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

export default function SearchSingleCard() {
  const navigate = useNavigate();
  return (
    <Card
      sx={{
        display: 'flex',
        minHeight: '160px',
        m: 3,
        width: { sm: '80%', md: '75%' },
        maxWidth: '600px',
        minWidth: '320px',
        justifyContent: 'space-between',
        boxShadow: 5,
        overflowY: 'auto',
        cursor: 'pointer',
      }}
      onClick={() => navigate('/single')}
    >
      <CardContent sx={{ display: 'flex', flexDirection: 'column' }}>
        <Typography
          component="div"
          variant="h5"
          sx={{ fontWeight: 'bold', textOverflow: 'ellipsis' }}
        >
          Live
        </Typography>
        <Typography variant="h6" color="text.secondary">
          4.56 $
        </Typography>
        <Rating
          name="half-rating-read"
          defaultValue={2.5}
          precision={0.5}
          readOnly
        />
        <div>
          <IconButton aria-label="delete">
            <ShoppingCart />
          </IconButton>
          <IconButton aria-label="delete">
            <Favorite />
          </IconButton>
        </div>
      </CardContent>
      <CardMedia
        component="img"
        sx={{ width: 136, height: 136, margin: '11px' }}
        image="./images/1.jpg"
        alt="Live from space album cover"
      />
    </Card>
  );
}
