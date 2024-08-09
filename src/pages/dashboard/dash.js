// Dashboard.js
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom'; // Import useNavigate and useParams hooks
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import DoctorList from "../DoctorConfirm/DoctorList";
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import PetsIcon from '@mui/icons-material/Pets';
import BeenhereIcon from '@mui/icons-material/Beenhere';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import { getSummary } from "../../services/Dashboard";

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  cursor: 'pointer', // Add cursor pointer for better UX
}));

const DashboardTile = ({ icon: Icon, count, title, onClick }) => (
  <Grid item xs={12} sm={6} md={4} sx={{ p: 1 }}>
    <Item onClick={onClick}>
      <Icon style={{ fontSize: 40, marginBottom: '8px' }} />
      <Typography variant="h5">{count}</Typography>
      <Typography>{title}</Typography>
    </Item>
  </Grid>
);

const Dashboard = () => {
  const [summaryData, setSummaryData] = useState({
    doctor: 0,
    owner: 0,
    today: 0, // Today completed sessions
    total: 0, // Total posts today
  });
  const navigate = useNavigate();
  const { type } = useParams(); // Get the type parameter from the URL

  const getDashcount = async () => {
    try {
      const res = await getSummary();
      if (res && res.body) {
        setSummaryData({
          doctor: res.body.doctor || 0,
          owner: res.body.owner || 0,
          today: res.body.today || 0,
          total: res.body.total || 0,
        });
      }
    } catch (error) {
      console.error('Failed to fetch dashboard summary:', error);
    }
  };

  useEffect(() => {
    getDashcount();
  }, []);

  useEffect(() => {
    // Set default navigation based on URL parameter
    if (type === 'doctor' || type === 'owner') {
      navigate(`/userList/${type}`);
    }
  }, [type, navigate]);

  const handleTileClick = (tileType) => {
    if (tileType === 'doctor' || tileType === 'owner') {
      navigate(`/userList/${tileType}`);
    }
  };

  const tiles = [
    {
      icon: LocalHospitalIcon,
      count: summaryData.doctor,
      title: 'Total Doctor Count',
      onClick: () => handleTileClick('doctor')
    },
    {
      icon: PetsIcon,
      count: summaryData.owner,
      title: 'Pet Owner Count',
      onClick: () => handleTileClick('owner')
    },
    {
      icon: BeenhereIcon,
      count: summaryData.today,
      title: 'Today Completed Sessions'
    },
    {
      icon: DynamicFeedIcon,
      count: summaryData.total,
      title: 'Total Sessions Completed'
    },
  ];

  return (
    <>
      <Typography sx={{ fontSize: '22px', p: 2, pl: 0 }}>Dashboard</Typography>
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
