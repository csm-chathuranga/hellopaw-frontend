import React from 'react';
import {
  Box,
  Button,
  Grid,
  Modal,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
  TextField,
} from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker, TimePicker } from '@mui/x-date-pickers';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import dayjs from "dayjs";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { setAppointment } from "../../services/service";
import { getMyPets } from "../../services/petService";
import { toast } from 'react-toastify';
import { styled } from '@mui/material/styles';

const ModalContent = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  height: 'calc(100% - 100px)',
}));

const ModalFooter = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'flex-end',
  gap: '10px',
  marginTop: '20px',
}));

const CustomModal = styled(Box)(({ theme }) => ({
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
}));

// Define grooming types
const groomingTypes = [
  'Full Groom',
  'Bath and Brush',
  'Nail Trim',
  'Ear Cleaning',
  'Teeth Brushing'
];

const schema = yup.object().shape({
  pet_id: yup.string().required('Pet selection is required'),
  weight: yup.string().required('Weight is required'),
  checkin: yup.date().required('Check-in date is required'),
  checkout: yup.date().required('Check-out date is required'),
  remark: yup.string(),
  pickup: yup.boolean().required('Pickup option is required'),
  pickup_location: yup
    .string()
    .when('pickup', {
      is: true,
      then: (schema) => schema.required('Pickup location is required'),
      otherwise: (schema) => schema.notRequired(),
    }),
  grooming_type: yup.string().when('itemType', {
    is: 'grooming',
    then: (schema) => schema.required('Grooming type is required'),
    otherwise: (schema) => schema.notRequired(),
  }),
});

export default function GroomingModal({ open, handleClose, item, id }) {
  const [load, setLoad] = React.useState(false);
  const [pickupNeeded, setPickupNeeded] = React.useState(false);
  const [pet, setPet] = React.useState([]);

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

  const onSubmit = async (data) => {
    try {
      data.checkin = dayjs(data.checkin).format('YYYY-MM-DD HH:mm');
      data.checkout = dayjs(data.checkout).format('YYYY-MM-DD HH:mm');
      data.service_id = item.id;
      data.itemType = item.type;
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

  const getService = async () => {
    try {
      let res = await getMyPets();
      setPet(res.body);
    } catch (error) {
      toast.error('My pet request failed');
    }
  };

  React.useEffect(() => {
    getService();
  }, []);

  return (
    <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
      <CustomModal>
        <form onSubmit={handleSubmit(onSubmit)} id="hook-form">
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <ModalContent sx={{ width: '100%' }} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                <FormControl fullWidth>
                  <InputLabel>My Pet <span style={{ color: 'red' }}>*</span></InputLabel>
                  <Select {...register("pet_id")} label="Pet">
                    {pet.map((item) => (
                      <MenuItem key={item.id} value={item.id}>{item.type}</MenuItem>
                    ))}
                  </Select>
                  <FormHelperText sx={{ color: 'red' }}>{errors.pet_id?.message}</FormHelperText>
                </FormControl>

                {item.type === 'grooming' && (
                  <FormControl fullWidth sx={{ mt: 2 }}>
                    <InputLabel>Grooming Type <span style={{ color: 'red' }}>*</span></InputLabel>
                    <Select {...register("grooming_type")} label="Grooming Type">
                      {groomingTypes.map((type) => (
                        <MenuItem key={type} value={type}>{type}</MenuItem>
                      ))}
                    </Select>
                    <FormHelperText sx={{ color: 'red' }}>{errors.grooming_type?.message}</FormHelperText>
                  </FormControl>
                )}

                <FormControl fullWidth sx={{ mt: 2 }}>
                  <InputLabel>Weight</InputLabel>
                  <Select {...register("weight")} label="Weight">
                    <MenuItem value="1-5kg">1-5kg</MenuItem>
                    <MenuItem value="5-10kg">5-10kg</MenuItem>
                    <MenuItem value="10-20kg">10-20kg</MenuItem>
                    <MenuItem value="20-40kg">20-40kg</MenuItem>
                    <MenuItem value="40+kg">40+kg</MenuItem>
                  </Select>
                  <FormHelperText sx={{ color: 'red' }}>{errors.weight?.message}</FormHelperText>
                </FormControl>

                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <Box sx={{ mt: 2 }}>
                    <InputLabel>check In</InputLabel>
                    <DatePicker
                      // label="Check-In Date"
                      value={getValues("checkin")}
                      onChange={(value) => setValue("checkin", value)}
                      renderInput={(params) => <TextField {...params} fullWidth error={!!errors.checkin} helperText={errors.checkin?.message} />}
                    />
                    <TimePicker
                      // label="Check-In Time"
                      value={getValues("checkin")}
                      onChange={(value) => setValue("checkin", value)}
                      renderInput={(params) => <TextField {...params} fullWidth error={!!errors.checkin} helperText={errors.checkin?.message} />}
                    />
                  </Box>
                  <Box sx={{ mt: 2 }}>
                  <InputLabel>check Out</InputLabel>

                    <DatePicker
                      // label="Check-Out Date"
                      value={getValues("checkout")}
                      onChange={(value) => setValue("checkout", value)}
                      renderInput={(params) => <TextField {...params} fullWidth error={!!errors.checkout} helperText={errors.checkout?.message} />}
                    />
                    <TimePicker
                      // label="Check-Out Time"
                      value={getValues("checkout")}
                      onChange={(value) => setValue("checkout", value)}
                      renderInput={(params) => <TextField {...params} fullWidth error={!!errors.checkout} helperText={errors.checkout?.message} />}
                    />
                  </Box>
                </LocalizationProvider>

                <TextField
                  {...register("remark")}
                  label="Remark"
                  fullWidth
                  variant="outlined"
                  multiline
                  rows={4}
                  error={!!errors.remark}
                  helperText={errors.remark?.message}
                  sx={{ mt: 2 }}
                />

                <FormControl fullWidth sx={{ mt: 2 }}>
                  <InputLabel>Pickup Needed</InputLabel>
                  <Select {...register("pickup")}>
                    <MenuItem value={true}>Yes</MenuItem>
                    <MenuItem value={false}>No</MenuItem>
                  </Select>
                  <FormHelperText sx={{ color: 'red' }}>{errors.pickup?.message}</FormHelperText>
                </FormControl>

                {pickupNeeded && (
                  <>
                  <InputLabel>Pickup Location</InputLabel>
                  
                  <TextField
                    {...register("pickup_location")}
                    // label="Pickup Location"
                    fullWidth
                    variant="outlined"
                    error={!!errors.pickup_location}
                    helperText={errors.pickup_location?.message}
                    sx={{ mt: 2 }}
                  />
                  </>

                )}
              </ModalContent>
            </Grid>
          </Grid>
          <ModalFooter>
            <Button 
              variant="text" 
              color="secondary" 
              onClick={handleClose}
            >
              Cancel
            </Button>
            <Button 
              type="submit" 
              variant="contained" 
              color="primary" 
              disabled={load}
            >
              {load ? "Processing" : "Process to Pay"}
            </Button>
          </ModalFooter>
        </form>
      </CustomModal>
    </Modal>
  );
}
