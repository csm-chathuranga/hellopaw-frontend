// Dashboard.js
import React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import DoctorList from "../DoctorConfirm/DoctorList";
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import PetsIcon from '@mui/icons-material/Pets';
import BeenhereIcon from '@mui/icons-material/Beenhere';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const DashboardTile = ({ icon: Icon, count, title }) => (
  <Grid item xs={12} sm={6} md={4} sx={{p:1}}>
    <Item>
      <Icon style={{ fontSize: 40, marginBottom: '8px' }} />
      <Typography variant="h5">{count}</Typography>
      <Typography>{title}</Typography>
    </Item>
  </Grid>
);

const Dashboard = () => {
  const tiles = [
    { icon: LocalHospitalIcon, count: 5, title: 'Total Doctor Count' },
    { icon: PetsIcon, count: +6, title: 'Pet Owner Count' },
    { icon: BeenhereIcon, count: 5, title: 'Today Completed sessions' },
    { icon: DynamicFeedIcon, count: '100', title: 'Today posts' },
  ];

  return (
    <>
    <Typography sx={{fontSize:'22px',p:2,pl:0}}>Dashboard</Typography>
    <Grid container spacing={3}>
      {tiles.map((tile, index) => (
        <DashboardTile key={index} {...tile} />
      ))}
    </Grid>
    <DoctorList />
    </>
  );
};

export default Dashboard;
