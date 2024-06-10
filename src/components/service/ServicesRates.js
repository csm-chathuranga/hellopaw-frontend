// src/ServicesRates.js
import React from 'react';
import { Card, CardContent, Typography, Box, Button, Divider } from '@mui/material';

const ServicesRates = () => {
  return (
    <Card sx={{ maxWidth: 345, margin: 'auto', mt: 4, p: 2 }}>
      <CardContent>
        <Typography variant="h6" component="div" align="center">
          Services & Rates
        </Typography>
        <Box mt={2}>
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Box display="flex" alignItems="center">
              <Typography variant="body2" component="span" sx={{ mr: 1 }}>
                👥
              </Typography>
              <Typography variant="body2" component="span">
                Talk & Greet
              </Typography>
            </Box>
            <Typography variant="body2" component="span">
              Free
            </Typography>
          </Box>
          <Typography variant="body2" color="textSecondary" component="p" mt={1}>
            Get to know each other first.
          </Typography>
          <Button variant="contained" color="primary" fullWidth sx={{ mt: 1 }}>
            Contact
          </Button>
          <Divider sx={{ my: 2 }} />
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Box display="flex" alignItems="center">
              <Typography variant="body2" component="span" sx={{ mr: 1 }}>
                🏠
              </Typography>
              <Typography variant="body2" component="span">
                Pet Boarding
              </Typography>
            </Box>
            <Typography variant="body2" component="span">
              From SGD 40 /night
            </Typography>
          </Box>
          <Button variant="outlined" color="primary" fullWidth sx={{ mt: 1 }}>
            Make Reservation
          </Button>
        </Box>
        <Divider sx={{ my: 2 }} />
        <Typography variant="body2" color="textSecondary" component="p" align="center">
          Book via Petbacker to enjoy <a href="#" style={{ textDecoration: 'none' }}>Premium Insurance</a>, 24/7 support, booking guarantee, safe cashless payments, photo updates and more!
        </Typography>
        <Box display="flex" justifyContent="center" mt={2}>
          <img src="visa.png" alt="Visa" width={50} style={{ marginRight: 10 }} />
          <img src="mastercard.png" alt="MasterCard" width={50} style={{ marginRight: 10 }} />
          <img src="paypal.png" alt="PayPal" width={50} style={{ marginRight: 10 }} />
          <img src="amex.png" alt="Amex" width={50} />
        </Box>
      </CardContent>
    </Card>
  );
};

export default ServicesRates;
