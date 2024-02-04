import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { Box, Typography } from '@mui/material';
import PetsIcon from '@mui/icons-material/Pets';

export const mainListItems = (
  <Box sx={{width:'250px',pt:2}}>
    <Typography sx={{color:'grey',p:1}}>
      Book a Services
    </Typography>
    <ListItemButton >
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Vets" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <ShoppingCartIcon />
      </ListItemIcon>
      <ListItemText primary="Grooming" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Stores" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Walking" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="Transfer" />
    </ListItemButton>
  </Box>
);

export const secondaryListItems = (
  <Box sx={{p:2}}>
    <Typography sx={{color:'grey'}}>
      What's new
    </Typography>
    <ListItemButton>
      <ListItemIcon>
      <PetsIcon />
      </ListItemIcon>
      <ListItemText primary="My Pets" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
      <PetsIcon />
      </ListItemIcon>
      <ListItemText primary="My Profile" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
      <PetsIcon />
      </ListItemIcon>
      <ListItemText primary="Consultation" />
    </ListItemButton>
  </Box>
);