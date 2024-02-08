
import {Grid,TextField,Button,Typography,Box,Divider } from '@mui/material';
import {mainListItems,secondaryListItems} from "../../components/sidebar"
import MyPets from "../../components/owner/mypets";

function OwnerHome() {
    return (
        <div className="main-wrapper">
         <Grid container spacing={2}>
            {/* <Grid item xs={12} md={3} display={{ xs: 'none', md: 'block' }}>
              <Grid sx={{position:'fixed', }}>
                {mainListItems}
                <Divider sx={{ my: 1 }} />
                {secondaryListItems}
            </Grid>
            </Grid> */}
          <Grid item xs={12} md={3} display={{ xs: 'none', md: 'block' }}>
            {/* <MyPets/> */}
            owner
          </Grid>
          <Grid sx={{mt:2}}>
          </Grid>
        </Grid>


         {/* <Footer/> */}
        </div> 

    );
}

export default OwnerHome;