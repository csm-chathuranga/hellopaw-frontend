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
import { Grid,Divider,Badge, } from '@mui/material';
import { useNavigate } from "react-router-dom"
import { logged ,user} from "../../src/store";
import { useAtom } from "jotai";
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import BookOnlineRoundedIcon from '@mui/icons-material/BookOnlineRounded';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { useLocation } from 'react-router-dom';
import { useTheme } from "@mui/material/styles";
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function Sidebar() {
  const theme = useTheme();
  const navigate = useNavigate()
  const [loggedStatus, setLogged] = useAtom(logged);
  const [localUser, setLocalUser] = useAtom(user);
  const location = useLocation();

  const iconstyle={
    fontSize:'23px'
  }

  const selectActive = (act) => {
    if(location.pathname==act) return {backgroundColor:'grey',m:1,ml:0,borderRadius:'100px',color:theme.palette.text.secondary}
  };

   return (
    <Grid sx={{position:'fixed',height:'95vh',top:50,borderRight:'1px solid #8080801c',overflowX:'auto' }}>
            <Box sx={{width:'250px',pt:2}}>

            <ListItemButton sx={selectActive('/')} onClick={()=>navigate('/')}>
                <ListItemIcon>
                  <HomeRoundedIcon sx={{...iconstyle,color:'#eb8428'}}/>
                </ListItemIcon>
                <ListItemText primary="Home" />
              </ListItemButton>

              <Typography sx={{color:'grey',p:1}}>
                Book a Services
              </Typography>
              {/* <ListItemButton  onClick={()=>navigate('vets')}>
                <ListItemIcon>
                  <DashboardIcon />
                </ListItemIcon>
                <ListItemText primary="Vets" />
              </ListItemButton> */}
              <ListItemButton onClick={()=>navigate('service/grooming')} sx={selectActive('/service/grooming')}>
                <ListItemIcon>
                  <ShoppingCartIcon sx={iconstyle}/>
                </ListItemIcon>
                <ListItemText primary="Grooming" />
              </ListItemButton>
              <ListItemButton>
              {/* <Badge badgeContent="Coming Soon" color="warning" > */}
                <ListItemIcon>
                  <PeopleIcon sx={iconstyle}/>
                </ListItemIcon>
                <ListItemText primary="Stores" />
              {/* </Badge> */}
              </ListItemButton>
              <ListItemButton onClick={()=>navigate('service/boarding')} sx={selectActive('/service/boarding')}>
                <ListItemIcon>
                  <BarChartIcon sx={iconstyle}/>
                </ListItemIcon>
                <ListItemText primary="Boarding" />
              </ListItemButton>
              <ListItemButton onClick={()=>navigate('service/transfer')} sx={selectActive('/service/transfer')}>
                <ListItemIcon>
                  <LayersIcon sx={iconstyle}/>
                </ListItemIcon>
                <ListItemText primary="Transport" />
              </ListItemButton>
            </Box>
        <Divider sx={{ my: 1 }} />
      {loggedStatus ? 
      <Box sx={{p:2}}>
          <Typography sx={{color:'grey'}}>
            My List
            {/* {JSON.stringify(localUser.type)} */}
          </Typography>
          {localUser?.type == 'owner' ? 
          <>
            <ListItemButton onClick={()=>navigate('dashboard')}  sx={selectActive('/dashboard')}>
              <ListItemIcon>
              <AccountBalanceIcon sx={{...iconstyle}}/>
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItemButton> 
          <ListItemButton onClick={()=>navigate('pet')} sx={selectActive('/pet')}>
            <ListItemIcon>
            <PetsIcon sx={iconstyle}/>
            </ListItemIcon>
            <ListItemText primary="My Pets" />
          </ListItemButton> 
          <ListItemButton onClick={()=>navigate('appointment')} sx={selectActive('/appointment')}>
            <ListItemIcon>
            <BookOnlineRoundedIcon sx={{...iconstyle,color:'green'}}/>
            </ListItemIcon>
            <ListItemText primary="Make an appointment" />
          </ListItemButton>
          <ListItemButton onClick={()=>navigate('myAppointment')} sx={selectActive('/myAppointment')}>
            <ListItemIcon>
            <CalendarMonthIcon sx={{...iconstyle,color:'blue'}}/>
            </ListItemIcon>
            <ListItemText primary="My Appointment" />
          </ListItemButton></>:null }
          
          <ListItemButton onClick={()=>navigate('posts')} sx={selectActive('/posts')} >
            <ListItemIcon>
            <DynamicFeedIcon sx={{...iconstyle}}/>
            </ListItemIcon>
            <ListItemText primary="My Post" />
          </ListItemButton>
          <ListItemButton onClick={()=>navigate('myService')}  sx={selectActive('/myService')}>
            <ListItemIcon>
            <CalendarMonthIcon sx={{...iconstyle}}/>
            </ListItemIcon>
            <ListItemText primary="My Service" />
          </ListItemButton>

          <ListItemButton onClick={()=>navigate('doctorList')}  sx={selectActive('/doctorList')}>
            <ListItemIcon>
            <ConfirmationNumberIcon sx={{...iconstyle}}/>
            </ListItemIcon>
            <ListItemText primary="Doctor Confirmation" />
          </ListItemButton>



          {localUser?.type == 'doctor' ? 
          <>
            <ListItemButton onClick={()=>navigate('banks')}  sx={selectActive('/banks')}>
              <ListItemIcon>
              <AccountBalanceIcon sx={{...iconstyle}}/>
              </ListItemIcon>
              <ListItemText primary="Bank List" />
            </ListItemButton> 
          </>
          :null }


          {localUser?.type == 'doctor' ? <ListItemButton onClick={()=>navigate('newSection')}  sx={selectActive('/newSection')}>
            <ListItemIcon>
            <CreateNewFolderIcon sx={{...iconstyle}}/>
            </ListItemIcon>
            <ListItemText primary="What's New Section" />
          </ListItemButton> :null }

        </Box> : null }
        <Box sx={{ padding: 2, width: '100%', position: 'absolute', bottom: 0 }}>
      <Typography variant="body2" sx={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }} onClick={() => navigate('/policy')}>
        Privacy Policy
        <ArrowForwardIosIcon sx={{ fontSize: '1rem', marginLeft: 0.5 }} />
      </Typography>
    </Box>
    </Grid>
   )}
