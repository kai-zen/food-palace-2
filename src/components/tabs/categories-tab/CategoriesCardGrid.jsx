import { Grid } from '@mui/material';
import React from 'react';
import SingleCategoriesCard from './CategoriesCard';

const CategoriesCardsGrid = () => {
  return (
    <Grid container spacing={3} sx={{ mt: 3 }}>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <SingleCategoriesCard />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <SingleCategoriesCard />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <SingleCategoriesCard />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <SingleCategoriesCard />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <SingleCategoriesCard />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <SingleCategoriesCard />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <SingleCategoriesCard />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <SingleCategoriesCard />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <SingleCategoriesCard />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <SingleCategoriesCard />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <SingleCategoriesCard />
      </Grid>
    </Grid>
  );
};

export default CategoriesCardsGrid;
