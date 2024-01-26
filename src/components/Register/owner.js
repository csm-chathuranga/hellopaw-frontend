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

let schema = yup.object().shape({
    name: yup.string().required("Full Name is required"),
    email: yup.string().required("Email is required"),
    clinic: yup.string().required(),
    clinic_location: yup.string().required(),
    password:yup.string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
      'Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character'
    )
  });

export default function Ownner() {
    const [load, setLoad] = useState(false);

    const {  register, handleSubmit,  formState: { errors },  setValue,getValues  } = useForm({ resolver: yupResolver( schema), });
    const textProps = {
        id: "outlined-basic",
        variant: "outlined",
        fullWidth: true,
      };
      
    let submitHandler = async (data) => {
        console.log(data);
    }


  return (
    <div>
            <form onSubmit={handleSubmit(submitHandler)} id="hook-form">
            <Grid container direction="row">
                    <Grid item xs={12} md={6} sx={{ p: 1 }} >
                        <label>Name <span style={{color:'red'}}>*</span></label>
                        <TextField
                        {...register("name")}
                        {...textProps}
                        error={errors?.name ? true : false}
                        helperText={errors?.name ? errors.name.message : null}
                        placeholder="Please enter Full name"
                        />
                    </Grid>

                    <Grid item xs={12} md={6} sx={{ p: 1 }} >
                        <label>NIC <span style={{color:'red'}}>*</span></label>
                        <TextField
                        {...register("nic")}
                        {...textProps}
                        error={errors?.nic ? true : false}
                        helperText={errors?.nic ? errors.nic.message : null}
                        placeholder="Please enter NIC"
                        />
                    </Grid>
                    
                    <Grid item xs={12} md={6} sx={{ p: 1 }} >
                        <label>Gender <span style={{color:'red'}}>*</span></label>
                        <TextField
                        {...register("gender")}
                        {...textProps}
                        error={errors?.gender ? true : false}
                        helperText={errors?.gender ? errors.gender.message : null}
                        placeholder="Please enter NIC"
                        />
                    </Grid>

                    <Grid item xs={12} md={6} sx={{ p: 1 }} >
                        <label>Phone <span style={{color:'red'}}>*</span></label>
                        <TextField
                        {...register("phone")}
                        {...textProps}
                        error={errors?.phone ? true : false}
                        helperText={errors?.phone ? errors.phone.message : null}
                        placeholder="Please enter NIC"
                        />
                    </Grid>

                    <Grid item xs={12} md={6} sx={{ p: 1 }}>
                        <label>Email <span style={{color:'red'}}>*</span></label>
                        <TextField
                        {...register("email")}
                        {...textProps}
                        error={errors?.email ? true : false}
                        helperText={errors?.email ? errors.email.message : null}
                        placeholder="Please enter Email"  />
                    </Grid>

                    <Grid item xs={12} md={6} sx={{ p: 1 }}>
                        <label>password <span style={{color:'red'}}>*</span></label>
                        <TextField
                        {...register("password")}
                        {...textProps}
                        error={errors?.password ? true : false}
                        helperText={errors?.password ? errors.password.message : null}
                        placeholder="Please enter Password"  />
                    </Grid>

                    <Grid item xs={12} md={6} sx={{ p: 1 }}>
                        <label>Street <span style={{color:'red'}}>*</span></label>
                        <TextField
                        {...register("street")}
                        {...textProps}
                        error={errors?.street ? true : false}
                        helperText={errors?.street ? errors.street.message : null}
                        placeholder="Please enter Street Name"  />
                    </Grid>

                    <Grid item xs={12} md={6} sx={{ p: 1 }}>
                        <label>City <span style={{color:'red'}}>*</span></label>
                        <TextField
                        {...register("city")}
                        {...textProps}
                        error={errors?.city ? true : false}
                        helperText={errors?.city ? errors.city.message : null}
                        placeholder="Please enter Street Name"  />
                    </Grid>

                    <Grid item xs={12} md={6} sx={{ p: 1 }}>
                        <label>State <span style={{color:'red'}}>*</span></label>
                        <TextField
                        {...register("state")}
                        {...textProps}
                        error={errors?.state ? true : false}
                        helperText={errors?.state ? errors.state.message : null}
                        placeholder="Please enter Street Name"  />
                    </Grid>

                    <Grid item xs={12} md={6} sx={{ p: 1 }}>
                        <label>Postal Code <span style={{color:'red'}}>*</span></label>
                        <TextField
                        {...register("pcode")}
                        {...textProps}
                        error={errors?.pcode ? true : false}
                        helperText={errors?.pcode ? errors.pcode.message : null}
                        placeholder="Please enter Street Name"  />
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
