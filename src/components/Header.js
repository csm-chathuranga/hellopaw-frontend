import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from "@mui/material/Grid";
import CloseIcon from '@mui/icons-material/Close';
import Switch from '@mui/material/Switch';
import Register from "./Register/register";
import { Divider, ListItemIcon } from "@mui/material";
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { login } from "../services/authService";
import { logged, user } from "../../src/store";
import { useAtom } from "jotai";
import localStore from 'store2';
import { useNavigate } from "react-router-dom";
import Badge from '@mui/material/Badge';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { makeStyles } from '@mui/styles';
import AddTimeSlot from "./appointment/AddTimeSlot";
import InputLabel from '@mui/material/InputLabel';
import PetsIcon from '@mui/icons-material/Pets';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";


const CLIENT_ID = '989579985190-pq2ofa7jcbevvbfqvdh0gh3tfro798c7.apps.googleusercontent.com'; // Replace with your actual client ID

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiInputBase-input': {
      borderRadius: 5,
      padding: '10px 15px',
      outline: 'none',
      height: '45px',
    }
  },
}));

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

const dropdownMenu = { width: '200px', fontSize: '14px', mt: 1 };

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

export default function PrimarySearchAppBar({ isDarkTheme, setIsDarkTheme }) {
  const [open, setOpen] = React.useState(false);
  const [loginError, setLoginError] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [loggedStatus, setLogged] = useAtom(logged);
  const [userLocal, setUserLocal] = useAtom(user);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [load, setLoad] = React.useState(false);
  const navigate = useNavigate();
  const classes = useStyles();

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema) });

  const onSuccess = async (response) => {
    const decoded = jwtDecode(response.credential);
    const { email, given_name, family_name } = decoded;
    const data = {
      name: `${given_name} ${family_name}`,
      email: email,
      password: email,
      type: 'google_auth'
    };
    
    try {
      const res = await login(data);
      setLogged(true);
      setUserLocal(res.body.user);
      localStore('authToken', res.body.res);
      localStore('user', res.body.user);
      handleClose();
      // toast.success('Login successful')
    } catch (error) {
      setLoginError(true);
      setLoad(false);
    }

    console.log(`Email: ${email}`);
    console.log(`Given Name: ${given_name}`);
    console.log(`Family Name: ${family_name}`);
  };

  const onFailure = (response) => {
    console.log('Login Failed:', response);
    alert('Login Failed: ' + response);
  };

  const submitHandler = async (data) => {
    try {
      setLoginError(false);
      setLoad(true);
      let res = await login(data);
      console.log(res);
      setLogged(true);
      setUserLocal(res.body.user);
      localStore('authToken', res.body.res);
      localStore('user', res.body.user);
      handleClose();
      // toast.success('Registration successful')
    } catch (error) {
      setLoginError(true);
      setLoad(false);
    } finally {
      setLoad(false);
    }
  };

  const logout = (event) => {
    setLogged(false);
    localStorage.removeItem('token');
    localStorage.removeItem('loggedPet');
    localStore('authToken', null);
    navigate('/');
    handleMenuClose();
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
    <Menu anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }} id={mobileMenuId} keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }} open={isMobileMenuOpen} onClose={handleMobileMenuClose}>

      <MenuItem sx={{ ...dropdownMenu }}>
        <Grid display={"flex"} direction={"column"}>
          <Typography sx={{ fontSize: '14px', fontWeight: 600 }}>dcsm</Typography>
          <Typography sx={{ fontSize: '10px', mt: 0.5 }}>dev.chathu@gmail.com</Typography>
        </Grid>
      </MenuItem>

      <MenuItem sx={{ ...dropdownMenu, position: 'relative' }}>
        <ListItemIcon>
          <DarkModeOutlinedIcon fontSize="small" />
        </ListItemIcon>
        Dark mode
        <Switch defaultChecked={false} onChange={(e) => setIsDarkTheme(!isDarkTheme)} sx={{ position: 'absolute', right: 0 }} />
      </MenuItem>
      <Divider />

      <MenuItem sx={dropdownMenu} onClick={logout}>
        <ListItemIcon>
          <PersonOutlineOutlinedIcon fontSize="small" sx={{ color: 'red' }} />
        </ListItemIcon>
        Logout
      </MenuItem>

    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1, mb: 10 }}>
      <AppBar position="static" sx={{ position: 'fixed', zIndex: 1000, top: 0, backgroundColor: '#0b1416', }}>
        <Toolbar>

          <img src="/assets/images/logonew.png" style={{ height: '40px', color: '#ffff' }} onClick={() => navigate('/')} />

          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'block', md: 'flex' } }}>

            {!loggedStatus ?
              <>
                <Button onClick={handleOpen} variant="contained" color="warning" sx={{ borderRadius: '50px', mr: 2 }}>Sign In</Button>
                <Register />
              </> :

              <Grid display={'flex'} direction={'row'} justifyContent={'center'} alignItems={'center'} gap={2}>
                <Button variant="outlined" color="success" sx={{ borderRadius: '30px', mr: 2, fontSize: '11px' }} onClick={() => navigate('/post/add')}>+ post</Button>
                <Badge badgeContent={4} color="primary" sx={{ fontSize: '18px' }}>
                  <NotificationsActiveIcon color="action" sx={{ fontSize: '22px', color: 'grey', }} />
                </Badge>
                <IconButton size="large" aria-label="show more" aria-controls={mobileMenuId} aria-haspopup="true"
                  onClick={handleMobileMenuOpen} color="inherit"  >
                  <AccountCircleOutlinedIcon sx={{ fontSize: '24px' }} />
                </IconButton>
              </Grid>
            }

          </Box>

        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}

      <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description" >
        <Box sx={style}>
          <Grid container display={"flex"} justifyContent={"right"} alignItems={"right"}>
            <CloseIcon sx={{ mt: '-10px', cursor: 'pointer' }} onClick={handleClose} />
          </Grid>
          <form onSubmit={handleSubmit(submitHandler)} id="hook-form">

            <Typography component="h1" variant="h5">
              Sign in
            </Typography>

            <Grid item xs={12} md={12} sx={{ mt: 2 }} >
              <InputLabel>Email <span style={{ color: 'red' }}>*</span></InputLabel>
              <TextField
                className={classes.root}
                {...register("email")}
                {...textProps}
                error={errors?.email ? true : false}
                helperText={errors?.email ? errors.email.message : null}
                placeholder="Please Enter email address.."
              />
            </Grid>
            <Grid item xs={12} md={12} sx={{ mt: 2 }}>
              <InputLabel>Password <span style={{ color: 'red' }}>*</span></InputLabel>
              <TextField
                className={classes.root}
                {...register("password")}
                type='password'
                {...textProps}
                error={errors?.password ? true : false}
                helperText={errors?.password ? errors.password.message : null}
                placeholder="Please Enter Password.."
              />
              {loginError ? <Typography sx={{ color: 'red', mt: 1 }}>Invalid Email or Password</Typography> : null}
            </Grid>
            
            <Button startIcon={<PetsIcon />} type="submit" fullWidth variant="contained" sx={{ mt: loginError ? 1 : 3, height: '40px', fontSize: '12px' }}
              disabled={load}>{load ? "processing" : "Sign In"}</Button>
          </form>
          <GoogleOAuthProvider clientId={CLIENT_ID}>
          <Grid item xs={12} md={12} sx={{ mt: 1,mb:1 }} display={'flex'} justifyContent={'center'} alignItems={'center'} direction={'column'}>
          <Typography variant="body1">or Continue with</Typography>
            <GoogleLogin
              onSuccess={onSuccess}
              onError={onFailure}
              ux_mode="popup"
              render={renderProps => (
                <Button
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                  variant="contained"
                  color="default"
                  startIcon={<img src="https://developers.google.com/identity/images/g-logo.png" alt="Google" style={{ width: '20px', marginRight: '10px' }} />}
                  sx={{ mt: 2,mb:2, width: '400px', backgroundColor: '#db4437', '&:hover': { backgroundColor: '#db4437' } }}
                >
                  Sign in with Google
                </Button>
              )}
            />
            </Grid>
          </GoogleOAuthProvider>
        </Box>
      </Modal>
      <AddTimeSlot />
    </Box>
  );
}
