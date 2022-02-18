import { Typography } from '@mui/material';
import React from 'react';
import SearchInput from './SearchInput';
import SearchSingleCard from './SingleCard';

const SearchTabPanel = () => {
  return (
    <>
      <Typography
        variant="h1"
        color="primary"
        sx={{
          mt: '21vh',
          mb: 2,
          fontWeight: 'bold',
          // fontStyle: 'italic',
          fontFamily: 'Bad Script',
          textAlign: 'center',
        }}
      >
        Food Palace 2
      </Typography>
      <SearchInput />
      {/* <SearchSingleCard />
      <SearchSingleCard />
      <SearchSingleCard />
      <SearchSingleCard />
      <SearchSingleCard />
      <SearchSingleCard />
      <SearchSingleCard /> */}
    </>
  );
};

export default SearchTabPanel;
