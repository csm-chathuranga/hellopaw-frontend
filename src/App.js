import React, {  useState } from 'react';
import { Route, Routes } from "react-router-dom";
import routes from "./routes";
import { ThemeProvider, CssBaseline, Grid,Divider } from '@mui/material';
import { darkTheme, lightTheme } from './theme';
import Sidebar from "./components/sidebar"
import ScrollTop from "./components/ScrollTop"
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Paper from '@mui/material/Paper';
import PetsIcon from '@mui/icons-material/Pets';
import BookOnlineIcon from '@mui/icons-material/BookOnline';
import DisplaySettingsIcon from '@mui/icons-material/DisplaySettings';
import { useNavigate } from "react-router-dom"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import  PrimarySearchAppBar  from "./components/Header";
import { ToastContainer } from 'react-toastify';
import HomeIcon from '@mui/icons-material/Home';
import 'react-toastify/dist/ReactToastify.css';
import { logged } from "../src/store";
import { useAtom } from "jotai";

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate()
  const [loggedStatus, setLogged] = useAtom(logged);

  return (<>
      <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <CssBaseline />
      {/* <CssVarsProvider> */}
       
    <div className="App">  
    <div id="back-to-top-anchor" style={{ position: 'absolute', top: 0 }} />
    <Grid sx={{position:'relative'}}>
    {/* <ModeToggle /> */}
    <PrimarySearchAppBar isDarkTheme={isDarkTheme} setIsDarkTheme={setIsDarkTheme}/>
        <Grid container direction={"row"}>
          <Grid item md={3} display={{ xs: 'none', md: 'block' }}>
                 <Sidebar/>
            </Grid>
     
            <Grid item xs={12} md={9}>
                <Routes>
                {routes.map(({ path, element }) => (
                    <Route key={path} path={path} element={element} exact={true}/>
                ))}
                </Routes>
           </Grid>  
              {loggedStatus ? 
                    <Paper sx={{ position: 'fixed', bottom: -0, left: 0, right: 0 ,display:{ xs: 'block', md: 'none' }}} elevation={3} >
                      <BottomNavigation showLabels value={value} sx={{mt:'0px',height:'70px'}}
                        onChange={(event, newValue) => {
                          setValue(newValue);
                        }}
                      >
                        <BottomNavigationAction label="Home" icon={<HomeIcon />} onClick={()=>navigate('/')} />
                        <BottomNavigationAction label="My pets" icon={<PetsIcon />} onClick={()=>navigate('pet')}/>
                        <BottomNavigationAction label="Appointment" icon={<BookOnlineIcon />} onClick={()=>navigate('appointment')}/>
                        <BottomNavigationAction label="My Appointment" icon={<DisplaySettingsIcon />} onClick={()=>navigate('myAppointment')}/>
                        <BottomNavigationAction label="More" icon={<DisplaySettingsIcon />} onClick={()=>navigate('dashboard')}/>
                        {/* <BottomNavigationAction  icon={<MoreVertIcon sx={{mt:'-20px'}}/>} /> */}
                      </BottomNavigation>
                  </Paper>
              :null}
           </Grid>  
      </Grid>
        {/* <Home /> */}
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
        {/* <ToastContainer position="top-center"
					toastStyle={{ border:'1px solid #b7b7b7', width:'370px'}}
					autoClose={5000}
					hideProgressBar={true}
					newestOnTop={true}
					closeOnClick
					rtl={false}
					pauseOnFocusLoss
					draggable
					pauseOnHover /> */}
      <ScrollTop/>
    </div>
    {/* </CssVarsProvider> */}
    </ThemeProvider>
    </>
  );
}

export default App;
