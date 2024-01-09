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
import {mainListItems,secondaryListItems} from "../components/sidebar"
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

// --- Fill Image Card Component Imports --- //
import {
  FiCard,
  FiCardActionArea,
  FiCardActions,
  FiCardContent,
  FiCardMedia
} from "./FullImageCard";



// --- Style --- //
const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  /**
   * Max Card with for demo
   * same values used in Material-Ui Card Demos
   */
  card: {
    maxWidth: 345
  },

  /**
   * Applied to Orginal Card demo
   * Same vale used in Material-ui Card Demos
   */
  media: {
    height: 140
  },

  /**
   * Demo stlying to inclrease text visibility
   * May verry on implementation
   */
  fiCardContent: {
    color: "#ffffff",
    backgroundColor: "rgba(0,0,0,.24)"
  },
  fiCardContentTextSecondary: {
    color: "rgba(255,255,255,0.78)"
  }
});

function Home() {
  const classes = useStyles();
    return (
        <div className="main-wrapper">
         {/* <PrimarySearchAppBar /> */}
         {/* <ResponsiveSidebar/> */}

         <Grid container spacing={2}>

            <Grid item xs={12} md={3} display={{ xs: 'none', md: 'block' }}>
              <Grid sx={{position:'fixed', }}>
                {mainListItems}
                <Divider sx={{ my: 1 }} />
                {secondaryListItems}
            </Grid>
            </Grid>
             <Grid item xs={12} md={6}>
              <Grid item xs={12}   sx={{mt:2}}>
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
        </Grid>

        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation  showLabels>
          <BottomNavigationAction label="New Post" icon={<DynamicFeedIcon />} />
          <BottomNavigationAction label="My Pets" icon={<PetsIcon />} />
          <BottomNavigationAction label="My Account" icon={<ManageAccountsIcon />} />
        </BottomNavigation>
      </Paper>

         {/* <Footer/> */}
        </div> 

    );
}

export default Home;