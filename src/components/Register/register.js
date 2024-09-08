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


const CLIENT_ID = '989579985190-pq2ofa7jcbevvbfqvdh0gh3tfro798c7.apps.googleusercontent.com'; // Replace with your actual client ID

const Register = () => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [showButtons, setShowButtons] = useState(true);
  const [completed, setCompleted] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setShowButtons(true);
    setOpen(false);
  }
  const handleServiceProviderRegistration = () => setShowButtons(false);

  const onSuccess =async (response) => {
    const decoded = jwtDecode(response.credential);
    let data={};
    const { email, given_name, family_name, picture, birthdate, gender } = decoded;
    try {
      data['name']=given_name+' '+family_name;
      data['email']=email;
      data['password']=email+'google_auth';
      data['type']='google_auth';
      let res=await create(data);
      setCompleted(true);
      // toast.success('Registration successfull')
  } catch (error) {
      // toast.error(error?.response?.data || 'Registraion failed')
      // setLoad(false);
  } finally{
      // setLoad(false);
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
        {/* <Box sx={{ ...style, width: { xs: '300px', md: showButtons ? '400px' : '800px' } }}> */}
          <Grid container display={"flex"} justifyContent={"right"} alignItems={"right"}>
            <CloseIcon sx={{ mt: '-10px', cursor: 'pointer' }} onClick={handleClose} />
          </Grid>
          <Typography component="h1" variant="h5" sx={{ textAlign: 'center' }}>
            Sign Up
          </Typography>
          <Grid container display={"flex"} direction={"column"} justifyContent={"center"} alignItems={"center"} sx={{ height:showButtons ? '80%' : '100%' }}>
            {showButtons ? (
              <Grid container display={"flex"} direction={"column"} justifyContent={"center"} alignItems={"center"} >
                {/* <Typography sx={{ mb: 1, textAlign: 'center' }}>
                  Login as a normal user using your credential
                </Typography> */}
                <Grid item xs={12} md={12} sx={{ mt: 1,mb:1 }} display={'flex'} justifyContent={'center'} alignItems={'center'} direction={'column'}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => setShowButtons(false)}
                  startIcon={<HowToRegIcon />}
                  sx={{ mb: 2, width: '80%' }}
                >
                  Register Now
                </Button>
                <Box sx={{ width: '100%', textAlign: 'center', mb: 2 }}>
                  <Typography variant="body1">Or Continue with</Typography>
                </Box>
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
                      startIcon={<GoogleIcon />}
                      sx={{ mb: 2, width: '80%', backgroundColor: '#db4437', '&:hover': { backgroundColor: '#db4437' } }}
                    >
                      Sign in with Google
                    </Button>
                  )}
                />
            </Grid>
            </Grid>
            ) : (
              <>
              {completed ? 
                <Grid sx={{ p: 1, width: '100%' }} display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
                  <CheckCircleIcon sx={{ fontSize: '120px', m: 2, color: theme.palette.success.main }} />
                  <Typography sx={{ fontSize: '14px', color: theme.palette.text.primary, p: 2 }}>Signup Completed!</Typography>
                </Grid>
              :
              // <Grid sx={{ p: 1, width: '100%' }} display={'flex'} flexDirection={'row'}>
                  <PetOwner setCompleted={setCompleted} handleClose={handleClose} />
                // </Grid>
               }
              
              </>
            )}
          </Grid>

        </Box>
      </Modal>
    </GoogleOAuthProvider>
  );
};

export default Register;
