"use client";
import * as React from "react";
import Button from "@mui/material/Button";
import { Divider, Grid, TextField, Typography, FormControl, MenuItem, Select, Alert } from "@mui/material";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import { toast } from 'react-toastify';
import { create, getMyPets } from "../../services/petService";
import { setBookingApi, setPayment } from "../../services/doctor";
import ViewDoctorTimeSlots from "../../components/appointment/ViewDoctorTimeSlots";
import { useNavigate } from "react-router-dom";
import { makeStyles } from '@mui/styles';
import dayjs from "dayjs";
import { createMeeting } from "../appointment/components/hooks/API";

const useStyles = makeStyles(() => ({
  root: {
    '& .MuiInputBase-input': {
      borderRadius: 5,
      padding: '10px 15px',
      outline: 'none',
      height: '50px',
    },
  },
  datePicker: {
    '& .MuiInputBase-root': {
      height: '50px',
      padding: '10px 15px',
      borderRadius: 5,
      outline: 'none',
    },
  },
}));

const schema = yup.object().shape({
  pet_id: yup.string().required("Please select a pet"),  // Required validation for "My Pet"
  note: yup.string().required("Please add a special note"),
});

export default function MakeAppointment() {
  const [load, setLoad] = useState(false);
  const navigate = useNavigate();
  const classes = useStyles();
  const [rows, setRows] = useState([]);
  const [booking, setBooking] = useState(false);
  const [selectedTmeSlot, setSelectTimeSlot] = useState(null);
  const [doctorDetail, setDoctorDetail] = useState({});

  const { register, handleSubmit, formState: { errors }, setValue, getValues } = useForm({
    resolver: yupResolver(schema),
  });

  const textProps = {
    id: "outlined-basic",
    variant: "outlined",
    fullWidth: true,
  };

  const submitHandler = async (data) => {
    try {
      setLoad(true);
      const meetingId = await createMeeting('123');
      data.slot_id = selectedTmeSlot.id;
      data.status = 0;
      data.meeting_id = meetingId;
      
      const amount = doctorDetail?.other ? JSON.parse(doctorDetail.other).amount : 0;
  
      let paymentData = {
        firstname: "John",
        lastname: "Doe",
        email: "john.doe@example.com",
        tele: "+94771234567",
        stuid: "123456",
        pay: amount,  
        user_id: 26,
        service_provider_id: doctorDetail?.id,
        other: data
      };
  
      let res = await setPayment(paymentData);
      
      if (res && res.status === 200 && res.body) {
        window.location.href = res.body;
      } else {
        toast.error('Payment failed, please try again.');
      }
    } catch (error) {
      toast.error(error?.response?.data || 'Registration failed');
    } finally {
      setLoad(false);
    }
  };

  const getPets = async () => {
    let res = await getMyPets();
    setRows(res.body);
  };

  useEffect(() => {
    getPets();
  }, []);

  return (
    <div className="main-wrapper">
      {booking ? 
        <Grid direction="row" sx={{ p: 2 }}>
          <Typography sx={{ m: 1, fontSize: '18px' }}>Make An Appointment</Typography>
          <form onSubmit={handleSubmit(submitHandler)} id="hook-form">
            <Grid container direction="row" fullWidth>
              <Grid item xs={12} md={6} sx={{ p: 1 }}>
                <label>My Pet <span style={{color:'red'}}>*</span></label>
                <FormControl fullWidth error={!!errors.pet_id}>
                  <Select {...register('pet_id')} labelId="demo-simple-select-label" id="demo-simple-select" label="Pet">
                    {rows.map(item => (
                      <MenuItem key={item.id} value={item.id}>{item?.type || 'N/A'}</MenuItem>
                    ))}
                  </Select>
                  {errors.pet_id && (
                    <Typography variant="body2" color="error">{errors.pet_id.message}</Typography>
                  )}
                </FormControl>
              </Grid>
              
              <Grid item xs={12} md={6} sx={{ p: 1 }}>
                <label>Choosed Time<span style={{color:'red'}}>*</span></label>
                <TextField
                  value={selectedTmeSlot?.time_slot}
                  className={classes.root}
                  {...textProps}
                  disabled
                  placeholder="Please select a time slot"
                />
              </Grid>
            </Grid>
            <Grid container direction="row">
              <Grid item xs={12} md={6} sx={{ p: 1 }}>
                <label>Note <span style={{color:'red'}}>*</span></label>
                <TextField
                  multiline
                  rows={3}
                  className={classes.root}
                  {...register("note")}
                  {...textProps}
                  error={!!errors.note}
                  helperText={errors.note?.message}
                  placeholder="Special Note"
                />
              </Grid>

              <Grid item xs={12} md={6} sx={{ p: 1 }}>
                <label>Summary</label>
                <Grid container direction="row">
                  <Grid item md={3} sx={{ pt: 1 }}>Price</Grid>
                  <Grid item md={9} sx={{ pt: 1 }}>
                    {doctorDetail?.other ? `${JSON.parse(doctorDetail.other).amount} LKR` : 'N/A'}
                  </Grid>
                </Grid>
              </Grid>

              <Grid item md={12} sx={{ p: 2, pt: 2 }}>
                <Typography sx={{ color: 'pink' }}>
                  * Once you complete the payment, you will get an online session with the doctor
                </Typography>
              </Grid>

              <Grid item md={12} sx={{ p: 2 }} container direction="row" alignItems="right" justifyContent="right" gap={2}>
                <Button onClick={() => navigate(-1)} variant="outlined" color="primary" sx={{ padding: '10px 40px' }}>
                  Cancel
                </Button>
                <Button
                  disabled={load}
                  type="submit"
                  variant="contained"
                  color="primary"
                  sx={{ padding: '10px 40px' }}
                >
                  {load ? 'Wait' : 'Continue to pay'}
                </Button>
              </Grid>
            </Grid>
          </form>
        </Grid>
      : 
        <ViewDoctorTimeSlots setBooking={setBooking} setSelect={setSelectTimeSlot} setDoctorDetail={setDoctorDetail} />
      }
    </div>
  );
}
