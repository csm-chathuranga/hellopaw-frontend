// src/Reservation.js
import React from 'react';
import { Card, CardContent, Typography, Box, Button, Divider, Grid, Container, Avatar } from '@mui/material';
import ReviewSection from '../../components/service/ReviewSection';
import ReservationCard from '../../components/service/ReservationCard';
import ScaleIcon from '@mui/icons-material/Scale';
import GroomingModal from '../../components/service/GroomingModal'; // import the new component
import { getServiceById } from "../../services/service";
import { Link,Navigate,json,useParams } from 'react-router-dom'

const Reservation = () => {
  const [open, setOpen] = React.useState(false);
  const [row, setRow] = React.useState({});
  const [service, setService] = React.useState({});
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { id } = useParams();

  const getService = async () => {
    try {
      let res = await getServiceById(id);
      console.log(res);
      setRow(res.body);
      setService(JSON.parse(res.body.other));
    } catch (error) {
      
    }

  }

  React.useEffect(() => {
    getService();
  }, []);

  return (
    <Container>
      <Grid container spacing={2} justifyContent="center">
        {/* Main Content */}
        <Grid item xs={12} md={8}>
          <Card sx={{ p: 2 }}>
            <CardContent>
              {/* Header Section */}
              <Box display="flex" alignItems="center" mb={4} >
                <Avatar src="profile-pic.jpg" alt="Profile Picture" sx={{ width: 56, height: 56, mr: 2 }} />
                <Box>
                  <Typography variant="h6" component="div">
                    {service.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    by {row?.name || 'N/A'} <span style={{ color: '#FFD700' }}>★★★★★</span> <Typography variant="body2" component="span" color="primary">({row?.has_review?.length || 0} Reviews)</Typography>
                  </Typography>
                  <Box mt={1} display="flex" alignItems="center">
                    {/* <Typography variant="body2" color="textSecondary" component="div">
                      📅 0 Completed Bookings
                    </Typography> */}
                  </Box>
                </Box>
              </Box>
              <Box sx={{background:'white',p:2}}>
              <Typography dangerouslySetInnerHTML={{ __html: service?.des }} sx={{color:'green',backgroundColor:'white'}}/>
                
              </Box>

              {/* Review Section */}
              <ReviewSection row={row} updateRecord={getService}/>
            </CardContent>
          </Card>
        </Grid>
        
        {/* Reservation Section */}
        <Grid item xs={12} md={4}>
          <ReservationCard row={row} handleOpen={handleOpen}/>
        </Grid>
      </Grid>
      <GroomingModal open={open} handleClose={handleClose} item={row} id={id}/>
    </Container>
  );
};

export default Reservation;
