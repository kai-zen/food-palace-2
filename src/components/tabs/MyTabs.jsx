import React, { useEffect, useState } from 'react';
import SwipeableViews from 'react-swipeable-views';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Paper, Toolbar } from '@mui/material';
import SearchTabPanel from './serach-tab/SearchTabPanel';
import CategoriesTabPanel from './categories-tab/CategoriesTabPanel';
import CommentsTabPanel from './comments-tab/CommentsTabPanel';
import { useNavigate } from 'react-router-dom';

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const MyTabs = ({ activeTab }) => {
  const navigate = useNavigate();
  const [currentActiveTab, setCurrentActiveTab] = useState(activeTab);

  const handleChange = (event, newValue) => {
    switch (newValue) {
      case 0:
        navigate('/');
        break;
      case 1:
        navigate('/categories');
        break;
      case 2:
        navigate('/comments');
        break;
      default:
        navigate('/');
    }
    setCurrentActiveTab(newValue);
  };

  const handleChangeIndex = (index) => {
    setCurrentActiveTab(index);
  };

  useEffect(() => {
    setCurrentActiveTab(activeTab);
  }, [activeTab]);

  return (
    <>
      <Toolbar />
      <Box
        sx={{
          bgcolor: 'background.paper',
          width: { sm: 'calc(100% - 260px)' },
          ml: { sm: '260px' },
        }}
      >
        <AppBar position="static">
          <Tabs
            value={currentActiveTab}
            onChange={handleChange}
            indicatorColor="secondary"
            sx={{ height: 50 }}
            TabIndicatorProps={{
              sx: {
                height: '5px',
              },
            }}
            textColor="inherit"
            variant="fullWidth"
            aria-label="full width tabs example"
          >
            <Tab label="Search" {...a11yProps(0)} />
            <Tab label="Categories" {...a11yProps(1)} />
            <Tab label="Comments" {...a11yProps(2)} />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis="x"
          index={currentActiveTab}
          onChangeIndex={handleChangeIndex}
        >
          <div value={currentActiveTab} index={0} className="search-tab-panel">
            <SearchTabPanel />
          </div>
          <Paper
            value={currentActiveTab}
            index={1}
            className="categories-tab-panel"
            square
          >
            <CategoriesTabPanel />
          </Paper>
          <Paper
            value={currentActiveTab}
            index={2}
            className="comments-tab-panel"
            square
          >
            <CommentsTabPanel />
          </Paper>
        </SwipeableViews>
      </Box>
    </>
  );
};

export default MyTabs;
