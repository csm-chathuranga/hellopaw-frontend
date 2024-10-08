// File: src/components/Sidebar.js

import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Box, Typography, Grid, Divider, Avatar } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { logged, user } from "../../src/store";
import { useAtom } from "jotai";
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import { useLocation } from 'react-router-dom';
import { useTheme } from "@mui/material/styles";
import sidebarConfig from '../utils/sidebarConfig';
import Chip from '@mui/material/Chip';
import FaceIcon from '@mui/icons-material/Face';

export default function Sidebar() {
  const theme = useTheme();
  const navigate = useNavigate();
  const [loggedStatus] = useAtom(logged);
  const [localUser] = useAtom(user);
  const location = useLocation();

  const iconstyle = { fontSize: '23px' };

  const selectActive = (act) => {
    if (location.pathname === act) return { backgroundColor: 'grey', m: 1, ml: 0, borderRadius: '100px', color: theme.palette.text.secondary };
  };

  const getSidebarItems = (userType) => {
    return sidebarConfig[userType] || [];
  };

  return (
    <Grid sx={{ 
        position: 'fixed', 
        height: '95vh', 
        top: 50, 
        borderRight: '1px solid #8080801c', 
        overflowX: 'auto', 
        '&::-webkit-scrollbar': {
          width: '8px',          // Scrollbar width
        },
        '&::-webkit-scrollbar-thumb': {
          backgroundColor: '#2f2f2f',  // Darker gray (thumb color)
          borderRadius: '4px',
        },
        '&::-webkit-scrollbar-thumb:hover': {
          backgroundColor: '#2b2b2b',  // Slightly darker on hover
        },
        '&::-webkit-scrollbar-track': {
          backgroundColor: '#5b5b5b',  // Lighter gray (track color)
        },
        scrollbarWidth: 'thin',  // For Firefox
        scrollbarColor: '#2f2f2f #5b5b5b',  // For Firefox
      }}>
      <Box sx={{ width: '250px', pt: 2 }}>
        <ListItemButton sx={selectActive('/')} onClick={() => navigate('/')}>
          <ListItemIcon>
            <HomeRoundedIcon sx={{ ...iconstyle, color: '#eb8428' }} />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItemButton>
        {localUser?.type !== 'doctor' && (
          <>
            <Typography sx={{ color: 'grey', p: 1 }}>
              Book a Services
            </Typography>
            <ListItemButton onClick={() => navigate('service/grooming')} sx={selectActive('/service/grooming')}>
              <ListItemIcon>
                <Avatar src="/pet-grooming.png" sx={iconstyle} />
              </ListItemIcon>
              <ListItemText primary="Grooming" />
            </ListItemButton>
            <ListItemButton onClick={() => navigate('/appointment')} sx={selectActive('/appointment')}>
              <ListItemIcon>
                <Avatar src="/360_F_601954739_dJ0VcsEl7js0vq8Ag2hx8giMpo71km3o.jpg" sx={iconstyle} />
              </ListItemIcon>
              <ListItemText primary="V-Channeling" />
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon>
                <Avatar src="/black-circle-pet-shop5686.logowik.com.webp" sx={iconstyle} />
              </ListItemIcon>
              <ListItemText primary="Stores" />
              <Box sx={{ ml: 1, color: 'green', fontSize: '12px'}}>
                <Chip 
                  label="Coming Soon" 
                  sx={{
                    animation: 'pulse 1.5s infinite',
                    '@keyframes pulse': {
                      '0%': {
                        transform: 'scale(1)',
                        opacity: 1,
                      },
                      '50%': {
                        transform: 'scale(1.1)',
                        opacity: 0.7,
                      },
                      '100%': {
                        transform: 'scale(1)',
                        opacity: 1,
                      },
                    }
                  }} 
                />
              </Box>
            </ListItemButton>
            <ListItemButton onClick={() => navigate('service/boarding')} sx={selectActive('/service/boarding')}>
              <ListItemIcon>
                <Avatar src="/pet-boarding.png" sx={iconstyle} />
              </ListItemIcon>
              <ListItemText primary="Boarding" />
            </ListItemButton>
            <ListItemButton onClick={() => navigate('service/transfer')} sx={selectActive('/service/transfer')}>
              <ListItemIcon>
                <Avatar src="/pet-taxi.png" sx={iconstyle} />
              </ListItemIcon>
              <ListItemText primary="Transport" />
            </ListItemButton>
          </>
        )}
      </Box>

      {loggedStatus && (
        <>
      <Divider sx={{ my: 1 }} />
        <Box sx={{ p: 2 }}>
          <Typography sx={{ color: 'grey' }}>
            My List
          </Typography>
          {getSidebarItems(localUser?.type).map((item, index) => (
            <ListItemButton key={index} onClick={() => navigate(item.path)} sx={selectActive(`/${item.path}`)}>
              <ListItemIcon>
                {React.cloneElement(item.icon, { sx: iconstyle })}
              </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          ))}
        </Box>
        </>
      )}
      <Divider sx={{ my: 1 }} />
      <ListItemButton  onClick={() => navigate('/about')}>
          <ListItemText primary="About us" />
      </ListItemButton>
      <ListItemButton  onClick={() => navigate('/contact')}>
          <ListItemText primary="Contact Information" />
      </ListItemButton>
      <ListItemButton  onClick={() => navigate('/policy')}>
          <ListItemText primary="Privacy Policy" />
      </ListItemButton>
      <ListItemButton  onClick={() => navigate('/term')}>
          <ListItemText primary="Terms and Conditions" />
      </ListItemButton>
      <ListItemButton  onClick={() => navigate('/refund')}>
          <ListItemText primary="Refund Policy" />
      </ListItemButton>
    </Grid>
  );
}
