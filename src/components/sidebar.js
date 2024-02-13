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
import { Grid,Divider } from '@mui/material';
import { useNavigate } from "react-router-dom"
import { logged } from "../../src/store";
import { useAtom } from "jotai";

export default function Sidebar() {
  const navigate = useNavigate()
  const [loggedStatus, setLogged] = useAtom(logged);

   return (
    <Grid sx={{position:'fixed',height:'100vh',top:50,borderRight:'1px solid #dcdcdc' }}>
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
        <Divider sx={{ my: 1 }} />
      {loggedStatus ? 
      <Box sx={{p:2}}>
          <Typography sx={{color:'grey'}}>
            What's new
          </Typography>
          <ListItemButton onClick={()=>navigate('pet')}>
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
        </Box> : null }
    </Grid>
   )}
