// ResponsiveNavbar.js
import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import  SearchBar  from "../../pages/common/search";

// const useStyles = makeStyles((theme) => ({
//   menuButton: {
//     marginRight: theme.spacing(2),
//     [theme.breakpoints.up('md')]: {
//       display: 'none',
//     },
//   },
//   title: {
//     flexGrow: 1,
//   },
//   drawerPaper: {
//     width: '250px',
//   },
// }));

const ResponsiveNavbar = () => {
  // const classes = useStyles();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setIsDrawerOpen(open);
  };

  const menuItems = [
    { text: 'Home', link: '/' },
    { text: 'About', link: '/about' },
    { text: 'Services', link: '/services' },
    { text: 'Contact', link: '/contact' },
  ];

  return (
    <>
      <AppBar position="sticky">
        <Toolbar>
          <IconButton  edge="start" color="inherit"  aria-label="menu" onClick={toggleDrawer(true)}  >
            <MenuIcon />
          </IconButton>
          <img src="/assets/images/logo2.jpg" style={{height:'50px',color:'#ffff'}}/>
          <SearchBar/>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={toggleDrawer(false)}
        // classes={{ paper: classes.drawerPaper }}
      >
        <List sx={{width:'200px'}}>
          {menuItems.map((item) => (
            <ListItem button key={item.text} onClick={toggleDrawer(false)}>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default ResponsiveNavbar;
