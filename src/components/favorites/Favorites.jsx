import { Favorite } from '@mui/icons-material';
import { Paper, Typography } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';

import CategoriesCardsGrid from '../tabs/categories-tab/CategoriesCardGrid';

const Favorites = () => {
  const allFoods = useSelector((state) => state.foods.allFoods);
  const favorites = [...allFoods].filter((food) => {
    return food.isItInFav === true;
  });
  return (
    <Paper
      sx={{
        width: { sm: 'calc(100% - 260px)' },
        ml: { sm: '260px' },
        pt: '98px',
        pb: '50px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
        Favorite Foods
        <Favorite color="secondary" fontSize="large" />
      </Typography>

      <CategoriesCardsGrid foodsToShow={favorites} />
    </Paper>
  );
};

export default Favorites;
