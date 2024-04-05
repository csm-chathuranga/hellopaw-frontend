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
// import MeetingComponent from "./components/JitsiComponent";

// import { ZoomMtg } from '@zoomus/websdk'


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

//   const getMyAppointment = async () => {
//     let res = await getZoom();
//     console.log(res);
//     // let res = await getSession(params.id);
//     // setRows(res.body);
//     // setValue('petName',res?.body?.vet?.has_pet?.name || '');
//     // setValue('petType',res?.body?.vet?.has_pet?.type || '');
//     // // console.log(res);
//   }

//   useEffect(() => {
//     getMyAppointment();
// }, []);


  return (
      <Grid container spacing={2} sx={{p:2}}>
      <Grid item xs={12} md={6}>
        <div >
          <Typography variant="h6">Video Area </Typography>
        <App/>
          
          {/* <iframe allow="camera; microphone; fullscreen; display-capture; autoplay" src="https://meet.jit.si/meeting_660e6d08c8df8?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL3B2MS5oYXBweWJhdy5jb20iLCJzdWIiOjEyMywibW9kZXJhdG9yIjp0cnVlfQ.cDxEI25z5EawRxgX1_50oCS-C8tC0ebQyjsHmC9GWNM" style={{width:'700px', height:'400px'}}></iframe> */}
          {/* <Meeting/> */}
          {/* <iframe
                    title="Google Meet"
                    src='http://localhost:3001/cdn.html?name=V2luMTAjY2hyb21lLzEyMy4wLjAuMA%3D%3D&mn=86028058330&email=&pwd=ByM663&role=0&lang=en-US&signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzZGtLZXkiOiJwQWdMWURMYVRMbWVkV2Vhc1RaS3ciLCJpYXQiOjE3MTIyMTEwNTgsImV4cCI6MTcxMjIxODI1OCwibW4iOjg2MDI4MDU4MzMwLCJyb2xlIjowfQ.z9FCxVKw70-jqz2msTK7ENArijR7QuxOU3jseqZmboQ&china=0&sdkKey=pAgLYDLaTLmedWeasTZKw'
                    width="800"
                    height="600"
                    frameBorder="0"
                    allowFullScreen
                /> */}
          {/* <Box sx={{width:'100%',height:'400px',backgroundColor:'black'}}></Box> */}
        </div>
      </Grid>
      <Grid item xs={12} md={6}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h6">Online Pet Consultation</Typography>
            <form onSubmit={handleSubmit(onSubmit)} className={classes.root}>
              <Controller
                name="petName"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    {...field}
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
              <Controller
                name="petType"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
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
              <Controller
                name="zoomLink"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Zoom Session Link or ID"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    error={!!errors.zoomLink}
                    helperText={errors.zoomLink?.message}
                  />
                )}
              />
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
              {watch('isVaccinated') && (
                <>
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
                </>
              )}
              <Button variant="contained" color="success" type="submit" sx={{width:'200px',height:'30px'}}>Complete the Session</Button>
            </form>
          </Grid>

        </Grid> 
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
          </Grid>
    </Grid>
  );
};

export default PetConsultation;
