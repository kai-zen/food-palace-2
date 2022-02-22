import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material';
import { amber, red } from '@mui/material/colors';
import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Favorites from './components/favorites/Favorites';
import MyLayout from './components/layout/MyLayout';
import SignIn from './components/login/SignIn';
import SignUp from './components/login/SignUp';
import MyShoppingCart from './components/shopping-cart/ShoppingCart';
import SingleFoodPage from './components/single-food/SingleFood';
import MyTabs from './components/tabs/MyTabs';

const App = () => {
  const themeMode = useSelector((state) => state.theme.currentTheme);
  const theme = createTheme({
    palette: {
      mode: themeMode,
      primary: {
        main: amber[400],
      },
      secondary: {
        main: red[800],
      },
    },
    typography: {
      allVariants: {
        fontFamily: 'Nunito',
      },
    },
  });
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <MyLayout />
        <Routes>
          <Route path="/" element={<MyTabs activeTab={0} />} />
          <Route path="/categories" element={<MyTabs activeTab={1} />} />
          <Route path="/comments" element={<MyTabs activeTab={2} />} />
          <Route path="/single/:foodId" element={<SingleFoodPage />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/shopping-cart" element={<MyShoppingCart />} />
        </Routes>
      </ThemeProvider>
    </Router>
  );
};

export default App;
