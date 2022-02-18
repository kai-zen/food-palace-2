import { Typography } from '@mui/material';
import React from 'react';
import SearchInput from './SearchInput';

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
    </>
  );
};

export default SearchTabPanel;
