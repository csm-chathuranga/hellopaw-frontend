import React, {  useState } from 'react';
import { Route, Routes } from "react-router-dom";
import routes from "./routes";
import { ThemeProvider, CssBaseline, Grid,Divider } from '@mui/material';
import { darkTheme, lightTheme } from './theme';
import Sidebar from "./components/sidebar"

import  PrimarySearchAppBar  from "./components/Header";
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  return (<>
      <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <CssBaseline />
      {/* <CssVarsProvider> */}
       
    <div className="App">  
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
           </Grid>  
      </Grid>
        {/* <Home /> */}
        <ToastContainer position="top-center"
					toastStyle={{ border:'1px solid #b7b7b7', width:'370px'}}
					autoClose={5000}
					hideProgressBar={true}
					newestOnTop={true}
					closeOnClick
					rtl={false}
					pauseOnFocusLoss
					draggable
					pauseOnHover />
    </div>
    {/* </CssVarsProvider> */}
    </ThemeProvider>
    </>
  );
}

export default App;
