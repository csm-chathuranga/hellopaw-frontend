import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import Checkbox from "@mui/material/Checkbox";
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from "@mui/material/FormControlLabel";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import CloseIcon from '@mui/icons-material/Close';
import Switch from '@mui/material/Switch';
import Register from "./Register/register";
import { Divider,ListItemIcon} from "@mui/material";
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';


const label = { inputProps: { 'aria-label': 'Switch demo' } };

const textProps = {
  id: "outlined-basic",
  variant: "outlined",
  fullWidth: true,
};

const dropdownMenu={ width:'200px',fontSize:'14px'}

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export default function PrimarySearchAppBar({isDarkTheme, setIsDarkTheme}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
    PaperProps={{
      elevation: 0,
      sx: {
        overflow: "visible",
        filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
        mt: 1.5,
        "& .MuiAvatar-root": {
          width: 32,
          height: 32,
          ml: -0.5,
          mr: 1,
        },
        "&:before": {
          content: '""',
          display: "block",
          position: "absolute",
          top: 0,
          right: 14,
          width: 10,
          height: 10,
          bgcolor: "background.paper",
          transform: "translateY(-50%) rotate(45deg)",
          zIndex: 0,
        },
      },
    }}
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu  anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}  id={mobileMenuId}   keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}  open={isMobileMenuOpen} onClose={handleMobileMenuClose}  >

        <MenuItem  sx={{...dropdownMenu}}>
          <Grid display={"flex"} direction={"column"}>
          <Typography sx={{fontSize:'14px',fontWeight:600}}>dcsm</Typography>
          <Typography sx={{fontSize:'10px'}}>dev.chathu@gmail.com</Typography>
          </Grid>
        </MenuItem>

        <MenuItem>
              <ListItemIcon>
                <PersonOutlineOutlinedIcon fontSize="small" />
              </ListItemIcon>
              My Profile
        </MenuItem>

      <MenuItem sx={{...dropdownMenu,position:'relative'}}>
        <ListItemIcon>
            <DarkModeOutlinedIcon fontSize="small" />
          </ListItemIcon>
          Dark mode 
        <Switch defaultChecked={false} onChange={(e)=>setIsDarkTheme(!isDarkTheme)} sx={ { position:'absolute',right:0 } } />
        </MenuItem>
        <Divider />

      <MenuItem  sx={dropdownMenu}>
          <ListItemIcon>
          <PersonOutlineOutlinedIcon fontSize="small" sx={{color:'red'}}/>
          </ListItemIcon>
          Logout
        </MenuItem>

    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1,mb:10 }}>
      <AppBar position="static" sx={{position:'fixed',zIndex:1000,top:0,backgroundColor:'#121212',}}>
        <Toolbar>
          {/* <IconButton size="large" edge="start"  color="inherit" aria-label="open drawer"  sx={{ mr: 2 }}  >
            <MenuIcon />
          </IconButton> */}
          {/* <Typography  variant="h6"  noWrap component="div" sx={{ display: { xs: 'none', sm: 'block' } }} > */}
            <img src="/assets/images/logo3.png" style={{height:'50px',color:'#ffff'}}/>
            {/* PetBaw */}
    

          {/* </Typography> */}
          {/* <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search> */}
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'block', md: 'flex' } }}>
          {/* <FormControlLabel  control={<MaterialUISwitch sx={{ m: 1 }} defaultChecked />}   /> */}
          {/* isDarkTheme, setIsDarkTheme */}
          <Switch {...label} checked={isDarkTheme} onChange={(e)=>setIsDarkTheme(!isDarkTheme)} sx={{ visibility: { xs: 'hidden',md: 'show'} }}/>
          <Button onClick={handleOpen}  variant="contained" color="warning" sx={{borderRadius:'50px',mr:2}}>Sign In</Button>
          <Register/>
          {/* <Button   variant="outlined" color="warning" sx={{borderRadius:'50px'}}>Sign Up</Button> */}


            {/* <IconButton size="large" aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="error">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={17} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton> */}
            {/* <IconButton size="large"  edge="end"  aria-label="account of current user" aria-controls={menuId} aria-haspopup="true" onClick={handleProfileMenuOpen}
              color="inherit"  >
              <AccountCircle />
            </IconButton> */}
          </Box>

          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton  size="large"  aria-label="show more" aria-controls={mobileMenuId} aria-haspopup="true"
              onClick={handleMobileMenuOpen} color="inherit"  >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}

      <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description" >
      <Box sx={style}>
      <Grid container display={"flex"} justifyContent={"right"} alignItems={"right"}>
        <CloseIcon sx={{mt:'-10px',cursor:'pointer'}} onClick={handleClose}/>
      </Grid>
        
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Grid item xs={12} md={12} sx={{mt:2}} >
          <label>Email <span style={{color:'red'}}>*</span></label>
          <TextField
          {...textProps}
          placeholder="email"  />
        </Grid>
        <Grid item xs={12} md={12}  sx={{mt:2}}>
          <label>Password <span style={{color:'red'}}>*</span></label>
          <TextField
          {...textProps}
          placeholder="password"  />
        </Grid>
        {/* <TextField margin="normal"  required fullWidth id="email"  label="Email Address" name="email"  autoFocus autocomplete="off"/> */}
        {/* <TextField  margin="normal" required fullWidth name="password"  label="Password" type="password" id="password"  autocomplete="off"/> */}
          {/* <FormControlLabel  control={<Checkbox value="remember" color="primary" />} label="Remember me" /> */}
          <Button type="submit"  fullWidth variant="contained"  sx={{ mt: 3, mb: 2 }} > Sign In </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Modal>

    </Box>
  );
}