// File path: src/components/dashboard/Dashboard.js

import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import MyAppoitments from "../../components/dashboard/MyAppoitments";
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import EventAvailableIcon from '@mui/icons-material/EventAvailable'; // Changed icon for Total Appointments
import PendingActionsIcon from '@mui/icons-material/PendingActions'; // Changed icon for Pending Appointments
import { getDoctorDashCount } from "../../services/doctor";

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const DashboardTile = ({ icon: Icon, count, title }) => (
  <Grid item xs={12} sm={6} md={4} sx={{ p: 1 }}>
    <Item>
      <Icon style={{ fontSize: 40, marginBottom: '8px' }} />
      <Typography variant="h5">{count}</Typography>
      <Typography>{title}</Typography>
    </Item>
  </Grid>
);

const DashboardDoctor = () => {
  const [scheduleCounts, setScheduleCounts] = useState({
    today_schedule_count: 0,
    pending_schedule_count: 0,
    total_schedule_count: 0,
  });

  useEffect(() => {
    // Fetch data from the API
    const fetchData = async () => {
      try {
        const response = await getDoctorDashCount();
        setScheduleCounts(response.body);
      } catch (error) {
        console.error('Error fetching schedule data:', error);
      }
    };

    fetchData();
  }, []);

  const tiles = [
    { icon: LocalHospitalIcon, count: scheduleCounts.today_schedule_count, title: 'Appointments Today' },
    { icon: EventAvailableIcon, count: scheduleCounts.total_schedule_count, title: 'Total Appointments' },
    { icon: PendingActionsIcon, count: scheduleCounts.pending_schedule_count, title: 'Pending Appointments' },
  ];

  return (
    <>
      <Typography sx={{ fontSize: '22px', p: 2, pl: 0 }}>My Summary</Typography>
      <Grid container spacing={3}>
        {tiles.map((tile, index) => (
          <DashboardTile key={index} {...tile} />
        ))}
      </Grid>
      <MyAppoitments />
    </>
  );
};

export default DashboardDoctor;
