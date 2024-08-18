import React from 'react';
import { Container, Typography, Box } from '@mui/material';

function Terms() {
    return (
        <Container>
            <Box sx={{ my: 2 }}>
              
                {/* Terms and Conditions */}
                <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
                    Terms and Conditions
                </Typography>
                <Typography variant="body1" paragraph>
                    Welcome to PawsBook.lk. These terms govern your use of our site and product purchases.
                </Typography>
                <Typography variant="body1" paragraph>
                    <strong>Use of the Website</strong><br/>
                    - You must be 18 years or older to use this website.<br/>
                    - You are responsible for maintaining the confidentiality of your account information.<br/>
                    - You agree to provide accurate and up-to-date information when using our services.
                </Typography>
                <Typography variant="body1" paragraph>
                    <strong>Product Information and Pricing</strong><br/>
                    While we strive to ensure that product descriptions and prices are accurate, errors may occur. We reserve the right to correct any errors and update product information as necessary.
                </Typography>
                <Typography variant="body1" paragraph>
                    <strong>Orders and Payments</strong><br/>
                    We reserve the right to refuse or cancel any order for reasons including product availability, errors in product or pricing information, or issues identified by our fraud detection department. Payments are processed securely through third-party payment processors.
                </Typography>
                <Typography variant="body1" paragraph>
                    <strong>Shipping and Delivery</strong><br/>
                    We aim to deliver products in a timely manner, but delivery times are estimates and may vary. Please refer to our shipping policy for more information.
                </Typography>
                <Typography variant="body1" paragraph>
                    <strong>Returns and Refunds</strong><br/>
                    Please refer to our Refund Policy for detailed information on returns and refunds.
                </Typography>
                <Typography variant="body1" paragraph>
                    <strong>Intellectual Property</strong><br/>
                    All content on PawsBook.lk, including text, graphics, logos, and images, is the property of PawsBook.lk and is protected by intellectual property laws. Unauthorized use of this content is prohibited.
                </Typography>
                <Typography variant="body1" paragraph>
                    <strong>Limitation of Liability</strong><br/>
                    PawsBook.lk is not liable for any indirect, incidental, or consequential damages that may arise from the use of our website or products. Our liability is limited to the value of the products purchased.
                </Typography>
                <Typography variant="body1" paragraph>
                    <strong>Amendments and Termination</strong><br/>
                    We may update these terms and conditions from time to time. Continued use of our website following any changes constitutes your acceptance of the new terms.
                </Typography>
            </Box>
        </Container>
    );
}

export default Terms;
