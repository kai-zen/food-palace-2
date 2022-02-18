import { Favorite, Menu as MenuIcon, ShoppingCart } from '@mui/icons-material';
import {
  AppBar,
  Badge,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material';
import { Link as RRDLink, useNavigate } from 'react-router-dom';
import React from 'react';

const MyAppBar = ({ handleDrawerToggle }) => {
  const navigate = useNavigate();
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
          Food Palace 2
        </Typography>
        <RRDLink to="/shopping-cart">
          <IconButton
            size="large"
            aria-label="show 4 new mails"
            color="inherit"
          >
            <Badge badgeContent={4} color="error">
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
            <Badge badgeContent={4} color="error">
              <Favorite />
            </Badge>
          </IconButton>
        </RRDLink>
        <RRDLink to="/sign-in">
          <Button color="inherit">Login</Button>
        </RRDLink>
      </Toolbar>
    </AppBar>
  );
};

export default MyAppBar;
