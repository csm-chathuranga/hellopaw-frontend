// File: src/config/sidebarConfig.js

import PetsIcon from '@mui/icons-material/Pets';
import BookOnlineRoundedIcon from '@mui/icons-material/BookOnlineRounded';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import BookOnlineIcon from '@mui/icons-material/BookOnline';
// Define sidebar configurations for different user types
const sidebarConfig = {
  owner: [
    { text: "My Pets", icon: <PetsIcon />, path: 'pet' },
    { text: "Make an appointment", icon: <BookOnlineRoundedIcon sx={{ color: 'green' }} />, path: 'appointment' },
    { text: "My Appointment", icon: <CalendarMonthIcon sx={{ color: 'blue' }} />, path: 'myAppointment' },
    { text: "My Post", icon: <DynamicFeedIcon />, path: 'posts' },
  ],
  doctor: [
    { text: "Dashboard", icon: <DashboardIcon />, path: 'dashboardDoctor' },
    { text: "Appointments", icon: <CalendarMonthIcon sx={{ color: 'blue' }} />, path: 'DoctorAppointment' },
    { text: "Bank List", icon: <AccountBalanceIcon />, path: 'banks' },
    { text: "My Post", icon: <DynamicFeedIcon />, path: 'posts' },
    { text: "My Service", icon: <CalendarMonthIcon />, path: 'myService' },
  ],
  admin: [
    { text: "Dashboard", icon: <DashboardIcon />, path: 'dashboard' },
    { text: "User List", icon: <PeopleAltIcon />, path: 'userList/doctor' },
    { text: "My Post", icon: <DynamicFeedIcon />, path: 'posts' },
    { text: "Doctor Confirmation", icon: <ConfirmationNumberIcon />, path: 'doctorList' },
    { text: "What's New Section", icon: <CreateNewFolderIcon />, path: 'newSection' },
    { text: "Story", icon: <AutoStoriesIcon />, path: 'story' },
  ],
  transfer: [
    { text: "My Post", icon: <DynamicFeedIcon />, path: 'posts' },
    { text: "My Service", icon: <CalendarMonthIcon />, path: 'myService' },
    // { text: "My Appointment", icon: <CalendarMonthIcon sx={{ color: 'blue' }} />, path: 'myAppointment' },
    { text: "Request", icon: <BookOnlineIcon sx={{ color: 'blue' }} />, path: 'service-provider' },
    
  ],
  boarding: [
    { text: "My Post", icon: <DynamicFeedIcon />, path: 'posts' },
    { text: "My Service", icon: <CalendarMonthIcon />, path: 'myService' },
    // { text: "My Appointment", icon: <CalendarMonthIcon sx={{ color: 'blue' }} />, path: 'myAppointment' },
    { text: "Request", icon: <BookOnlineIcon sx={{ color: 'blue' }} />, path: 'service-provider' },

  ],
  google_auth: [
    { text: "My Pets", icon: <PetsIcon />, path: 'pet' },
    { text: "My Post", icon: <DynamicFeedIcon />, path: 'posts' },
    { text: "Appointment", icon: <CalendarMonthIcon sx={{ color: 'blue' }} />, path: 'myAppointment' },
    // { text: "Request", icon: <BookOnlineIcon sx={{ color: 'blue' }} />, path: 'service-provider' },
  ],
};

export default sidebarConfig;
