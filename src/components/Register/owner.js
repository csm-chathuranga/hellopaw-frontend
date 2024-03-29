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
import { create } from "../../services/PetOwner";
import { makeStyles } from '@mui/styles';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import InputLabel from '@mui/material/InputLabel';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiInputBase-input': {
      borderRadius: 5,
      padding: '10px 15px',
      outline:'none',
      height:'45px',
    }
  },
}));


let schema = yup.object().shape({
    name: yup.string().required("Full Name is required"),
    nic: yup.string().required("NIC is required"),
    // gender: yup.string().required("Gender is required"),
    phone_number:yup.string().required(),
    email: yup.string().required("Email is required"),
    password:yup.string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
      'Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character'
    ),
    street:yup.string(),
    city:yup.string().required,
    state:yup.string(),
    postal_code:yup.string(),
  });

export default function Ownner() {
    const theme = useTheme();
    const [load, setLoad] = useState(false);
    const classes = useStyles();
    const [alignment, setAlignment] = React.useState('grooming');
    const [gender, setGender] = React.useState('male');

    const handleChange = (event, newAlignment) => {
      setAlignment(newAlignment);
    };

    const handleChangeGender = (event, newAlignment) => {
        setGender(newAlignment);
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
            data.type=alignment;
            data.gender=gender;
            let res=await create(data);
            toast.success('Registration successfull')
        } catch (error) {
            toast.error(error?.response?.data || 'Registraion failed')
            setLoad(false);
        } finally{
            setLoad(false);
        }
    }
  return (
    <div>
            <form onSubmit={handleSubmit(submitHandler)} id="hook-form">
            <Grid container direction="row">

                    <Grid item xs={12} md={12} sx={{ p: 1 }} display={'flex'} alignItems={'center'} justifyContent={'center'}>
                    <ToggleButtonGroup  color="primary" value={alignment} exclusive
                        onChange={handleChange}  aria-label="Platform"  >
                        <ToggleButton sx={{width:'100px'}} value="grooming">Grooming</ToggleButton>
                        <ToggleButton sx={{width:'100px'}} value="walking">walking</ToggleButton>
                        <ToggleButton sx={{width:'100px'}} value="transfer">transfer</ToggleButton>
                        <ToggleButton sx={{width:'100px'}} value="owner">Pet Owner</ToggleButton>
                        <ToggleButton sx={{width:'100px'}} value="doctor">Doctor</ToggleButton>
                    </ToggleButtonGroup>
                    </Grid>
                    <Grid item xs={12} md={6} sx={{ p: 1 }} >
                        <InputLabel>Name <span style={{color:'red'}}>*</span></InputLabel>
                        <TextField
                        className={classes.root}
                        {...register("name")}
                        {...textProps}
                        error={errors?.name ? true : false}
                        helperText={errors?.name ? errors.name.message : null}
                        placeholder="Please enter Full name"
                        />
                    </Grid>

                    <Grid item xs={12} md={6} sx={{ p: 1 }} >
                        <InputLabel>NIC <span style={{color:'red'}}>*</span></InputLabel>
                        <TextField
                        className={classes.root}
                        {...register("nic")}
                        {...textProps}
                        error={errors?.nic ? true : false}
                        helperText={errors?.nic ? errors.nic.message : null}
                        placeholder="Please enter NIC"
                        />
                    </Grid>
                    
                    <Grid item xs={12} md={6} sx={{ p: 1 }} >
                        <InputLabel>Gender <span style={{color:'red'}}>*</span></InputLabel>
                        <ToggleButtonGroup
                            color="primary"
                            value={gender}
                            exclusive
                            onChange={handleChangeGender}
                            aria-label="Platform"
                            >
                            <ToggleButton value="male" sx={{width:'120px'}}>Male</ToggleButton>
                            <ToggleButton value="female" sx={{width:'120px'}}>Female</ToggleButton>
                        </ToggleButtonGroup>
                        {/* <TextField
                        className={classes.root}
                        {...register("gender")}
                        {...textProps}
                        error={errors?.gender ? true : false}
                        helperText={errors?.gender ? errors.gender.message : null}
                        placeholder="Please Gender"
                        /> */}
                    </Grid>

                    <Grid item xs={12} md={6} sx={{ p: 1 }} >
                        <InputLabel>Phone <span style={{color:'red'}}>*</span></InputLabel>
                        <TextField
                        className={classes.root}
                        {...register("phone_number")}
                        {...textProps}
                        error={errors?.phone_number ? true : false}
                        helperText={errors?.phone_number ? errors.phone_number.message : null}
                        placeholder="Please Phone number"
                        />
                    </Grid>

                    <Grid item xs={12} md={6} sx={{ p: 1 }}>
                        <InputLabel>Email <span style={{color:'red'}}>*</span></InputLabel>
                        <TextField
                        className={classes.root}
                        {...register("email")}
                        {...textProps}
                        error={errors?.email ? true : false}
                        helperText={errors?.email ? errors.email.message : null}
                        placeholder="Please enter Email"  />
                    </Grid>

                    <Grid item xs={12} md={6} sx={{ p: 1 }}>
                        <InputLabel>password <span style={{color:'red'}}>*</span></InputLabel>
                        <TextField
                        className={classes.root}
                        {...register("password")}
                        {...textProps}
                        error={errors?.password ? true : false}
                        helperText={errors?.password ? errors.password.message : null}
                        placeholder="Please enter Password"  />
                    </Grid>

                    <Grid item xs={12} md={6} sx={{ p: 1 }}>
                        <InputLabel>Street </InputLabel>
                        <TextField
                        className={classes.root}
                        {...register("street")}
                        {...textProps}
                        error={errors?.street ? true : false}
                        helperText={errors?.street ? errors.street.message : null}
                        placeholder="Please enter Street Name"  />
                    </Grid>

                    <Grid item xs={12} md={6} sx={{ p: 1 }}>
                        <InputLabel>City <span style={{color:'red'}}>*</span></InputLabel>
                        <TextField
                        className={classes.root}
                        {...register("city")}
                        {...textProps}
                        error={errors?.city ? true : false}
                        helperText={errors?.city ? errors.city.message : null}
                        placeholder="Please enter Street Name"  />
                    </Grid>

                    <Grid item xs={12} md={6} sx={{ p: 1 }}>
                        <InputLabel>State </InputLabel>
                        <TextField
                        className={classes.root}
                        {...register("state")}
                        {...textProps}
                        error={errors?.state ? true : false}
                        helperText={errors?.state ? errors.state.message : null}
                        placeholder="Please enter Street Name"  />
                    </Grid>

                    <Grid item xs={12} md={6} sx={{ p: 1 }}>
                        <InputLabel>Postal Code </InputLabel>
                        <TextField
                        className={classes.root}
                        {...register("postal_code")}
                        {...textProps}
                        error={errors?.postal_code ? true : false}
                        helperText={errors?.postal_code ? errors.postal_code.message : null}
                        placeholder="Please enter Postal code"  />
                    </Grid>

                    <Grid item md={12} display="flex" container direction="row"
                        alignItems="right"
                        justifyContent="right" gap={2} sx={{p:2}}>
     
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
    </div>
  );
}
