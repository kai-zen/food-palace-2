import { Favorite } from '@mui/icons-material';
import { Paper, Typography } from '@mui/material';
import React from 'react';
import CategoriesCardsGrid from '../tabs/categories-tab/CategoriesCardGrid';

const Favorites = () => {
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
      <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
        Favorite Foods
        <Favorite color="secondary" fontSize="large" />
      </Typography>

      <CategoriesCardsGrid />
    </Paper>
  );
};

export default Favorites;
