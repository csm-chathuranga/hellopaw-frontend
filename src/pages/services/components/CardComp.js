import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent'
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Rating from '@mui/material/Rating';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from "@mui/material/Grid";
import Box from '@mui/material/Box';
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { makeStyles } from '@mui/styles';
import CloseIcon from '@mui/icons-material/Close';
import InputLabel from '@mui/material/InputLabel';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import dayjs from "dayjs";
import { FormHelperText } from '@mui/material';
import { setAppointment } from "../../../services/service";
import { toast } from 'react-toastify';


const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiInputBase-input': {
      borderRadius: 5,
      padding: '10px 15px',
      outline:'none',
      height:'45px',
    }
  },
  datePicker: {
    '& .MuiInputBase-root': {
      height: '50px',
      padding: '10px 15px',
      borderRadius: 5,
      outline:'none',
    },
  },
}));

const style = {
  position: 'absolute',
  top: '40%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

let schema = yup.object().shape({
  remark: yup.string(),
  pet_id: yup.string().required(),
});



const textProps = {
  id: "outlined-basic",
  variant: "outlined",
  fullWidth: true,
};

export default function CardComp({item,pet}) {
  item= item?.other ? JSON.parse(item?.other) : null;
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const classes = useStyles();
  const [load, setLoad] = React.useState(false);
  const [checkIn, setCheckIn] = React.useState(dayjs());
  const [checkInErr, setCheckInErr] = React.useState(false);
  const [checkOut, setCheckOut] = React.useState(dayjs());
  const [checkOutErr, setCheckOutErr] = React.useState(false);
  const [dayCount, setDayCount] = React.useState(1);

  const {  register, handleSubmit,  formState: { errors },  setValue,getValues  } = useForm({ resolver: yupResolver( schema), });

  const handleCheckIn = (value) => {
    const date1 = dayjs(value);
    const date2 = dayjs(checkOut);
    const differenceInDays = date2.diff(date1, 'day');
    // if(differenceInDays<1) return
    setDayCount(differenceInDays);
    setCheckIn(value);
  };

  const handleCheckOut = (value) => {
    const date1 = dayjs(checkIn);
    const date2 = dayjs(value);
    const differenceInDays = date2.diff(date1, 'day');
    // if(differenceInDays<1) return
    setDayCount(differenceInDays);
    setCheckOut(value);
  };

  let submitHandler = async (data) => {
    try {
      data.checkin=dayjs(checkIn).format('YYYY-MM-DD') ;
      data.checkout=dayjs(checkOut).format('YYYY-MM-DD');
      setLoad(true);
      let res=await setAppointment(data);
      if(res) toast.success('Sheduled successfull')
      handleClose();
    } catch (error) {
      // setLoginError(true);
      setLoad(false);
  } finally{
      setLoad(false);
  }
}
  return (
    <>
    <Card sx={{ mt:2 ,borderRadius:'30px'}} onClick={handleOpen}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
           {item?.title?.charAt(0) || 'A'}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={item?.title || 'N/A'} />
      <CardMedia   component="img"  height="200"
        src={item?.image ? 'http://pv1.happybaw.com/api/images/'+item?.image : 'https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg' }
        alt="Paella dish"
      />
      <Rating name="read-only" value={2} readOnly sx={{ml:2}}/>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {item?.des}
        </Typography>
      </CardContent>
        <Typography sx={{pl:2,pb:1}}>Rs : {item?.amount}.00 (LKR)</Typography>
    </Card>



<Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description" >
<Box sx={{...style,width:{xs:380,md:800},top:{xs:'50%',md:'50%'}} }>
<Grid container display={"flex"} justifyContent={"right"} alignItems={"right"}>
  <CloseIcon sx={{mt:'-10px',cursor:'pointer'}} onClick={handleClose}/>
</Grid>
<form onSubmit={handleSubmit(submitHandler)} id="hook-form">
  
  <Typography component="h3" variant="h5">
   Make an Appointment
  </Typography>
    <Grid  container>
      <Grid item xs={12} md={6} sx={{mt:2,p:1}} >
        <InputLabel>Check In <span style={{color:'red'}}>*</span></InputLabel>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              className={classes.datePicker}
              onChange={(newValue) => {
                handleCheckIn(newValue);
              }}
              value={checkIn}
              sx={{ width: "100%" }}
              slotProps={{
                textField: {
                  helperText: checkInErr ? "Date of birth is required" : null,
                  error: checkInErr ? true : false,
                },
              }}
            />
          </LocalizationProvider>
      </Grid>
      <Grid item xs={12} md={6}  sx={{mt:2,p:1}}>
        <InputLabel>Check out <span style={{color:'red'}}>*</span></InputLabel>          
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              className={classes.datePicker}
              onChange={(newValue) => {
                handleCheckOut(newValue);
              }}
              value={checkOut}
              sx={{ width: "100%" }}
              slotProps={{
                textField: {
                  helperText: checkOutErr ? "Date of birth is required" : null,
                  error: checkOutErr ? true : false,
                },
              }}
            />
          </LocalizationProvider>
      </Grid>
      <Grid item xs={12} md={6} sx={{ p: 1 }} >
        <InputLabel>My Pet <span style={{color:'red'}}>*</span></InputLabel>
        <FormControl fullWidth>
            <Select
            {...register("pet_id")}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Age" >
                {pet.map((item)=>{
                  return <MenuItem value={item.id}>{item?.type || 'N/A'}</MenuItem>
                })}
            </Select>
            <FormHelperText sx={{color:'red'}}>{errors?.pet_id ? errors.pet_id.message : null}</FormHelperText>
      </FormControl>
    </Grid>

      <Grid item xs={12} md={12}  sx={{mt:2,p:1}}>
        <InputLabel>Remark </InputLabel>
        <TextField
            className={classes.root}
            {...register("remark")}
            type='remark'
            {...textProps}
            error={errors?.remark ? true : false}
            helperText={errors?.remark ? errors.remark.message : null}
            placeholder="Special Note..."
            multiline
            minRows={2}
            />
      </Grid>
      <Grid item xs={12} md={12}  sx={{mt:2,p:1,mb:3}}>
        <Typography sx={{pl:2,pb:1}}>Date count : {dayCount}</Typography>
        <Typography sx={{pl:2,pb:1}}>Per day charge : {item?.amount || 0}</Typography>
        <Typography sx={{pl:2,pb:1}}>Total payment : {  dayCount * item?.amount || 0}  </Typography>
        <Typography sx={{pl:2,pb:1}}>Advance payment (10% from total) : {(dayCount * item?.amount || 0  * 10)/100} </Typography>
      </Grid>
    </Grid>
      <Button type="submit"  variant="contained" sx={{ mt:1, mb: 2,height:'35px',width:'100px',position:'absolute',right:50,marginTop:'-30px' }} 
                        disabled={load}>{load ? "processing" : "Proceed"  }  </Button>
    </form>
    </Box>
  </Modal>
</>
  );
}