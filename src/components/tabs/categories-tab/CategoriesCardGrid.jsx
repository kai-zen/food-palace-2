import { Grid } from '@mui/material';
import React from 'react';
import SingleCategoriesCard from './CategoriesCard';

const CategoriesCardsGrid = () => {
  return (
    <Grid
      container
      spacing={3}
      sx={{ mt: 3, display: 'flex', justifyContent: 'center' }}
    >
      <Grid
        item
        xs={10}
        md={6}
        lg={3}
        sx={{ display: 'flex', justifyContent: 'center' }}
      >
        <SingleCategoriesCard />
      </Grid>
      <Grid
        item
        xs={10}
        md={6}
        lg={3}
        sx={{ display: 'flex', justifyContent: 'center' }}
      >
        <SingleCategoriesCard />
      </Grid>
      <Grid
        item
        xs={10}
        md={6}
        lg={3}
        sx={{ display: 'flex', justifyContent: 'center' }}
      >
        <SingleCategoriesCard />
      </Grid>
      <Grid
        item
        xs={12}
        md={6}
        lg={3}
        sx={{ display: 'flex', justifyContent: 'center' }}
      >
        <SingleCategoriesCard />
      </Grid>
      <Grid
        item
        xs={12}
        md={6}
        lg={3}
        sx={{ display: 'flex', justifyContent: 'center' }}
      >
        <SingleCategoriesCard />
      </Grid>
      <Grid
        item
        xs={12}
        md={6}
        lg={3}
        sx={{ display: 'flex', justifyContent: 'center' }}
      >
        <SingleCategoriesCard />
      </Grid>
      <Grid
        item
        xs={12}
        md={6}
        lg={3}
        sx={{ display: 'flex', justifyContent: 'center' }}
      >
        <SingleCategoriesCard />
      </Grid>
      <Grid
        item
        xs={12}
        md={6}
        lg={3}
        sx={{ display: 'flex', justifyContent: 'center' }}
      >
        <SingleCategoriesCard />
      </Grid>
      <Grid
        item
        xs={12}
        md={6}
        lg={3}
        sx={{ display: 'flex', justifyContent: 'center' }}
      >
        <SingleCategoriesCard />
      </Grid>
      <Grid
        item
        xs={12}
        md={6}
        lg={3}
        sx={{ display: 'flex', justifyContent: 'center' }}
      >
        <SingleCategoriesCard />
      </Grid>
      <Grid
        item
        xs={12}
        md={6}
        lg={3}
        sx={{ display: 'flex', justifyContent: 'center' }}
      >
        <SingleCategoriesCard />
      </Grid>
    </Grid>
  );
};

export default CategoriesCardsGrid;
