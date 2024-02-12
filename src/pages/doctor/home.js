
import {Grid,TextField,Button,Typography,Box,Divider } from '@mui/material';
import FixedBottomNavigation from "../../components/popular"
// import {mainListItems,secondaryListItems} from "../../components/sidebar"


function DoctorHome() {
    return (
        <div className="main-wrapper">
         <Grid container spacing={2}>
            <Grid item xs={12} md={3} display={{ xs: 'none', md: 'block' }}>
              {/* <Grid sx={{position:'fixed', }}>
                {mainListItems}
                <Divider sx={{ my: 1 }} />
                {secondaryListItems}
            </Grid> */}
            </Grid>
          <Grid item xs={12} md={3} display={{ xs: 'none', md: 'block' }}>
            
          </Grid>
          <Grid sx={{mt:2}}>
          </Grid>
        </Grid>


         {/* <Footer/> */}
        </div> 

    );
}

export default DoctorHome;