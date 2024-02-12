// import  PrimarySearchAppBar  from "../components/Header";
import  Footer  from "../components/Footer";
// import  ResponsiveSidebar  from "../components/Toolbar/sidebar";
import  Search  from "../pages/common/search";
import {Grid,TextField,Button,Typography,Box,Divider } from '@mui/material';
import { makeStyles } from '@mui/styles';
// import OverflowCard from "./FullImageCard"
import RecipeReviewCard from "./post"
import ModeToggle from "./test"
import FixedBottomNavigation from "../components/popular"
import CustomImageList from "../components/story"
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ArchiveIcon from '@mui/icons-material/Archive';
import Paper from '@mui/material/Paper';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import PetsIcon from '@mui/icons-material/Pets';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';


// // --- Style --- //
// const useStyles = makeStyles({
//   container: {
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     justifyContent: "center"
//   },
//   /**
//    * Max Card with for demo
//    * same values used in Material-Ui Card Demos
//    */
//   card: {
//     maxWidth: 345
//   },

//   /**
//    * Applied to Orginal Card demo
//    * Same vale used in Material-ui Card Demos
//    */
//   media: {
//     height: 140
//   },

//   /**
//    * Demo stlying to inclrease text visibility
//    * May verry on implementation
//    */
//   fiCardContent: {
//     color: "#ffffff",
//     backgroundColor: "rgba(0,0,0,.24)"
//   },
//   fiCardContentTextSecondary: {
//     color: "rgba(255,255,255,0.78)"
//   }
// });

function Home() {
  // const classes = useStyles();
    return (
         <Grid container spacing={2}>
             <Grid item xs={12} md={9}>
              <Grid item xs={12}   sx={{mt:2,overflowX: 'scroll'}}>
                <CustomImageList/>
                <RecipeReviewCard img="https://d.newsweek.com/en/full/2324781/chocolate-labrador-puppy-laying-grass.webp"/>
                <RecipeReviewCard img="https://i.ytimg.com/vi/ami0N5tZGMU/maxresdefault.jpg"/>

                <RecipeReviewCard img="https://thepet.community/wp-content/uploads/2020/05/doghouse-medium.jpg"/>

                <RecipeReviewCard img="https://thepet.community/wp-content/uploads/2020/05/erskine-pets-medium.jpg"/>
                <RecipeReviewCard img="https://thepet.community/wp-content/uploads/2020/05/paws-galore.png"/>
              </Grid>
            </Grid>
          <Grid item xs={12} md={3} display={{ xs: 'none', md: 'block' }}>
          <FixedBottomNavigation/>
          </Grid>
          <Grid sx={{mt:2}}>
          </Grid>
          {/* <Footer/> */}
        </Grid>



    );
}

export default Home;