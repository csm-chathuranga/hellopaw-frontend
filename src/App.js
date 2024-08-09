// File: src/App.js

import React, { useState, useEffect } from 'react';
import { Route, Routes } from "react-router-dom";
import routes from "./routes";
import { ThemeProvider, CssBaseline, Grid, Paper, Popover, IconButton, MenuItem, MenuList, BottomNavigationAction, BottomNavigation, Avatar } from '@mui/material';
import { darkTheme, lightTheme } from './theme';
import Sidebar from "./components/sidebar";
import ScrollTop from "./components/ScrollTop";
import { useNavigate } from "react-router-dom";
import PrimarySearchAppBar from "./components/Header";
import { ToastContainer } from 'react-toastify';
import HomeIcon from '@mui/icons-material/Home';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import 'react-toastify/dist/ReactToastify.css';
import { logged, user } from "../src/store";
import { useAtom } from "jotai";

// Import sidebarConfig for navigation
// Import conditionally in useEffect if the user is logged in
let sidebarConfig;

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const [value, setValue] = useState(0);
  const navigate = useNavigate();
  const [loggedStatus] = useAtom(logged);
  const [localUser] = useAtom(user);
  const [anchorEl, setAnchorEl] = useState(null);

  useEffect(() => {
    if (loggedStatus) {
      // Dynamically import the sidebarConfig only when logged in
      import('./utils/sidebarConfig').then((module) => {
        sidebarConfig = module.default;
      });
    }
  }, [loggedStatus]);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  // Service items to be displayed in the popover
  const serviceItems = [
    { text: "Grooming", icon: <Avatar src="/pet-grooming.png" />, path: 'service/grooming' },
    { text: "Doctor Channeling", icon: <Avatar src="/360_F_601954739_dJ0VcsEl7js0vq8Ag2hx8giMpo71km3o.jpg" />, path: '/appointment' },
    { text: "Stores", icon: <Avatar src="/black-circle-pet-shop5686.logowik.com.webp" />, path: '/stores' },
    { text: "Boarding", icon: <Avatar src="/pet-boarding.png" />, path: 'service/boarding' },
    { text: "Transport", icon: <Avatar src="/pet-taxi.png" />, path: 'service/transfer' },
  ];

  // Function to render bottom navigation items based on user type
  const renderBottomNavigationItems = () => {
    if (!loggedStatus || !sidebarConfig) {
      return { visibleItems: [], popoverItems: serviceItems };
    }

    const userType = localUser?.type || 'owner'; // Default to 'owner' if no type
    const sidebarItems = sidebarConfig[userType] || [];
    // Show the first three items of sidebar in visible navigation, service items in popover
    const visibleItems = sidebarItems.slice(0, 3);
    const popoverItems = [...serviceItems, ...sidebarItems.slice(3)];

    return { visibleItems, popoverItems };
  };

  const { visibleItems, popoverItems } = renderBottomNavigationItems();

  return (
    <>
      <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
        <CssBaseline />
        <div className="App">
          <div id="back-to-top-anchor" style={{ position: 'absolute', top: 0 }} />
          <Grid sx={{ position: 'relative' }}>
            <PrimarySearchAppBar isDarkTheme={isDarkTheme} setIsDarkTheme={setIsDarkTheme} />
            <Grid container direction={"row"}>
              <Grid item md={3} display={{ xs: 'none', md: 'block' }}>
                <Sidebar />
              </Grid>

              <Grid item xs={12} md={9}>
                <Routes>
                  {routes.map(({ path, element }) => (
                    <Route key={path} path={path} element={element} exact={true} />
                  ))}
                </Routes>
              </Grid>

              {loggedStatus ? (
                <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, display: { xs: 'block', md: 'none' } }} elevation={3}>
                  <BottomNavigation
                    showLabels
                    value={value}
                    sx={{ mt: '0px', height: '70px', justifyContent: 'space-between', position: 'relative' }}
                    onChange={(event, newValue) => {
                      setValue(newValue);
                    }}
                  >
                    <BottomNavigationAction
                      label="Home"
                      icon={<HomeIcon sx={{ fontSize: '23px' }} />}
                      onClick={() => navigate('/')}
                    />
                    {visibleItems.map((item, index) => (
                      <BottomNavigationAction
                        key={index}
                        label={item.text}
                        icon={React.cloneElement(item.icon, { sx: { fontSize: '23px' } })}
                        onClick={() => navigate(item.path)}
                      />
                    ))}
                    <BottomNavigationAction
                      label="More"
                      icon={<MoreVertIcon sx={{ fontSize: '23px' }} />}
                      onClick={handlePopoverOpen}
                    />
                  </BottomNavigation>
                  <Popover
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handlePopoverClose}
                    anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'center',
                    }}
                    transformOrigin={{
                      vertical: 'bottom',
                      horizontal: 'center',
                    }}
                  >
                    <MenuList>
                      {popoverItems.map((item, index) => (
                        <MenuItem
                          key={index}
                          onClick={() => {
                            navigate(item.path);
                            handlePopoverClose();
                          }}
                        >
                          {React.cloneElement(item.icon, { sx: { fontSize: '20px', marginRight: '10px' } })}
                          {item.text}
                        </MenuItem>
                      ))}
                    </MenuList>
                  </Popover>
                </Paper>
              ) : (
                <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, display: { xs: 'block', md: 'none' } }} elevation={3}>
                  <BottomNavigation
                    showLabels
                    value={value}
                    sx={{ mt: '0px', height: '70px', justifyContent: 'space-between', position: 'relative' }}
                    onChange={(event, newValue) => {
                      setValue(newValue);
                    }}
                  >
                    <BottomNavigationAction
                      label="Home"
                      icon={<HomeIcon sx={{ fontSize: '23px' }} />}
                      onClick={() => navigate('/')}
                    />
                    <BottomNavigationAction
                      label="More"
                      icon={<MoreVertIcon sx={{ fontSize: '23px' }} />}
                      onClick={handlePopoverOpen}
                    />
                  </BottomNavigation>
                  <Popover
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handlePopoverClose}
                    anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'center',
                    }}
                    transformOrigin={{
                      vertical: 'bottom',
                      horizontal: 'center',
                    }}
                  >
                    <MenuList>
                      {serviceItems.map((item, index) => (
                        <MenuItem
                          key={index}
                          onClick={() => {
                            navigate(item.path);
                            handlePopoverClose();
                          }}
                        >
                          {React.cloneElement(item.icon, { sx: { fontSize: '20px', marginRight: '10px' } })}
                          {item.text}
                        </MenuItem>
                      ))}
                    </MenuList>
                  </Popover>
                </Paper>
              )}
            </Grid>
          </Grid>

          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
          />
          <ScrollTop />
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
