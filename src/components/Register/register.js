import {useState} from 'react';
import * as React from 'react';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Grid from "@mui/material/Grid";
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import Link from "@mui/material/Link";
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import PetOwner from "./owner";
import Doctor from "./doctor";

const textProps = {
  id: "outlined-basic",
  variant: "outlined",
  fullWidth: true,
};

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p:2,
  // backgroundColor:'#000000',
  height:'95vh',
  overflow:'auto'
};


const Register = () => {
  const [open, setOpen] = useState(false);
  const [alignment, setAlignment] = React.useState('web');

  const handleChange = ( event,  newAlignment ) => {
    setAlignment(newAlignment);
  };
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
    <Button onClick={handleOpen}  variant="outlined" color="warning" sx={{borderRadius:'50px'}}>Sign Up</Button>

    <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description" >
      <Box sx={{...style}}>
      <Grid container display={"flex"} justifyContent={"right"} alignItems={"right"}>
        <CloseIcon sx={{mt:'-10px',cursor:'pointer'}} onClick={handleClose}/>
      </Grid>
        <Typography component="h1" variant="h5" sx={{textAlign:'center'}}>
          Sign Up
        </Typography>
        <Grid container display={"flex"} justifyContent={"right"} alignItems={"right"}>
          <ToggleButtonGroup color="primary" value={alignment} exclusive
                  onChange={handleChange} aria-label="Platform" sx={{mt:2,mb:1,width:'100%'}}>
                  <ToggleButton value="doctor" sx={{width:'50%',height:'30px'}}>Doctor</ToggleButton>
                  <ToggleButton value="owner" sx={{width:'50%',height:'30px'}}>Pet Owner</ToggleButton>
          </ToggleButtonGroup>
        </Grid>
        {alignment =='owner' ? <PetOwner/>: <Doctor/>}
        </Box>
      </Modal>

    </>
  );
};

export default Register;
