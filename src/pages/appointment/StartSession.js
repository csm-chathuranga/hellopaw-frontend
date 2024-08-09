import React, { useEffect, useState } from 'react';
import { Grid, TextField, Checkbox, FormControlLabel, Button, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import { makeStyles } from '@mui/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { getSession } from "../../services/doctor";
import { completeSession } from "../../services/service";
import { useParams } from 'react-router-dom';
import App from "./components/stream";
import { useTheme } from "@mui/material/styles";
import { logged, user } from "../../../src/store";
import { useAtom } from "jotai";
import { useNavigate } from "react-router-dom";

const schema = yup.object().shape({
  Prescription: yup.string().required('Consultation reason is required'),
  isVaccinated: yup.boolean(),
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
  const theme = useTheme();
  const [localUser] = useAtom(user);
  const [rows, setRows] = useState([]);
  const [meetingId, setMeetingId] = useState(null);
  const navigate = useNavigate();
  const [load, setLoad] = useState(false);

  // const [isDoctor, setIsDoctor] = useState(true); // State to check if the user is a doctor
  const params = useParams();

  const { handleSubmit, control, formState: { errors }, setValue } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit =async (data) => {
    try {
      setLoad(true);
      data.id=rows.vet.id;
      let res = await completeSession(data);
      setMeetingId(null);
      navigate('/DoctorAppointment')
      console.log(res);
    } catch (error) {
      setLoad(false);
    }finally{
      setLoad(false);
    }
  };

  const getMyAppointment = async () => {
    try {
      let res = await getSession(params.id);
      setRows(res.body);
      setMeetingId(res?.body?.vet?.meeting_id || null);
    } catch (error) {
      console.error("Failed to fetch appointment data:", error);
    }
  };

  useEffect(() => {
    getMyAppointment();
    return () => {
      setMeetingId(null);
    };
  }, []);

  return (
    <Grid container>
      <Grid item xs={12} md={6}>
        <App meetingIdProps={rows} meetingId={meetingId} setMeetingId={setMeetingId}/>
      </Grid>
      <Grid item xs={12} md={6} sx={{ p: 2 }}>
        <Grid container>
          <Grid item xs={12}>
            <Typography variant="h6" sx={{ pb: 2 }}>Online Pet Consultation</Typography>
            <form onSubmit={handleSubmit(onSubmit)} className={classes.root}>
              <Grid xs={6} md={6} sx={{ p: 1, pb:2 }}>
                <label sx={{ color: theme.palette.base }}>Pet Name</label>
                <Typography variant="body1">{rows?.vet?.has_pet?.name || 'N/A'}</Typography>
              </Grid>

              <Grid xs={6} md={6} sx={{ p: 1, pb:2 }}>
                <label sx={{ color: theme.palette.base }}>Pet Type</label>
                <Typography variant="body1">{rows?.vet?.has_pet?.type || 'N/A'}</Typography>
              </Grid>

              {localUser?.type == 'doctor' && (
                <>
              <Grid xs={12} md={12} sx={{ p: 1, pb:2 }}>
                <label sx={{ color: theme.palette.base }}>Prescription and medical</label>
                <Controller
                  name="Prescription"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <TextField
                      {...field}
                      variant="outlined"
                      placeholder='Prescription and medical'
                      fullWidth
                      multiline
                      rows={4}
                      margin="normal"
                      error={!!errors.Prescription}
                      helperText={errors.Prescription?.message}
                      // disabled={!isDoctor} // Disable if not a doctor
                    />
                  )}
                />
              </Grid>

              <Grid item xs={12} sx={{ p: 2, pl: 0 }}>
                <Button
                  variant="contained"
                  color="success"
                  type="submit"
                  sx={{ width: '250px', height: '40px' }}
                  // disabled={!isDoctor} // Disable if not a doctor
                >
                  Complete the Session
                </Button>
              </Grid>
              </>
)}
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
            {rows?.vet?.has_pet?.has_history && rows?.vet?.has_pet?.has_history.length === 0 ? <Typography sx={{ p: 2, pl: 0 }}>No data found</Typography> : null}
          </Grid>

        </Grid>
      </Grid>
    </Grid>
  );
};

export default PetConsultation;
