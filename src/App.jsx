import { ThemeProvider } from '@emotion/react';
import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Favorites from './components/favorites/Favorites';
import MyLayout from './components/layout/MyLayout';
import { theme } from './components/layout/theme';
import SignIn from './components/login/SignIn';
import SignUp from './components/login/SignUp';
import SingleFoodPage from './components/single-food/SingleFood';
import MyTabs from './components/tabs/MyTabs';

const App = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <MyLayout />
        <Routes>
          <Route path="/" element={<MyTabs activeTab={0} />} />
          <Route path="/categories" element={<MyTabs activeTab={1} />} />
          <Route path="/comments" element={<MyTabs activeTab={2} />} />
          <Route path="/single" element={<SingleFoodPage />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      </ThemeProvider>
    </Router>
  );
};

export default App;
