// GroomingModal.js
import React from 'react';
import {
  Box,
  Button,
  Grid,
  Modal,
  Stepper,
  Step,
  StepLabel,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
  TextField,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { makeStyles } from '@mui/styles';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker, TimePicker } from '@mui/x-date-pickers';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import dayjs from "dayjs";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { setAppointment } from "../../services/service";
import { toast } from 'react-toastify';

const useStyles = makeStyles((theme) => ({
  modalContent: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    height: 'calc(100% - 100px)',
  },
  modalFooter: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: '20px',
  },
  modal: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '60%',
    backgroundColor: theme.palette.surfaceLight.primary,
    padding: '20px',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    [theme.breakpoints.down('sm')]: {
      width: '95%',
      top: '50%',
    },
  },
  stepper: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
}));

const steps = [
  'Select Pet',
  'Select Weight',
  'Check-In Date and Time',
  'Remarks for Service Provider',
  'Select Pickup Option',
  'Summary'
];

const schema = yup.object().shape({
  pet_id: yup.string().required(),
  weight: yup.string().required(),
  checkin: yup.date().required(),
  checkout: yup.date().required(),
  remark: yup.string(),
  pickup: yup.boolean().required(),
  pickup_location: yup.string().when('pickup', {
    is: true,
    then: yup.string().required('Pickup location is required'),
  }),
});

export default function GroomingModal({ open, handleClose, item, pet }) {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [load, setLoad] = React.useState(false);
  const [pickupNeeded, setPickupNeeded] = React.useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    getValues,
    watch,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const pickupWatch = watch("pickup");

  React.useEffect(() => {
    setPickupNeeded(pickupWatch);
  }, [pickupWatch]);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const onSubmit = async (data) => {
    try {
      data.checkin = dayjs(data.checkin).format('YYYY-MM-DD HH:mm');
      data.checkout = dayjs(data.checkout).format('YYYY-MM-DD HH:mm');
      data.service_id = item.id;
      setLoad(true);
      let res = await setAppointment(data);
      if (res) toast.success('Scheduled successfully');
      handleClose();
    } catch (error) {
      setLoad(false);
    } finally {
      setLoad(false);
    }
  };

  const StepContentComponent = () => {
    switch (activeStep) {
      case 0:
        return (
          <FormControl fullWidth>
            <InputLabel>My Pet <span style={{ color: 'red' }}>*</span></InputLabel>
            <Select {...register("pet_id")} label="Pet">
              {pet.map((item) => (
                <MenuItem key={item.id} value={item.id}>{item.type}</MenuItem>
              ))}
            </Select>
            <FormHelperText sx={{ color: 'red' }}>{errors.pet_id?.message}</FormHelperText>
          </FormControl>
        );
      case 1:
        return (
          <TextField
            {...register("weight")}
            label="Weight"
            fullWidth
            variant="outlined"
            error={!!errors.weight}
            helperText={errors.weight?.message}
          />
        );
      case 2:
        return (
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Box sx={{ mb: 2 }}>
              <DatePicker
                label="Check-In Date"
                value={getValues("checkin")}
                onChange={(value) => setValue("checkin", value)}
                renderInput={(params) => <TextField {...params} fullWidth error={!!errors.checkin} helperText={errors.checkin?.message} />}
              />
              <TimePicker
                label="Check-In Time"
                value={getValues("checkin")}
                onChange={(value) => setValue("checkin", value)}
                renderInput={(params) => <TextField {...params} fullWidth error={!!errors.checkin} helperText={errors.checkin?.message} />}
              />
            </Box>
            <Box sx={{ mb: 2 }}>
              <DatePicker
                label="Check-Out Date"
                value={getValues("checkout")}
                onChange={(value) => setValue("checkout", value)}
                renderInput={(params) => <TextField {...params} fullWidth error={!!errors.checkout} helperText={errors.checkout?.message} />}
              />
              <TimePicker
                label="Check-Out Time"
                value={getValues("checkout")}
                onChange={(value) => setValue("checkout", value)}
                renderInput={(params) => <TextField {...params} fullWidth error={!!errors.checkout} helperText={errors.checkout?.message} />}
              />
            </Box>
          </LocalizationProvider>
        );
      case 3:
        return (
          <TextField
            {...register("remark")}
            label="Remark"
            fullWidth
            variant="outlined"
            multiline
            rows={4}
            error={!!errors.remark}
            helperText={errors.remark?.message}
          />
        );
      case 4:
        return (
          <Box sx={{width:'100%'}}>
            <FormControl fullWidth sx={{ mb: 2 }}>
              <InputLabel>Pickup Needed</InputLabel>
              <Select {...register("pickup")} label="Pickup Needed">
                <MenuItem value={true}>Yes</MenuItem>
                <MenuItem value={false}>No</MenuItem>
              </Select>
              <FormHelperText sx={{ color: 'red' }}>{errors.pickup?.message}</FormHelperText>
            </FormControl>
            {pickupNeeded && (
              <TextField
                {...register("pickup_location")}
                label="Pickup Location"
                fullWidth
                variant="outlined"
                error={!!errors.pickup_location}
                helperText={errors.pickup_location?.message}
              />
            )}
          </Box>
        );
      case 5:
        const formData = getValues();
        return (
          <Box>
            <Typography>Pet: {formData.pet_id}</Typography>
            <Typography>Weight: {formData.weight}</Typography>
            <Typography>Check-In: {dayjs(formData.checkin).format('YYYY-MM-DD HH:mm')}</Typography>
            <Typography>Check-Out: {dayjs(formData.checkout).format('YYYY-MM-DD HH:mm')}</Typography>
            <Typography>Remark: {formData.remark}</Typography>
            <Typography>Pickup Needed: {formData.pickup ? 'Yes' : 'No'}</Typography>
            {formData.pickup && <Typography>Pickup Location: {formData.pickup_location}</Typography>}
          </Box>
        );
      default:
        return 'Unknown step';
    }
  };

  return (
    <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
      <Box className={classes.modal}>
        <Grid container display={"flex"} justifyContent={"right"} alignItems={"right"}>
          <CloseIcon sx={{ mt: '-10px', cursor: 'pointer', mb: '20px' }} onClick={handleClose} />
        </Grid>
        <form onSubmit={handleSubmit(onSubmit)} id="hook-form">
          <Grid container spacing={2}>
            <Grid item xs={12} sm={3} className={classes.stepper}>
              <Stepper activeStep={activeStep} orientation="vertical">
                {steps.map((label, index) => (
                  <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                  </Step>
                ))}
              </Stepper>
            </Grid>
            <Grid item xs={12} sm={9} className={classes.modalContent}>
              <Box sx={{ width: '100%' }} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                {StepContentComponent()}
              </Box>
            </Grid>
          </Grid>
          <Box className={classes.modalFooter}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            {activeStep === steps.length - 1 ? (
              <Button type="submit" variant="contained" disabled={load}>{load ? "Processing" : "Process to Pay"}</Button>
            ) : (
              <Button variant="contained" onClick={handleNext}>Next</Button>
            )}
          </Box>
        </form>
      </Box>
    </Modal>
  );
}
