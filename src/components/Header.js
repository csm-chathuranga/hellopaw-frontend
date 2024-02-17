import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MoreIcon from '@mui/icons-material/MoreVert';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import CloseIcon from '@mui/icons-material/Close';
import Switch from '@mui/material/Switch';
import Register from "./Register/register";
import { Divider,ListItemIcon} from "@mui/material";
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import { toast } from 'react-toastify';
import {  login } from "../services/authService";
import { logged } from "../../src/store";
import { useAtom } from "jotai";
import localStore from 'store2';
import HomeIcon from '@mui/icons-material/Home';
import { useNavigate } from "react-router-dom"

let schema = yup.object().shape({
  email: yup.string().required("Email is required"),
  password: yup.string().required("Password is required"),
});

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


export default function PrimarySearchAppBar({isDarkTheme, setIsDarkTheme}) {
  const [open, setOpen] = React.useState(false);
  const [loginError, setLoginError] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [loggedStatus, setLogged] = useAtom(logged);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [load, setLoad] = useState(false);
  const navigate = useNavigate()

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const {  register, handleSubmit,  formState: { errors },  setValue,getValues  } = useForm({ resolver: yupResolver( schema), });


  let submitHandler = async (data) => {
    try {
      setLoginError(false);
        setLoad(true);
        let res=await login(data);
        setLogged(true);
        localStore('authToken', res.body.res);
        handleClose();
        // toast.success('Registration successfull')
    } catch (error) {
        setLoginError(true);
        setLoad(false);
    } finally{
        setLoad(false);
    }
}

const logout = (event) => {
  setLogged(false);
  localStorage.removeItem('token')
  localStorage.removeItem('loggedPet')
  localStore('authToken', null);
  navigate('/')
};

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
      <AppBar position="static" sx={{position:'fixed',zIndex:1000,top:0,backgroundColor:'#0b1416',}}>
        <Toolbar>
  
            <img src="/assets/images/logo3.png" style={{height:'50px',color:'#ffff'}}/>
    
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'block', md: 'flex' } }}>

          <Switch {...label} checked={isDarkTheme} onChange={(e)=>setIsDarkTheme(!isDarkTheme)} />
          
          {!loggedStatus?
            <>       
            <Button onClick={handleOpen}  variant="contained" color="warning" sx={{borderRadius:'50px',mr:2}}>Sign In</Button>
            <Register/>
            </> :
            <>
            <Button onClick={logout}  variant="contained" color="warning" sx={{borderRadius:'50px',mr:2}}>Logout</Button>
            <HomeIcon sx={{fontSize:'35px',cursor:'pointer'}} onClick={()=>navigate('/')}/>
            </>
            }   
       
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
      <form onSubmit={handleSubmit(submitHandler)} id="hook-form">
        
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        
        <Grid item xs={12} md={12} sx={{mt:2}} >
          <label>Email <span style={{color:'red'}}>*</span></label>
          <TextField
              {...register("email")}
              {...textProps}
              error={errors?.email ? true : false}
              helperText={errors?.email ? errors.email.message : null}
              placeholder="Please Enter email address.."
              />
        </Grid>
        <Grid item xs={12} md={12}  sx={{mt:2}}>
          <label>Password <span style={{color:'red'}}>*</span></label>
          <TextField
              {...register("password")}
              type='password'
              {...textProps}
              error={errors?.password ? true : false}
              helperText={errors?.password ? errors.password.message : null}
              placeholder="Please Enter Password.."
              />
             {loginError ? <Typography sx={{color:'red',mt:1}}>Invalid Email or Password</Typography> : null} 
        </Grid>
          <Button type="submit"  fullWidth variant="contained"  sx={{ mt:loginError ? 1 : 3, mb: 2 }} 
                             disabled={load}>{load ? "processing" : "Sign In"  }  </Button>
          {/* <Grid container>
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
          </Grid> */}
        </form>

        </Box>
      </Modal>

    </Box>
  );
}