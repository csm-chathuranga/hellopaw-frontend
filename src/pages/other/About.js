// src/components/AboutUs.js

import React from 'react';
import { Container, Typography, Grid, Card, CardContent } from '@mui/material';
import PetsIcon from '@mui/icons-material/Pets';
import HealingIcon from '@mui/icons-material/Healing';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import SchoolIcon from '@mui/icons-material/School';

const AboutUs = () => {
  return (
    <Container sx={{ padding: '4rem 0' }}>
      <Typography variant="h1" align="center" gutterBottom>
        Our Commitment to Pet Well-Being
      </Typography>
      <Typography variant="body1" align="center" paragraph>
        We are driven by a genuine passion for pets and a commitment to their well-being. 
        We believe that pets are not just animals but cherished family members. This belief 
        is at the core of everything we do.
      </Typography>
      <Typography variant="h5" align="center" gutterBottom sx={{ marginTop: '2rem' }}>
        Key Elements of Our Commitment
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} md={3}>
          <Card sx={{ height: '100%' }}>
            <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%' }}>
              <PetsIcon color="primary" sx={{ fontSize: 50 }} />
              <Typography variant="h6" gutterBottom sx={{textAlign:'center'}}>
                Compassionate Care
              </Typography>
              <Typography variant="body2" sx={{ textAlign:'center' }}>
                Our team of experienced veterinarians and service providers are known for their 
                empathy and compassionate approach towards pet care. We treat every pet with 
                the love and care they deserve.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={3}>
          <Card sx={{ height: '100%' }}>
            <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%' }}>
              <HealingIcon color="secondary" sx={{ fontSize: 50 }} />
              <Typography variant="h6" gutterBottom sx={{textAlign:'center'}}>
                Comprehensive Services
              </Typography>
              <Typography variant="body2" sx={{ textAlign:'center' }}>
                We offer a wide range of services, including routine check-ups, vaccinations, 
                surgical procedures, dental care, grooming, boarding, sitting, and much more. 
                Our goal is to be an all-in-one pet care solution for all your pet's needs.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={3}>
          <Card sx={{ height: '100%' }}>
            <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%' }}>
              <LocalHospitalIcon color="error" sx={{ fontSize: 50 }} />
              <Typography variant="h6" gutterBottom sx={{textAlign:'center'}}>
                Advanced Facilities
              </Typography>
              <Typography variant="body2" sx={{ textAlign:'center' }}>
                Our service providers are equipped with state-of-the-art facilities and the latest 
                in medical technology, ensuring that we can provide the highest quality care.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={3}>
          <Card sx={{ height: '100%' }}>
            <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%' }}>
              <SchoolIcon color="success" sx={{ fontSize: 50 }} />
              <Typography variant="h6" gutterBottom sx={{textAlign:'center'}}>
                Education and Awareness
              </Typography>
              <Typography variant="body2" sx={{ textAlign:'center' }}>
                We believe that informed pet owners make the best decisions for their pets. 
                As such, we are committed to educating our clients about pet health and 
                providing resources to support their pets' well-being.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AboutUs;
