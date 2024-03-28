import React, { useEffect, useState } from 'react';
import { Grid, TextField, Checkbox, FormControlLabel, Button, Typography, Accordion, AccordionSummary, AccordionDetails, Box } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import { makeStyles } from '@mui/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { getSession } from "../../services/doctor";
import { useParams } from 'react-router-dom'

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

  const getMyAppointment = async () => {
    let res = await getSession(params.id);
    setRows(res.body);
    setValue('petName',res?.body?.vet?.has_pet?.name || '');
    setValue('petType',res?.body?.vet?.has_pet?.type || '');
    // console.log(res);
  }

  useEffect(() => {
    getMyAppointment();
}, []);


  return (
    <Grid container spacing={2} sx={{p:2}}>
      <Grid item xs={12} md={8}>
        <div >
          <Typography variant="h6">Zoom Video Area (Curved Border)</Typography>
          <Box sx={{width:'100%',height:'400px',backgroundColor:'black'}}></Box>
        </div>
      </Grid>
      <Grid item xs={12} md={4}>
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
