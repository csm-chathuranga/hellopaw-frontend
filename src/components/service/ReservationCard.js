// src/components/service/ReservationCard.js
import React, { useState } from 'react';
import { Card, CardContent, Typography, Box, Button, Divider } from '@mui/material';
import ImageUpload from "./ImageUpload";

const ReservationCard = ({row,handleOpen}) => {
  let jsonData=row?.other ? JSON.parse(row?.other) : {};
  const [showContact, setShowContact] = useState(false);

  const handleContactClick = () => {
    setShowContact(true);
  };
  return (
    <Box sx={{ position: 'sticky', top: '20px' }}>
      <Card sx={{ p: 2, border: '1px solid rgba(0, 0, 0, 0.1)' }}>
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
            {showContact ? (
              <>
                <Typography variant="body2" color="primary" component="p" mt={1}>
                  📞 Contact Number: {row?.phone_number}
                </Typography>
                <Button
                  variant="contained"
                  color="secondary"
                  fullWidth
                  sx={{ mt: 1 }}
                  href={'tel:'+row?.phone_number }
                >
                  Call Now
                </Button>
              </>
            ) : (
              <Button variant="contained" color="primary" fullWidth sx={{ mt: 1 }} onClick={handleContactClick}>
                Contact Now
              </Button>
            )}
            <Divider sx={{ my: 2 }} />
            <Box display="flex" justifyContent="space-between" alignItems="center">
              <Box display="flex" alignItems="center">
                <Typography variant="body2" component="span" sx={{ mr: 1 }}>
                  🏠
                </Typography>
                <Typography variant="body2" component="span">
                  {row?.type || 'N/A'}
                </Typography>
              </Box>
              <Typography variant="body2" component="span">
              LKR {jsonData?.amount || 0}  / Per day
              </Typography>
            </Box>
            <Button variant="outlined" color="primary" fullWidth sx={{ mt: 1 }} onClick={handleOpen}>
              Make Reservation
            </Button>
          </Box>
          <Divider sx={{ my: 2 }} />
          <Typography variant="body2" color="textSecondary" component="p" align="center">
            Make reservation through pawsbook.lk and get more discounts and offers in future,Also we accept,
          </Typography>
          <Box display="flex" justifyContent="center" mt={2}>
            <img src="/visa.jpg" alt="Visa" width={70} height={50} style={{ marginRight: 10 }} />
            <img src="/master.png" alt="MasterCard" width={70} height={50} style={{ marginRight: 10 }} />
            {/* <img src="paypal.png" alt="PayPal" width={50} style={{ marginRight: 10 }} />
            <img src="amex.png" alt="Amex" width={50} /> */}
          </Box>
        </CardContent>
      </Card>
      {/* <ImageUpload/> */}
    </Box>
  );
};

export default ReservationCard;
