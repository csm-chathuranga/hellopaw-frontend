import React from 'react';
import { Container, Typography, Box } from '@mui/material';

function Refund() {
    return (
        <Container>
            <Box sx={{ my: 2 }}>
   
                {/* Refund Policy */}
                <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
                    Refund Policy
                </Typography>
                <Typography variant="body1" paragraph>
                    Thank you for shopping at PawsBook.lk. We value your satisfaction and are dedicated to providing you with the best online shopping experience for your pet needs. If you are not completely satisfied with your purchase, here’s how we can assist:
                </Typography>
                <Typography variant="body1" paragraph>
                    <strong>Returns</strong><br/>
                    You can return products within 30 days from the date of purchase. To qualify for a return, items must be unused and in the same condition that you received them, including original packaging.
                </Typography>
                <Typography variant="body1" paragraph>
                    <strong>Refunds</strong><br/>
                    Upon receiving your return and inspecting the item, we will inform you about the status of your refund. Approved returns will be refunded to your original payment method, excluding any shipping costs from the initial purchase.
                </Typography>
                <Typography variant="body1" paragraph>
                    <strong>Exchanges</strong><br/>
                    For exchanges (different size, color, or style), contact our support team within 30 days of receiving your order for instructions.
                </Typography>
                <Typography variant="body1" paragraph>
                    <strong>Non-Returnable Items</strong><br/>
                    Some items can't be returned or refunded:
                    <ul>
                        <li>Gift cards</li>
                        <li>Downloadable software products</li>
                        <li>Personalized or custom-made items</li>
                        <li>Perishable goods</li>
                    </ul>
                </Typography>
                <Typography variant="body1" paragraph>
                    <strong>Damaged or Defective Items</strong><br/>
                    If an item is damaged or defective upon arrival, please contact us immediately. We will arrange a replacement or refund, based on your preference and product availability.
                </Typography>
                <Typography variant="body1" paragraph>
                    <strong>Return Shipping</strong><br/>
                    You are responsible for return shipping costs unless the return is due to our error (e.g., incorrect or defective item). We will provide a prepaid shipping label in these cases.
                </Typography>
                <Typography variant="body1" paragraph>
                    <strong>Processing Time</strong><br/>
                    Refunds and exchanges will be processed within 7 business days after receiving your returned item. Refunds may take additional time to appear in your account, depending on your payment provider.
                </Typography>

            </Box>
        </Container>
    );
}

export default Refund;
