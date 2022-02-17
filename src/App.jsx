import { ThemeProvider } from '@emotion/react';
import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import MyLayout from './components/layout/MyLayout';
import { theme } from './components/layout/theme';
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
        </Routes>
      </ThemeProvider>
    </Router>
  );
};

export default App;
