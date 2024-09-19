import { useState } from 'react';
import * as React from 'react';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Grid from "@mui/material/Grid";
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import PetOwner from "./owner";
import { useTheme } from "@mui/material/styles";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import GoogleIcon from '@mui/icons-material/Google';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
import HowToRegIcon from '@mui/icons-material/HowToReg';
import { create } from "../../services/PetOwner";
import { useNavigate } from "react-router-dom";

// Your Google Client ID
const CLIENT_ID = '989579985190-pq2ofa7jcbevvbfqvdh0gh3tfro798c7.apps.googleusercontent.com'; 

// Dynamic redirect URI based on the environment (development or production)
const REDIRECT_URI = window.location.hostname === "localhost" 
  ? "http://localhost:3000/auth-check" 
  : "https://pawsbook.lk/auth-check";   // Production Redirect URI

const Register = () => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [showButtons, setShowButtons] = useState(true);
  const [completed, setCompleted] = useState(false);
  const navigate = useNavigate();

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setShowButtons(true);
    setOpen(false);
  };

  const onSuccess = async (response) => {
    const decoded = jwtDecode(response.credential);
    let data = {};
    const { email, given_name, family_name } = decoded;
    try {
      data['name'] = given_name + ' ' + family_name;
      data['email'] = email;
      data['password'] = email + 'google_auth';
      data['type'] = 'google_auth';
      let res = await create(data);
      setCompleted(true);
      navigate('/');
    } catch (error) {
      alert('Registration failed: ' + error?.response?.data || 'Unknown error');
    }
  };

  const onFailure = (response) => {
    console.log('Login Failed:', response);
    alert('Login Failed: ' + response);
  };

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: showButtons ? 350 : 800,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 2,
    height: showButtons ? '45vh' : '95vh',
    overflow: 'auto'
  };

  return (
    <GoogleOAuthProvider clientId={CLIENT_ID}>
      <Button onClick={handleOpen} variant="outlined" color="warning" sx={{ borderRadius: '50px' }}>Sign Up</Button>

      <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <Box sx={{ ...style, width: { xs: '300px', md: showButtons ? '400px' : '800px' } }}>
          <Grid container display={"flex"} justifyContent={"right"} alignItems={"right"}>
            <CloseIcon sx={{ mt: '-10px', cursor: 'pointer' }} onClick={handleClose} />
          </Grid>

          <Grid container display={"flex"} direction={"column"} justifyContent={"center"} alignItems={"center"} sx={{ height: showButtons ? '80%' : '100%' }}>
            {showButtons ? (
              <Grid container display={"flex"} direction={"column"} justifyContent={"center"} alignItems={"center"} >
                <Grid item xs={12} md={12} sx={{ mt: 1, mb: 1 }} display={'flex'} justifyContent={'center'} alignItems={'center'} direction={'column'}>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => { setOpen(false); navigate('/register'); }}
                    startIcon={<HowToRegIcon />}
                    sx={{ mb: 2, width: { xs: '100%', md: '80%' } }} // Responsive width
                  >
                    Register Now
                  </Button>
                  <Box sx={{ width: '100%', textAlign: 'center', mb: 2 }}>
                    <Typography variant="body1">Or Continue with</Typography>
                  </Box>
                  <GoogleLogin
                    onSuccess={onSuccess}
                    onError={onFailure}
                    ux_mode="popup" // Using redirect mode for better mobile support
                    // redirect_uri={'https://pawsbook.lk/auth-check'} // Use the dynamically defined REDIRECT_URI
                    render={renderProps => (
                      <Button
                        onClick={renderProps.onClick}
                        disabled={renderProps.disabled}
                        variant="contained"
                        color="default"
                        startIcon={<GoogleIcon />}
                        sx={{ mb: 2, width: { xs: '100%', md: '80%' }, backgroundColor: '#db4437', '&:hover': { backgroundColor: '#db4437' } }} // Responsive width
                      >
                        Sign in with Google
                      </Button>
                    )}
                  />
                </Grid>
              </Grid>
            ) : (
              <>
                {completed ? (
                  <Grid sx={{ p: 1, width: '100%' }} display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
                    <CheckCircleIcon sx={{ fontSize: '120px', m: 2, color: theme.palette.success.main }} />
                    <Typography sx={{ fontSize: '14px', color: theme.palette.text.primary, p: 2 }}>Signup Completed!</Typography>
                  </Grid>
                ) : (
                  <PetOwner setCompleted={setCompleted} handleClose={handleClose} />
                )}
              </>
            )}
          </Grid>

        </Box>
      </Modal>
    </GoogleOAuthProvider>
  );
};

export default Register;
