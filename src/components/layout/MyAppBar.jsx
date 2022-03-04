import {
  Favorite,
  ManageAccounts,
  Menu as MenuIcon,
  ShoppingCart,
} from '@mui/icons-material';
import {
  AppBar,
  Badge,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material';
import { Link as RRDLink, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { UserInfoDialog } from './UserInfoDialog';

const MyAppBar = ({ handleDrawerToggle }) => {
  const navigate = useNavigate();
  const allFoods = useSelector((state) => state.foods.allFoods);
  const loggedInUser = useSelector((state) => state.users.loggedInUser);

  const cart = [...allFoods].filter((food) => {
    return food.isItInCart === true;
  });
  const favorites = [...allFoods].filter((food) => {
    return food.isItInFav === true;
  });

  const [open, setOpen] = useState(false);

  return (
    <AppBar
      sx={{
        width: { sm: 'calc(100% - 260px)' },
        ml: { sm: '260px' },
      }}
    >
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 1, display: { xs: 'block', sm: 'none' } }}
          onClick={handleDrawerToggle}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          variant="h6"
          component="h3"
          sx={{ flexGrow: 1, fontWeight: 'bold', cursor: 'pointer' }}
          onClick={() => navigate('/')}
        >
          Food Palace
        </Typography>
        <RRDLink to="/shopping-cart">
          <IconButton
            size="large"
            aria-label="show 4 new mails"
            color="inherit"
          >
            <Badge badgeContent={cart.length} color="error">
              <ShoppingCart />
            </Badge>
          </IconButton>
        </RRDLink>
        <RRDLink to="/favorites">
          <IconButton
            size="large"
            aria-label="show 4 new mails"
            color="inherit"
          >
            <Badge badgeContent={favorites.length} color="error">
              <Favorite />
            </Badge>
          </IconButton>
        </RRDLink>
        {loggedInUser[0] ? (
          <>
            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
              onClick={() => {
                setOpen(true);
              }}
            >
              <ManageAccounts fontSize="inherit" />
            </IconButton>
            <UserInfoDialog open={open} setOpen={setOpen} />
          </>
        ) : (
          <RRDLink to="/sign-in">
            <Button color="inherit">Login</Button>
          </RRDLink>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default MyAppBar;
