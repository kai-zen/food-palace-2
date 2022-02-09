import React, { useState } from 'react';
import SwipeableViews from 'react-swipeable-views';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Toolbar } from '@mui/material';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const MyTabs = () => {
  const [currentActiveTab, setCurrentActiveTab] = useState(0);

  const handleChange = (event, newValue) => {
    setCurrentActiveTab(newValue);
  };

  const handleChangeIndex = (index) => {
    setCurrentActiveTab(index);
  };

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
                height: '8px',
              },
            }}
            textColor="inherit"
            variant="fullWidth"
            aria-label="full width tabs example"
          >
            <Tab label="Search food" {...a11yProps(0)} />
            <Tab label="Categories" {...a11yProps(1)} />
            <Tab label="Articles" {...a11yProps(2)} />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis="x"
          index={currentActiveTab}
          onChangeIndex={handleChangeIndex}
        >
          <TabPanel value={currentActiveTab} index={0}>
            Item One
          </TabPanel>
          <TabPanel value={currentActiveTab} index={1}>
            Item Two
          </TabPanel>
          <TabPanel value={currentActiveTab} index={2}>
            Item Three
          </TabPanel>
        </SwipeableViews>
      </Box>
    </>
  );
};

export default MyTabs;
