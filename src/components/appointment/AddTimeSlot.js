import React ,{useState} from 'react';
import Grid from "@mui/material/Grid";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Select, MenuItem} from '@mui/material';
import { setShedule } from "../../services/doctor";

const AddTimeSlot = () => {
const [open, setOpen] = React.useState(true);
const [startTime, setStartTime] = useState('16:00');
const [endTime, setEndTime] = useState('18:00');

let submitHandler = async () => {
    const slots = [];
    let currentTime = new Date(`2024-03-08T${startTime}`);
    while (currentTime < new Date(`2024-03-08T${endTime}`)) {
      const timeSlot = currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      slots.push({time_slot:timeSlot});
      currentTime.setMinutes(currentTime.getMinutes() + 15); 
    }
    // setTimeSlots(slots);
    let res=await setShedule(slots);
    console.log(res);
//   try {
//     console.log(start,end);
//     // setLoginError(false);
//     //   setLoad(true);
//     //   let res=await login(data);
//     //   setLogged(true);
//     //   localStore('authToken', res.body.res);
//     //   handleClose();
//       // toast.success('Registration successfull')
//   } catch (error) {
//     //   setLoginError(true);
//     //   setLoad(false);
//   } finally{
//     //   setLoad(false);
//   }
}

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

const handleClose = () => setOpen(false);

  return (
    <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description" >
    <Box sx={style}>
        <Typography  sx={{mb:2}}>
          Set Daily Time
        </Typography>
        
        <Grid item xs={12} md={12} sx={{mt:2}} >
          <label>Start Time <span style={{color:'red'}}>*</span></label>
          <Select  value={startTime} onChange={(e) => setStartTime(e.target.value)}  fullWidth >
          <MenuItem value="">Select Start Time</MenuItem>
          {[...Array(24).keys()].map(hour => (
            <MenuItem key={hour} value={hour < 10 ? `0${hour}:00` : `${hour}:00`}>
              {hour < 10 ? `0${hour}:00` : `${hour}:00`}
            </MenuItem>
          ))}
        </Select>
        </Grid>
        <Grid item xs={12} md={12} sx={{mt:2}} >
          <label>End Time <span style={{color:'red'}}>*</span></label>
          <Select
          value={endTime}
          onChange={(e) => setEndTime(e.target.value)}
          fullWidth
        >
          <MenuItem value="">Select End Time</MenuItem>
          {[...Array(24).keys()].map(hour => (
            <MenuItem key={hour} value={hour < 10 ? `0${hour}:00` : `${hour}:00`}>
              {hour < 10 ? `0${hour}:00` : `${hour}:00`}
            </MenuItem>
          ))}
        </Select>
        </Grid>
        <Button type="button" fullWidth variant="contained"  sx={{  mb: 2,mt:4 ,fontSize:'12px'}}  onClick={submitHandler}>Save </Button>
      </Box>
    </Modal>
  );
};

export default AddTimeSlot;
