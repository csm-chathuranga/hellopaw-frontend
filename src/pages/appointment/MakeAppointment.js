"use client";
import * as React from "react";
import Button from "@mui/material/Button";
import {  Divider, Grid, TextField, Typography,Avatar, IconButton} from "@mui/material";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
// import { getOrganization,getRoleByOrganization,storeUser,getByIdUsers,updateUser } from "../../../pages/api/acl";
import { useTheme } from "@mui/material/styles";
import { toast } from 'react-toastify';
import { create } from "../../services/petService";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useNavigate } from "react-router-dom"
import { makeStyles } from '@mui/styles';
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs";
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { getMyPets, createMeeting } from "../../services/petService";
import Rating from '@mui/material/Rating';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import {Link} from "react-router-dom";
import Chip from '@mui/material/Chip';
import AddIcon from '@mui/icons-material/Add';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import AccordionWithButton from "../../components/appointment/AccordionWithButton";
import ViewDoctorTimeSlots from "../../components/appointment/ViewDoctorTimeSlots";
// import TimeSlotCalculator from "../../components/appointment/TimeSlotCalculate";
// import NextThree from "../../components/appointment/NextThree";
import Alert from '@mui/material/Alert';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiInputBase-input': {
      borderRadius: 5,
      padding: '10px 15px',
      outline:'none',
      height:'50px',
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



let schema = yup.object().shape({
    type: yup.string().required("Type is required"),
    breed: yup.string().required("Breed is required"),
    // birth_date:yup.string().required("Birth date is required"),
    // gender: yup.string().required("Gender is required"),
    color: yup.string().required("Color is required"),
  });

export default function MakeAppointment() {
    const [load, setLoad] = useState(false);
    const [gender, setGender] = React.useState('male');
    const navigate = useNavigate()
    const classes = useStyles();
    const [dob, setDob] = useState(dayjs());
    const [dobErr, setDobErr] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [rows, setRows] = useState([]);
    const [booking, setBooking] = useState(false);
    const [selectedTmeSlot, setSelectTimeSlot] = useState(null);
  
    const handleChange = (event) => {
      setGender(event.target.value);
    };

    const {  register, handleSubmit,  formState: { errors },  setValue,getValues  } = useForm({ resolver: yupResolver( schema), });
    const textProps = {
        id: "outlined-basic",
        variant: "outlined",
        fullWidth: true,
        

      };
      
    let submitHandler = async (data) => {
        try {
            if (dob == null) return setDobErr(true);
            data.birth_date = dob;
            data.image=selectedImage;
            data.gender=gender;
            console.log(data);
            // return;
            setLoad(true);
            let res=await create(data);
            if(res) toast.success('Registration successfull')
        } catch (error) {
            toast.error(error?.response?.data || 'Registraion failed')
            setLoad(false);
        } finally{
            setLoad(false);
        }
    }

    const handleDob = (value) => {
      if (value) {
        setDobErr(false);
      }
      setDob(value);
    };

    const handleImageChange = (e) => {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      if (file) {
        reader.readAsDataURL(file);
      }
    };


    const getPets = async () => {
      let res = await getMyPets();
      let test = await createMeeting();
      console.log(test);
      setRows(res.body);
    }
    useEffect(() => {
      getPets();
  }, []);

  return (
    <div className="main-wrapper">
      {booking ? 
         <Grid direction="row" sx={{p:2}}>
          <Typography sx={{m:1,fontSize:'18px'}}>Make An Appoitment</Typography>
          {/* {JSON.stringify(selectedTmeSlot)} */}
          <form onSubmit={handleSubmit(submitHandler)} id="hook-form">
            <Grid container direction="row" fullWidth>
                    <Grid item xs={12} md={6} sx={{ p: 1 }} >
                        <label>My Pet <span style={{color:'red'}}>*</span></label>
                        <FormControl fullWidth>
                            <Select
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              label="Age" >
                                {rows.map((item)=>{
                                  return <MenuItem value={item.id}>{item?.type || 'N/A'}</MenuItem>
                                })}
                            </Select>
                      </FormControl>
                    </Grid>

                    
                    <Grid item xs={12} md={6} sx={{ p: 1 }} >
                        <label>Choosed Time<span style={{color:'red'}}>*</span></label>
                        <TextField
                        value={selectedTmeSlot?.time_slot}
                        className={classes.root}
                        {...textProps}
                        disabled
                        placeholder="Please enter color"  />
                    </Grid>
              </Grid>
              <Grid container direction="row">
                    <Grid item xs={12} md={6} sx={{ p: 1 }} >
                    <label>Note <span style={{color:'red'}}>*</span></label>
                        <TextField
                        multiline
                        rows={3}
                        className={classes.root}
                        {...register("color")}
                        {...textProps}
                        error={errors?.color ? true : false}
                        helperText={errors?.color ? errors.color.message : null}
                        placeholder="Special Note"  />
                    </Grid>

                    <Grid item xs={12} md={6} sx={{ p: 1 }} >
                      <label>Summary</label>
                      <Grid container direction="row">
                          <Grid item md={3} sx={{ pt: 1 }} >Price</Grid>
                          <Grid item md={9} sx={{ pt: 1 }} >: 300LKR</Grid>
                      </Grid>
                      <Grid container direction="row">
                          <Grid item md={3} sx={{ pt: 1 }} >Date</Grid>
                          <Grid item md={9} sx={{ pt: 1 }} >: 2024-03-25</Grid>
                      </Grid>
                    </Grid>

                    <Grid item md={12} display="flex" container direction="row">
                      <Typography sx={{pt:2,pb:2,color:'pink'}}>
                          * Once you complete the payment you will get a zoom link and you will be able to manage online session with the doctor
                      </Typography>
                    </Grid>

                    <Grid item md={12} display="flex" container direction="row"
                        alignItems="right"
                        justifyContent="right" gap={2} sx={{p:2}}>
                   <Button onClick={()=> navigate(-1)}
                        variant="outlined"
                        color="primary" sx={{padding:'10px 40px'}}>
                           Cancel
                        </Button>
                    <Button
                        disabled={load ? true : false}
                        type="submit"
                        variant="contained"
                        color="primary" sx={{padding:'10px 40px'}}>
                            {load ? ('Wait') : ('Continue to pay')}
                        </Button>
                    </Grid>
            </Grid>
        </form>
        </Grid>
        : 
            <ViewDoctorTimeSlots setBooking={setBooking} setSelect={setSelectTimeSlot}/>
        }
        
        {/* <TimeSlotCalculator/>
        <NextThree/> */}
    </div>
  );
}
