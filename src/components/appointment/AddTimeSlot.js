import React ,{useState,useEffect} from 'react';
import Grid from "@mui/material/Grid";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Select, MenuItem} from '@mui/material';
import { setShedule } from "../../services/doctor";
import { user,logged } from "../../../src/store";
import { useAtom } from "jotai";
import { toast } from 'react-toastify';
import InputLabel from '@mui/material/InputLabel';

const AddTimeSlot = () => {
const [userData, setUser] = useAtom(user);
const [open, setOpen] = React.useState(false);
const [startTime, setStartTime] = useState('16:00');
const [endTime, setEndTime] = useState('18:00');
const [load, setLoad] = React.useState(false);
const [loggedStatus, setLogged] = useAtom(logged);

let submitHandler = async () => {
  try {
    setLoad(true);
    const slots = [];
    let currentTime = new Date(`2024-03-08T${startTime}`);
    while (currentTime < new Date(`2024-03-08T${endTime}`)) {
      const timeSlot = currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      slots.push({time_slot:timeSlot});
      currentTime.setMinutes(currentTime.getMinutes() + 15); 
    }
    
      let res=await setShedule(slots);
      if(res){
        toast.success('New Time slots Added')
        setOpen(false);
      }
     } catch (error) {
      setLoad(false);
  } finally{
      setLoad(false);
  }
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

useEffect(() => {
  if(userData?.has_shedule?.length>0 && loggedStatus) return setOpen(true);
    return setOpen(false);
}, []);

  return (
    <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description" >
    <Box sx={style}>
        <Typography  sx={{mb:2}}>
          Set Daily Time
        </Typography>
        
        <Grid item xs={12} md={12} sx={{mt:2}} >
          <InputLabel>Start Time <span style={{color:'red'}}>*</span></InputLabel>
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
          <InputLabel>End Time <span style={{color:'red'}}>*</span></InputLabel>
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
        <Button type="button" fullWidth variant="contained"  sx={{  mb: 2,mt:4 ,fontSize:'12px'}}  onClick={submitHandler} disabled={load}>  {load ? ('Wait') : ('Save')} </Button>
      </Box>
    </Modal>
  );
};

export default AddTimeSlot;
