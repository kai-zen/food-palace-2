import { ThemeProvider } from '@emotion/react';
import React from 'react';
import MyLayout from './components/layout/MyLayout';
import { theme } from './components/layout/theme';
import MyTabs from './components/tabs/MyTabs';

const App = () => {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <MyLayout />
        <MyTabs />
      </ThemeProvider>
    </div>
  );
};

export default App;
