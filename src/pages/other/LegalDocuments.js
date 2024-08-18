import React from 'react';
import { Container, Typography, Box } from '@mui/material';

function LegalDocuments() {
    return (
        <Container>
            <Box sx={{ my: 2 }}>
                {/* Privacy Policy */}
                <Typography variant="h5" gutterBottom>
                    Privacy Policy
                </Typography>
                <Typography variant="body1" paragraph>
                    At PawsBook.lk, protecting the privacy and security of our customers’ personal information is paramount. This policy details how we collect, use, and safeguard your information on our website.
                </Typography>
                <Typography variant="body1" paragraph>
                    <strong>Information We Collect</strong><br/>
                    - Personal identification information (name, email, phone number) during registration or checkout.<br/>
                    - Payment and billing information through third-party processors.<br/>
                    - Browsing information (IP address, browser type) via cookies.
                </Typography>
                <Typography variant="body1" paragraph>
                    <strong>Use of Information</strong><br/>
                    - To process and fulfill orders.<br/>
                    - To communicate about purchases and provide support.<br/>
                    - To personalize and improve your shopping experience.<br/>
                    - For fraud prevention.
                </Typography>
                <Typography variant="body1" paragraph>
                    <strong>Information Sharing</strong><br/>
                    Your information is not sold but may be shared with trusted providers under strict confidentiality agreements, or as required by law.
                </Typography>
                <Typography variant="body1" paragraph>
                    <strong>Data Security</strong><br/>
                    We employ industry-standard security measures, but please note that no method is 100% secure.
                </Typography>
                <Typography variant="body1" paragraph>
                    <strong>Cookies and Tracking</strong><br/>
                    Cookies enhance your browsing experience. You can disable them, but it may affect website functionality.
                </Typography>
                <Typography variant="body1" paragraph>
                    <strong>Changes to the Privacy Policy</strong><br/>
                    We may update this policy and will post changes on this page.
                </Typography>

            </Box>
        </Container>
    );
}

export default LegalDocuments;
