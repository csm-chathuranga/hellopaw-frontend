import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Box, Typography, Grid, Divider, Avatar } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { logged, user } from "../../src/store";
import { useAtom } from "jotai";
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import PetsIcon from '@mui/icons-material/Pets';
import BookOnlineRoundedIcon from '@mui/icons-material/BookOnlineRounded';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { useLocation } from 'react-router-dom';
import { useTheme } from "@mui/material/styles";
import MedicationIcon from '@mui/icons-material/Medication';

const sidebarConfig = {
  owner: [
    { text: "My Pets", icon: <PetsIcon />, path: 'pet' },
    { text: "Make an appointment", icon: <BookOnlineRoundedIcon sx={{ color: 'green' }} />, path: 'appointment' },
    { text: "My Appointment", icon: <CalendarMonthIcon sx={{ color: 'blue' }} />, path: 'myAppointment' },
    { text: "My Post", icon: <DynamicFeedIcon />, path: 'posts' },

  ],
  doctor: [
    { text: "Dashboard", icon: <DashboardIcon />, path: 'dashboard' },
    { text: "Bank List", icon: <AccountBalanceIcon />, path: 'banks' },
    { text: "My Post", icon: <DynamicFeedIcon />, path: 'posts' },
  ],
  admin: [
    { text: "Dashboard", icon: <DashboardIcon />, path: 'dashboard' },
    { text: "My Post", icon: <DynamicFeedIcon />, path: 'posts' },
    { text: "My Service", icon: <CalendarMonthIcon />, path: 'myService' },
    { text: "Doctor Confirmation", icon: <ConfirmationNumberIcon />, path: 'doctorList' },
    { text: "What's New Section", icon: <CreateNewFolderIcon />, path: 'newSection' },
  ],
  transfer: [
    { text: "My Post", icon: <DynamicFeedIcon />, path: 'posts' },
    { text: "My Service", icon: <CalendarMonthIcon />, path: 'myService' },
    // { text: "Make an appointment", icon: <BookOnlineRoundedIcon sx={{ color: 'green' }} />, path: 'appointment' },
    { text: "My Appointment", icon: <CalendarMonthIcon sx={{ color: 'blue' }} />, path: 'myAppointment' },
  ],
  google_auth: [
    { text: "My Pets", icon: <PetsIcon />, path: 'pet' },
    { text: "My Post", icon: <DynamicFeedIcon />, path: 'posts' },
    // { text: "Make an appointment", icon: <BookOnlineRoundedIcon sx={{ color: 'green' }} />, path: 'appointment' },
    { text: "My Appointment", icon: <CalendarMonthIcon sx={{ color: 'blue' }} />, path: 'myAppointment' },
  ],
};

export default function Sidebar() {
  const theme = useTheme();
  const navigate = useNavigate();
  const [loggedStatus, setLogged] = useAtom(logged);
  const [localUser, setLocalUser] = useAtom(user);
  const location = useLocation();

  const iconstyle = { fontSize: '23px' };

  const selectActive = (act) => {
    if (location.pathname === act) return { backgroundColor: 'grey', m: 1, ml: 0, borderRadius: '100px', color: theme.palette.text.secondary };
  };

  const getSidebarItems = (userType) => {
    return sidebarConfig[userType] || [];
  };

  return (
    <Grid sx={{ position: 'fixed', height: '95vh', top: 50, borderRight: '1px solid #8080801c', overflowX: 'auto' }}>
      <Box sx={{ width: '250px', pt: 2 }}>
        <ListItemButton sx={selectActive('/')} onClick={() => navigate('/')}>
          <ListItemIcon>
            <HomeRoundedIcon sx={{ ...iconstyle, color: '#eb8428' }} />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItemButton>

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
          <ListItemText primary="Doctor Channeling" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
          <Avatar src="/black-circle-pet-shop5686.logowik.com.webp" sx={iconstyle} />
          </ListItemIcon>
          <ListItemText primary="Stores" />
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
      </Box>
      <Divider sx={{ my: 1 }} />
      {loggedStatus ?
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
        : null}
      <Box sx={{ padding: 2, width: '100%', position: 'absolute', bottom: 0 }}>
        <Typography variant="body2" sx={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }} onClick={() => navigate('/policy')}>
          Privacy Policy
          <ArrowForwardIosIcon sx={{ fontSize: '1rem', marginLeft: 0.5 }} />
        </Typography>
      </Box>
    </Grid>
  );
}
