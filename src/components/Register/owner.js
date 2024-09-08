"use client";
import * as React from "react";
import Button from "@mui/material/Button";
import { Grid, TextField, InputLabel, Autocomplete, ToggleButton, ToggleButtonGroup, Avatar, Select, MenuItem } from "@mui/material";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material"; 
import { toast } from 'react-toastify';
import { create } from "../../services/PetOwner";
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiInputBase-input': {
      borderRadius: 5,
      padding: '10px 15px',
      outline: 'none',
      height: '45px',
    }
  },
  autocompleteRoot: {
    '& .MuiAutocomplete-input': {
      border: 'none',
    },
  },
}));

const cities = [
  'Colombo', 'Kandy', 'Galle', 'Jaffna', 'Negombo', 
  'Anuradhapura', 'Trincomalee', 'Batticaloa', 
  'Matara', 'Ratnapura'
];

const iconstyle = { fontSize: '10px', marginRight: '10px' };

let schema = yup.object().shape({
  name: yup.string().required("Full Name is required"),
  nic: yup.string().required("NIC is required"),
  phone_number: yup.string().required(),
  email: yup.string().required("Email is required"),
  password: yup.string()
    .required('Password is required')
    .min(5, 'Password must be at least 5 characters')
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]+$/,
      'Password must contain at least one letter and one number'
    )
    .required('Password is required'),
  street: yup.string(),
  state: yup.string(),
  postal_code: yup.string(),
});

export default function Owner({ completed, setCompleted, handleClose }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // Detect if mobile view
  const [load, setLoad] = useState(false);
  const classes = useStyles();
  const [alignment, setAlignment] = React.useState('boarding');
  const [gender, setGender] = React.useState('male');
  const [value, setValue] = React.useState('Negombo');

  const handleChange = (event, newAlignment) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment);
    }
  };

  const handleChangeGender = (event, newGender) => {
    if (newGender !== null) {
      setGender(newGender);
    }
  };

  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema), });
  const textProps = {
    id: "outlined-basic",
    variant: "outlined",
    fullWidth: true,
  };

  let submitHandler = async (data) => {
    try {
      setLoad(true);
      data.type = alignment;
      data.gender = gender;
      data.city = value;
      let res = await create(data);
      setCompleted(true);
    } catch (error) {
      toast.error(error?.response?.data || 'Registration failed')
      setLoad(false);
    } finally {
      setLoad(false);
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit(submitHandler)} id="hook-form">
        <Grid container direction="row" sx={{ mt: 8 }}>
          
          {/* Responsive ToggleButtonGroup / Select */}
          <Grid container spacing={1} display={"flex"} direction={"row"} justifyContent={"center"} alignItems={"center"} >
            {isMobile ? null : (
              <>
                <Grid item xs={6} sm={6} md={2}>
                  <ToggleButtonGroup
                    color="primary"
                    value={alignment}
                    exclusive
                    onChange={handleChange}
                    aria-label="Service Type"
                    sx={{ width: '100%' }}
                  >
                    <ToggleButton sx={{ width: '100%' }} value="doctor">
                      <Avatar src="/360_F_601954739_dJ0VcsEl7js0vq8Ag2hx8giMpo71km3o.jpg" sx={iconstyle} />
                      Doctor
                    </ToggleButton>
                  </ToggleButtonGroup>
                </Grid>
                <Grid item xs={6} sm={6} md={2}>
                  <ToggleButtonGroup
                    sx={{ width: '100%' }}
                    color="primary"
                    value={alignment}
                    exclusive
                    onChange={handleChange}
                    aria-label="Service Type"
                  >
                    <ToggleButton sx={{ width: '100%' }} value="grooming">
                      <Avatar src="/pet-grooming.png" sx={iconstyle} /> Grooming
                    </ToggleButton>
                  </ToggleButtonGroup>
                </Grid>
                <Grid item xs={6} sm={6} md={3}>
                  <ToggleButtonGroup
                    sx={{ width: '100%' }}
                    color="primary"
                    value={alignment}
                    exclusive
                    onChange={handleChange}
                    aria-label="Service Type"
                  >
                    <ToggleButton sx={{ width: '100%' }} value="owner">
                      <Avatar src="/pet-owner.jpeg" sx={iconstyle} /> Pet Owner
                    </ToggleButton>
                  </ToggleButtonGroup>
                </Grid>
                <Grid item xs={6} sm={6} md={2}>
                  <ToggleButtonGroup
                    sx={{ width: '100%' }}
                    color="primary"
                    value={alignment}
                    exclusive
                    onChange={handleChange}
                    aria-label="Service Type"
                  >
                    <ToggleButton sx={{ width: '100%' }} value="boarding">
                      <Avatar src="/pet-boarding.png" sx={iconstyle} /> Boarding
                    </ToggleButton>
                  </ToggleButtonGroup>
                </Grid>

                <Grid item xs={6} sm={6} md={2}>
                  <ToggleButtonGroup
                    sx={{ width: '100%' }}
                    color="primary"
                    value={alignment}
                    exclusive
                    onChange={handleChange}
                    aria-label="Service Type"
                  >
                    <ToggleButton sx={{ width: '100%' }} value="transfer">
                      <Avatar src="/pet-taxi.png" sx={iconstyle} /> Transfer
                    </ToggleButton>
                  </ToggleButtonGroup>
                </Grid>
              </>
            )}
          </Grid>
          
          {/* Rest of the form fields */}

          <Grid item xs={12} md={6} sx={{ p: 1 }}>
            <InputLabel>Name <span style={{ color: 'red' }}>*</span></InputLabel>
            <TextField
              className={classes.root}
              {...register("name")}
              {...textProps}
              error={errors?.name ? true : false}
              helperText={errors?.name ? errors.name.message : null}
              placeholder="Please enter Full name"
            />
          </Grid>

          {isMobile ? (
              <Grid item xs={12} md={6} sx={{ p: 1 }}>
                <InputLabel>User Type <span style={{ color: 'red' }}>*</span></InputLabel>
                <Select
                  value={alignment}
                  onChange={(e) => setAlignment(e.target.value)}
                  fullWidth
                >
                  <MenuItem value="doctor">Doctor</MenuItem>
                  <MenuItem value="grooming">Grooming</MenuItem>
                  <MenuItem value="owner">Pet Owner</MenuItem>
                  <MenuItem value="boarding">Boarding</MenuItem>
                  <MenuItem value="transfer">Transfer</MenuItem>
                </Select>
              </Grid>
            ) : null}
          <Grid item xs={12} md={6} sx={{ p: 1 }}>
            <InputLabel>NIC <span style={{ color: 'red' }}>*</span></InputLabel>
            <TextField
              className={classes.root}
              {...register("nic")}
              {...textProps}
              error={errors?.nic ? true : false}
              helperText={errors?.nic ? errors.nic.message : null}
              placeholder="Please enter NIC"
            />
          </Grid>

          <Grid item xs={12} md={6} sx={{ p: 1 }}>
            <InputLabel>Gender <span style={{ color: 'red' }}>*</span></InputLabel>
            <ToggleButtonGroup
              color="primary"
              value={gender}
              exclusive
              onChange={handleChangeGender}
              aria-label="Gender"
            >
              <ToggleButton value="male" sx={{ width: '120px' }}>Male</ToggleButton>
              <ToggleButton value="female" sx={{ width: '120px' }}>Female</ToggleButton>
            </ToggleButtonGroup>
          </Grid>

          <Grid item xs={12} md={6} sx={{ p: 1 }}>
            <InputLabel>Phone <span style={{ color: 'red' }}>*</span></InputLabel>
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
            <InputLabel>Email <span style={{ color: 'red' }}>*</span></InputLabel>
            <TextField
              className={classes.root}
              {...register("email")}
              {...textProps}
              error={errors?.email ? true : false}
              helperText={errors?.email ? errors.email.message : null}
              placeholder="Please enter Email"
            />
          </Grid>

          <Grid item xs={12} md={6} sx={{ p: 1 }}>
            <InputLabel>Password <span style={{ color: 'red' }}>*</span></InputLabel>
            <TextField
              className={classes.root}
              {...register("password")}
              {...textProps}
              error={errors?.password ? true : false}
              helperText={errors?.password ? errors.password.message : null}
              placeholder="Please enter Password"
            />
          </Grid>

          <Grid item xs={12} md={6} sx={{ p: 1 }}>
            <InputLabel>Street</InputLabel>
            <TextField
              className={classes.root}
              {...register("street")}
              {...textProps}
              error={errors?.street ? true : false}
              helperText={errors?.street ? errors.street.message : null}
              placeholder="Please enter Street Name"
            />
          </Grid>

          <Grid item xs={12} md={6} sx={{ p: 1 }}>
            <InputLabel>City <span style={{ color: 'red' }}>*</span></InputLabel>
            <Autocomplete
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
              options={cities}
              renderInput={(params) => <TextField {...params} sx={{ border: 'none' }} />}
            />
          </Grid>

          <Grid item xs={12} md={6} sx={{ p: 1 }}>
            <InputLabel>State</InputLabel>
            <TextField
              className={classes.root}
              {...register("state")}
              {...textProps}
              error={errors?.state ? true : false}
              helperText={errors?.state ? errors.state.message : null}
              placeholder="Please enter State"
            />
          </Grid>

          <Grid item xs={12} md={6} sx={{ p: 1 }}>
            <InputLabel>Postal Code</InputLabel>
            <TextField
              className={classes.root}
              {...register("postal_code")}
              {...textProps}
              error={errors?.postal_code ? true : false}
              helperText={errors?.postal_code ? errors.postal_code.message : null}
              placeholder="Please enter Postal code"
            />
          </Grid>

          <Grid item md={12} display="flex" container direction="row"
            alignItems="right"
            justifyContent="right" gap={2} sx={{ p: 2 }}>

            <Button
              onClick={() => handleClose()}
              variant="outlined"
              color="primary" sx={{ padding: '10px 40px' }}>
              Cancel
            </Button>

            <Button
              disabled={load ? true : false}
              type="submit"
              variant="contained"
              color="primary" sx={{ padding: '10px 40px' }}>
              {load ? ('Wait') : ('Continue')}
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
}
