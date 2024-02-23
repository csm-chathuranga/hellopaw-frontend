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
import { getMyPets } from "../../services/petService";
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
      setRows(res.body);
    }
    useEffect(() => {
      getPets();
  }, []);

  return (
    <div className="main-wrapper">
      {booking ? 
         <Grid container direction="row" sx={{p:2}}>
          <Typography sx={{m:1,fontSize:'18px'}}>Make An Appoitment</Typography>
          <form onSubmit={handleSubmit(submitHandler)} id="hook-form">
            <Grid container direction="row">
 
      
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
                        <label>Choose An date <span style={{color:'red'}}>*</span></label>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                          <DatePicker
                            className={classes.datePicker}
                            onChange={(newValue) => {
                              handleDob(newValue);
                            }}
                            value={dob}
                            sx={{ width: "100%" }}
                            slotProps={{
                              textField: {
                                helperText: dobErr ? "Date of birth is required" : null,
                                error: dobErr ? true : false,
                              },
                            }}
                          />
                        </LocalizationProvider>
                    </Grid>

                    <Grid item xs={12} md={6} sx={{ p: 1 }} >
                    <label>Note <span style={{color:'red'}}>*</span></label>
                        <TextField
                        className={classes.root}
                        {...register("color")}
                        {...textProps}
                        error={errors?.color ? true : false}
                        helperText={errors?.color ? errors.color.message : null}
                        placeholder="Special Note"  />
                    </Grid>

                    <Grid item xs={12} md={6} sx={{ p: 1 }}>
                        <label>color <span style={{color:'red'}}>*</span></label>
                        <TextField
                        className={classes.root}
                        {...register("color")}
                        {...textProps}
                        error={errors?.color ? true : false}
                        helperText={errors?.color ? errors.color.message : null}
                        placeholder="Please enter color"  />
                    </Grid>

                    <Grid item md={12} display="flex" container direction="row"
                        alignItems="right"
                        justifyContent="right" gap={2} sx={{p:2}}>
                   <Button onClick={()=> navigate(`/appointment`)}
                        variant="outlined"
                        color="primary" sx={{padding:'10px 40px'}}>
                           Cancel
                        </Button>
                    <Button
                        disabled={load ? true : false}
                        type="submit"
                        variant="contained"
                        color="primary" sx={{padding:'10px 40px'}}>
                            {load ? ('Wait') : ('Continue')}
                        </Button>
                    </Grid>
            </Grid>
        </form>
        </Grid>
        : 
        <Grid display={{ xs: 'block', md: 'flex' }} direction={'row'} >
            <Grid xs={12} md={4}  alignItems={"center"} justifyContent={{ xs: 'center', md: 'center' }} 
                    display={'flex'} gap={1} sx={{ m: 1 ,mt:5,border:'1px solid #8080801c',borderRadius:'10px',p:3}} direction={'row'}>

                    <Grid  alignItems={"center"} justifyContent={{ xs: 'center', md: 'center' }} display={'flex'} direction={'column'} gap={1}>
                      <Grid>
                        <Avatar alt="Remy Sharp"  sx={{width:'100px',height:'100px',borderRadius:'5px'}} src="https://www.petvet.lk/wp-content/uploads/2019/05/Nalinika.jpg"/>
                      </Grid>
                      <Grid display={'flex'} alignItems={'center'} >
                        <Rating name="read-only" value={2} readOnly />
                      </Grid>
                      <Grid>
                          <Typography sx={{ fontSize: '16px', fontWeight: 500, lineHeight: '22px',  }}>{'Name rachel samueal'}</Typography>
                      </Grid>

                      <Grid display={'flex'} alignItems={'left'} justifyContent={'left'} sx={{width:'100%',mt:2}}>
                        <Grid xs={6}>
                          <Typography sx={{ fontSize: '16px', fontWeight: 500, lineHeight: '22px',fontWeight:800  }}>{'Clinic'}:</Typography>
                        </Grid>
                        <Grid xs={6}>
                          <Typography sx={{ fontSize: '16px', fontWeight: 500, lineHeight: '22px'  }}>{'Anuradhapura'}</Typography>
                        </Grid>
                      </Grid>


                      <Grid display={'flex'} alignItems={'left'} justifyContent={'left'} sx={{width:'100%',mt:2}}>
                        <Grid xs={6}>
                          <Typography sx={{ fontSize: '16px', fontWeight: 500, lineHeight: '22px',fontWeight:800  }}>{'Location'}:</Typography>
                        </Grid>
                        <Grid xs={6}>
                          <Typography sx={{ fontSize: '16px', fontWeight: 500, lineHeight: '22px'  }}>{'Anuradhapura'}</Typography>
                        </Grid>
                      </Grid>

                      <Grid display={'flex'} alignItems={'left'} justifyContent={'left'} sx={{width:'100%',mt:2}}>
                        <Grid xs={6}>
                          <Typography sx={{ fontSize: '16px', fontWeight: 500, lineHeight: '22px',fontWeight:800  }}>{'Email'}:</Typography>
                        </Grid>
                        <Grid xs={6}>
                          <Typography sx={{ fontSize: '16px', fontWeight: 500, lineHeight: '22px'  }}>{'Anuradhapura'}</Typography>
                        </Grid>
                      </Grid>

                      <Button variant="contained" color="success" sx={{mt:2}}>  + View Profile </Button>
                    </Grid>
            </Grid>

          <Grid xs={12} md={7}  alignItems={"center"} justifyContent={{ xs: 'center', md: 'center' }} sx={{pt:2}}>

            <Typography sx={{mt:3,mb:1,fontSize:'18px',ml:2}}>Check available time slot,</Typography>

              <List sx={{ width: '100%',minWidth:'300px', bgcolor: 'background.paper',p:1}}>

                <ListItem alignItems="flex-start" sx={{borderRadius:'5px',border:'1px solid #8080801c',mt:0.5}}>
                      <AccordionWithButton setBooking={setBooking}/>
                </ListItem>
              </List>
              {/* <Alert severity="warning" sx={{mt:2,width:'96%',ml:'2%'}}> Shedule not updated</Alert> */}
          </Grid>
        </Grid>
        }
        
        {/* <TimeSlotCalculator/>
        <NextThree/> */}
    </div>
  );
}
