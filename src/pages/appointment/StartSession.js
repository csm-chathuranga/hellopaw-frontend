import React, { useEffect, useState } from 'react';
import { Grid, TextField, Checkbox, FormControlLabel, Button, Typography, Accordion, AccordionSummary, AccordionDetails, Box } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import { makeStyles } from '@mui/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { getSession } from "../../services/doctor";
import { getZoom } from "../../services/zoom";
import { useParams } from 'react-router-dom'
// import ZoomMeeting from "./components/zoom";
import App from "./components/stream";
import InputLabel from '@mui/material/InputLabel';

// import MeetingComponent from "./components/JitsiComponent";

// import { ZoomMtg } from '@zoomus/websdk'

const textProps = {
  id: "outlined-basic",
  variant: "outlined",
  fullWidth: true,
};


const schema = yup.object().shape({
  petName: yup.string().required('Pet name is required'),
  petType: yup.string().required('Pet type is required'),
  Prescription: yup.string().required('Consultation reason is required'),
  zoomLink: yup.string().required('Zoom link is required'),
  isVaccinated: yup.boolean(),
  vaccineName: yup.string().when('isVaccinated', {
    is: true,
    then: yup.string().required('Vaccine name is required'),
    otherwise: yup.string().notRequired()
  }),
  vaccineReason: yup.string().when('isVaccinated', {
    is: true,
    then: yup.string().required('Vaccine reason is required'),
    otherwise: yup.string().notRequired()
  }),
});

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiInputBase-input': {
      borderRadius: 5,
      padding: '10px 15px',
      outline:'none',
      height:'50px',
    }
  },
  zoomArea: {
    border: '1px solid #ccc',
    borderRadius: '10px',
    padding: '20px',
    marginBottom: '20px',
  },
}));

const PetConsultation = () => {
  const classes = useStyles();
  const [rows, setRows] = useState([]);
  const [meetingId, setMeetingId] = useState(null);
  const params = useParams();

  const { handleSubmit, control, formState: { errors },watch,setValue } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = (data) => {
    console.log(data);
    // Handle submission
  };

  const medicalHistory = [
    { date: '2022-01-01', event: 'Vaccination', details: 'Vaccine: XYZ, Reason: Routine vaccination' },
    { date: '2021-12-15', event: 'Checkup', details: 'Details: Routine checkup' },
  ];

  const getMyAppointment = async () => {
    // let res = await getZoom();
    // console.log(res);
    let res = await getSession(params.id);
    setRows(res.body);
    setValue('petName',res?.body?.vet?.has_pet?.name || '');
    setValue('petType',res?.body?.vet?.has_pet?.type || '');
    setMeetingId(res?.body?.vet?.meeting_id || null)
    // console.log(res);
  }

  useEffect(() => {
    getMyAppointment();
}, []);


  return (
      <Grid container  >
      <Grid item xs={12} md={6}>
        <App meetingIdProps={rows}/>
          
      </Grid>
      <Grid item xs={12} md={6} sx={{p:2}}>
        <Grid container >
          <Grid item xs={12} >
            <Typography variant="h6" sx={{pb:2}}>Online Pet Consultation</Typography>
            <form onSubmit={handleSubmit(onSubmit)} className={classes.root}>
            <Grid  xs={12} md={12} sx={{ p: 1 }} >
                <InputLabel>Pet Name</InputLabel>
                <Controller
                    name="petName"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                      <TextField
                        {...field}
                        {...textProps}
                        label="Pet Name"
                        variant="outlined"
                        fullWidth
                        disabled
                        margin="normal"
                        error={!!errors.petName}
                        helperText={errors.petName?.message}
                      />
                    )}
                  />
            </Grid>

            <Grid  xs={12} md={12} sx={{ p: 1 }} >
                <InputLabel>Pet Type</InputLabel>
                <Controller
                name="petType"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                  {...textProps}
                    {...field}
                    label="Pet Type"
                    variant="outlined"
                    fullWidth
                    disabled
                    margin="normal"
                    error={!!errors.petType}
                    helperText={errors.petType?.message}
                  />
                )}
              />
            </Grid>

            <Grid  xs={12} md={12} sx={{ p: 1 }} >
                <InputLabel>Prescription</InputLabel>
                <Controller
                name="Prescription"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Prescription"
                    variant="outlined"
                    fullWidth
                    multiline
                    rows={4}
                    margin="normal"
                    error={!!errors.consultationReason}
                    helperText={errors.consultationReason?.message}
                  />
                )}
              />
            </Grid>

            <Grid  xs={12} md={12} sx={{ p: 1 }} >
              <Controller
                name="isVaccinated"
                control={control}
                defaultValue={false}
                render={({ field }) => (
                  <FormControlLabel
                    control={<Checkbox {...field} />}
                    label="Vaccinated"
                  />
                )}
              />
              </Grid>
              {watch('isVaccinated') && (
                <>
                <Grid  xs={12} md={12} sx={{ p: 1 }} >
                  <Controller
                    name="vaccineName"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                      <TextField
                        {...field}
                        label="Vaccine Name"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        error={!!errors.vaccineName}
                        helperText={errors.vaccineName?.message}
                      />
                    )}
                  />
                  </Grid> 
                  
                  <Grid  xs={12} md={12} sx={{ p: 1 }} >
                  <Controller
                    name="vaccineReason"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                      <TextField
                        {...field}
                        label="Vaccine Reason"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        error={!!errors.vaccineReason}
                        helperText={errors.vaccineReason?.message}
                      />
                    )}
                  />
                 </Grid> 
                 </>
              )}
               <Grid item xs={12} sx={{p:2,pl:0}}>
                   <Button variant="contained" color="success" type="submit" sx={{width:'250px',height:'40px'}}>Complete the Session</Button>
               </Grid>
            </form>
          </Grid>

          <Grid item xs={12}>
            <Typography variant="h6">Pet Medical History</Typography>
            {rows?.vet?.has_pet?.has_history.map((record, index) => (
              <Accordion key={index}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography>{record.type} - {record.vaccinate_date}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>{record.remark}</Typography>
                </AccordionDetails>
              </Accordion>
            ))}
            {rows?.vet?.has_pet?.has_history && rows?.vet?.has_pet?.has_history.length==0 ? <Typography sx={{p:2,pl:0}}>No data found</Typography> : null}
          </Grid>

        </Grid> 
      </Grid>


    </Grid>
  );
};

export default PetConsultation;
