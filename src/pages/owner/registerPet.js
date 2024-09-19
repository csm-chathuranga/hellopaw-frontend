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
import { create, update } from "../../services/petService";
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
import { getMyPetsById } from "../../services/petService";
import { useParams } from 'react-router-dom'
import { IMG_URL } from "../../utils/constant";
import { handleUpload } from "../../utils/uploadUtils"

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
    name: yup.string().required("Name is required"),
    type: yup.string().required("Type is required"),
    breed: yup.string().required("Breed is required"),
    // birth_date:yup.string().required("Birth date is required"),
    // gender: yup.string().required("Gender is required"),
    color: yup.string().required("Color is required"),
  });

export default function RegisterPet() {
    const [load, setLoad] = useState(false);
    const [gender, setGender] = React.useState('male');
    const navigate = useNavigate()
    const classes = useStyles();
    const [dob, setDob] = useState(dayjs());
    const [edit, setEdit] = useState({});
    const [dobErr, setDobErr] = useState(false);
    const [selectedImage, setSelectedImage] = useState('https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg');
    const params = useParams();


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
            setLoad(true);
            let resImg = await handleUpload(selectedImage);
            data.image = resImg.data.url;
            let res=null
            if (dob == null) return setDobErr(true);
            data.birth_date = dob;
            // data.image=selectedImage;
            data.gender=gender;
            if(params?.id){
              // if(edit)
              data.id=params.id;
              res=await update(data);
            }else{
              res=await create(data);
            }
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
      try {
        let { body }= await getMyPetsById(params.id);
        setValue('name',body?.name || '')
        setValue('type',body?.type || '')
        setValue('breed',body?.breed || '')
        setValue('color',body?.color || '')
        setSelectedImage(IMG_URL+body?.image || 'https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg')
        setGender(body?.gender || 'male')
        setDob(dayjs(body?.dob) || dayjs())
        setEdit(body);
      } catch (error) {
        
      }
    }
  
    useEffect(() => {
      getPets();
  }, [params]);

  return (
    <Grid sx={{mb:10}}>
         <Grid container direction="row" sx={{p:2}}>
          <Typography sx={{m:1,fontSize:'18px'}}>Register Your pet</Typography>
          <form onSubmit={handleSubmit(submitHandler)} id="hook-form">
            <Grid container direction="row">

                    <Grid item xs={12} md={6} sx={{ p: 1 }} >
                        <FormLabel>Select the image <span style={{color:'red'}}>*</span></FormLabel>
                        {selectedImage && (
                          <div>
                            <img src={selectedImage} alt="Selected" style={{ Width: '250px',height:'250px',border:'1px solid black' }} />
                          </div>
                        )}
                        <input type="file" {...register('image')} onChange={handleImageChange}/>
                    </Grid>

                    <Grid item xs={12} md={6} >
                        <Grid sx={{ p: 1 }} >
                              <FormLabel>Name <span style={{color:'red'}}>*</span></FormLabel>
                              <TextField
                              className={classes.root}
                              {...register("name")}
                              {...textProps}
                              error={errors?.name ? true : false}
                              helperText={errors?.name ? errors.name.message : null}
                              placeholder="Please enter Name"
                              />
                          </Grid>

                        <Grid sx={{ p: 1 }} >
                            <FormLabel>Type <span style={{color:'red'}}>*</span></FormLabel>
                            <TextField
                            className={classes.root}
                            {...register("type")}
                            {...textProps}
                            error={errors?.type ? true : false}
                            helperText={errors?.type ? errors.type.message : null}
                            placeholder="Please enter Type"
                            />
                        </Grid>
                        <Grid sx={{ p: 1 }} >
                            <FormLabel>Breed <span style={{color:'red'}}>*</span></FormLabel>
                            <TextField
                            className={classes.root}
                            {...register("breed")}
                            {...textProps}
                            error={errors?.breed ? true : false}
                            helperText={errors?.breed ? errors.breed.message : null}
                            placeholder="Please enter Breed"
                            />
                        </Grid>

                        <Grid item xs={12} sx={{ p: 1 }} >
                          <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
                            <FormControl sx={{ml:1}}>
                              <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label"  name="row-radio-buttons-group" value={gender} onChange={handleChange}>
                                <FormControlLabel value="male" control={<Radio />} label="Male" sx={{border:'1px solid #8080801c',p:1,width:'170px',borderRadius:'10px'}}/>
                                <FormControlLabel value="female" control={<Radio />} label="Female" sx={{border:'1px solid #8080801c',p:1,width:'170px',borderRadius:'10px'}}/>
                              </RadioGroup>
                            </FormControl>
                        </Grid>

                    </Grid>


                    
                    <Grid item xs={12} md={6} sx={{ p: 1 }} >
                        <FormLabel>Birthdate <span style={{color:'red'}}>*</span></FormLabel>
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

                        {/* <TextField
                        className={classes.root}
                        {...register("birth_date")}
                        {...textProps}
                        error={errors?.birth_date ? true : false}
                        helperText={errors?.birth_date ? errors.birth_date.message : null}
                        placeholder="Please Enter Birthdate"
                        /> */}
                    </Grid>

                    {/* <Grid item xs={12} md={6} sx={{ p: 1 }} >
                      <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
                    <FormControl sx={{ml:1}}>
                      <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label"  name="row-radio-buttons-group" value={gender} onChange={handleChange}>
                        <FormControlLabel value="male" control={<Radio />} label="Male" sx={{border:'1px solid #8080801c',p:1,width:'180px',borderRadius:'10px'}}/>
                        <FormControlLabel value="female" control={<Radio />} label="Female" sx={{border:'1px solid #8080801c',p:1,width:'180px',borderRadius:'10px'}}/>
                      </RadioGroup>
                    </FormControl>
                    </Grid> */}

                    <Grid item xs={12} md={6} sx={{ p: 1 }}>
                        <FormLabel>color <span style={{color:'red'}}>*</span></FormLabel>
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
                   <Button onClick={()=> navigate(`/pet`)}
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
    </Grid>
  );
}
