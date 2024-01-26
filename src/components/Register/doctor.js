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

export default function Doctor({modal, setModal,editId,setEditId,refreshTable}) {
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
                <Grid item xs={12} md={6} sx={{ p: 1 }}>
                        <label>Name <span style={{color:'red'}}>*</span></label>
                        <TextField
                        {...register("name")}
                        {...textProps}
                        error={errors?.name ? true : false}
                        helperText={errors?.name ? errors.name.message : null}
                        placeholder="Please enter Full name"
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

                    <Grid item xs={6} md={6} sx={{ p: 1 }}>
                        <label>password <span style={{color:'red'}}>*</span></label>
                        <TextField
                        {...register("password")}
                        {...textProps}
                        error={errors?.password ? true : false}
                        helperText={errors?.password ? errors.password.message : null}
                        placeholder="Please enter Password"  />
                    </Grid>

                    <Grid item xs={6} md={6} sx={{ p: 1 }}>
                        <label>Clinic Name <span style={{color:'red'}}>*</span></label>
                        <TextField
                        {...register("clinic")}
                        {...textProps}
                        error={errors?.clinic ? true : false}
                        helperText={errors?.clinic ? errors.clinic.message : null}
                        placeholder="Please enter Clinic Name"  />
                    </Grid>

                    <Grid item xs={6} md={6} sx={{ p: 1 }}>
                        <label>Clinic Location <span style={{color:'red'}}>*</span></label>
                        <TextField
                        {...register("clinic_location")}
                        {...textProps}
                        error={errors?.clinic_location ? true : false}
                        helperText={errors?.clinic_location ? errors.clinic_location.message : null}
                        placeholder="Please enter Clinic Location"  />
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
