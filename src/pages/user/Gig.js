"use client";
import * as React from "react";
import Button from "@mui/material/Button";
import {  Divider, Grid, TextField, Typography } from "@mui/material";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
// import { getOrganization,getRoleByOrganization,storeUser,getByIdUsers,updateUser } from "../../../pages/api/acl";
import { useTheme } from "@mui/material/styles";
import { toast } from 'react-toastify';
import { saveService } from "../../services/petService";
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
import InputLabel from '@mui/material/InputLabel';
import { me } from "../../services/authService";


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
    title: yup.string().required("Title is required"),
    des: yup.string().required("Description is required"),
    // birth_date:yup.string().required("Birth date is required"),
    // gender: yup.string().required("Gender is required"),
    amount: yup.string().required("Amount is required"),
  });

export default function Gig() {
    const [load, setLoad] = useState(false);
    const [gender, setGender] = React.useState('male');
    const navigate = useNavigate()
    const classes = useStyles();
    const [dob, setDob] = useState(dayjs());
    const [dobErr, setDobErr] = useState(false);
    const [selectedImage, setSelectedImage] = useState('https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg');
  const [rows, setRows] = useState([]);


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
            data.image=selectedImage;
            console.log(data)
            // return;
            setLoad(true);
            let res=await saveService(data);
            console.log(res);
            if(res) toast.success('Service updated successfull')
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
      let res = await me();
      let decoded=res?.body?.user ? JSON.parse(res?.body?.user?.other) : null;
      if(decoded){
      setValue('title',decoded?.title || '')
      setValue('des',decoded?.des || '')
      setValue('amount',decoded?.amount || '')
      setSelectedImage('http://pv1.happybaw.com/api/images/'+decoded?.image)
      }
    //   console.log(JSON.parse(res?.body?.user?.other).image);
    //   // setRows(res.body);
    }
    useEffect(() => {
      getPets();
  }, []);

  return (
    <div className="main-wrapper">
          <form onSubmit={handleSubmit(submitHandler)} id="hook-form">
         <Grid container direction="row" sx={{p:2}}>
          <Typography sx={{m:1,fontSize:'22px'}}>Update my service details</Typography>
            <Grid container direction="row" display={'flex'} alignItems={'center'} >

            <Grid item xs={12} md={5} sx={{ p: 1 }} >
                <InputLabel>Select the image <span style={{color:'red'}}>*</span></InputLabel>
            {selectedImage && (
                  <div >
                    <img src={selectedImage} alt="Selected" style={{ Width: '250px',height:'250px',border:'1px solid black' }} />
                  </div>
                )}
              <Grid  xs={12} md={12} sx={{ p: 1 }} >
                          <input type="file" {...register('image')} onChange={handleImageChange}/>
               </Grid>
            </Grid>
            <Grid  xs={12} md={7} sx={{ p: 1 }} >
                    <Grid item xs={12} md={12} sx={{ p: 1 }} >
                        <InputLabel>Title <span style={{color:'red'}}>*</span></InputLabel>
                        <TextField
                        className={classes.root}
                        {...register("title")}
                        {...textProps}
                        error={errors?.title ? true : false}
                        helperText={errors?.title ? errors.title.message : null}
                        placeholder="Please enter Title"
                        />
                    </Grid>

                    <Grid item xs={12} md={12} sx={{ p: 1 }} >
                        <InputLabel>Amount <span style={{color:'red'}}>*</span></InputLabel>
                        <TextField
                        type="number"
                        className={classes.root}
                        {...register("amount")}
                        {...textProps}
                        error={errors?.amount ? true : false}
                        helperText={errors?.amount ? errors.amount.message : null}
                        placeholder="Please enter Amount"
                        />
                    </Grid>

                    <Grid item xs={12} md={12} sx={{ p: 1 }} >
                        <InputLabel>Description <span style={{color:'red'}}>*</span></InputLabel>
                        <TextField
                        className={classes.root}
                        {...register("des")}
                        {...textProps}
                        error={errors?.des ? true : false}
                        helperText={errors?.des ? errors.des.message : null}
                        placeholder="Please enter Description"
                        multiline
                        // maxRows={4}
                        />
                    </Grid>
                    
       

                    {/* <Grid item xs={12} md={12} sx={{ p: 1 }} >
                        <InputLabel>Birthdate <span style={{color:'red'}}>*</span></InputLabel>
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
                    </Grid> */}
            </Grid>

                    <Grid item md={12} display="flex" container direction="row"
                        alignItems="right"
                        justifyContent="right" gap={2} sx={{p:2}}>
                        <Button onClick={()=> navigate(`/`)}
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
        </Grid>
        </form>
    </div>
  );
}
