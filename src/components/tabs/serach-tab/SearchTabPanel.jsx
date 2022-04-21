import { Casino, MonetizationOn, Stars } from '@mui/icons-material';
import { IconButton, Typography } from '@mui/material';
import { amber } from '@mui/material/colors';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import SearchInput from './SearchInput';
import SearchSingleCard from './SingleCard';

const SearchTabPanel = () => {
  let allFoods = useSelector((state) => state.foods.allFoods);
  allFoods = allFoods.filter((food) => {
    return !food.deleted;
  });
  const [filteredFoods, setFilteredFoods] = useState(
    allFoods.sort(() => 0.5 - Math.random())
  );
  const [sortBy, setSortBy] = useState(2);

  const whatToRender = () => {
    if (filteredFoods.length === 0) return null;
    else {
      return filteredFoods.map((food) => {
        return <SearchSingleCard food={food} key={food.id} />;
      });
    }
  };

  return (
    <>
      <Typography
        variant="h5"
        color="white"
        sx={{
          m: 2,
          fontWeight: 'bold',
          fontFamily: 'Bad Script',
          textAlign: 'center',
        }}
      >
        welcome to
      </Typography>
      <Typography
        variant="h1"
        color="white"
        sx={{
          mb: 2,
          fontSize: '4rem',
          fontWeight: 'bold',
          fontFamily: 'Bad Script',
          textAlign: 'center',
        }}
      >
        Food Palace 2
      </Typography>
      <SearchInput allFoods={allFoods} setFilteredFoods={setFilteredFoods} />
      <div
        style={{
          paddingTop: '10px',
          width: '90%',
          minWidth: '320px',
          maxWidth: '600px',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Typography
          variant="h6"
          sx={{
            color: 'white',
            textDecoration: 'underline',
          }}
        >
          Sorting:&nbsp;&nbsp;&nbsp;
        </Typography>
        <IconButton
          sx={{ color: sortBy === 0 ? amber[400] : 'white' }}
          onClick={() => {
            setSortBy(0);
            const shuffledArray = [...filteredFoods].sort((a, b) => {
              return b.price - a.price;
            });
            setFilteredFoods(shuffledArray);
          }}
        >
          <MonetizationOn />
        </IconButton>
        <IconButton
          sx={{ color: sortBy === 1 ? amber[400] : 'white' }}
          onClick={() => {
            setSortBy(1);
            const shuffledArray = [...filteredFoods].sort((a, b) => {
              return b.rate - a.rate;
            });
            setFilteredFoods(shuffledArray);
          }}
        >
          <Stars />
        </IconButton>
        <IconButton
          sx={{ color: sortBy === 2 ? amber[400] : 'white' }}
          onClick={() => {
            setSortBy(2);
            const shuffledArray = [...filteredFoods].sort(
              () => 0.5 - Math.random()
            );
            setFilteredFoods(shuffledArray);
          }}
        >
          <Casino />
        </IconButton>
      </div>
      {whatToRender()}
    </>
  );
};

export default SearchTabPanel;
