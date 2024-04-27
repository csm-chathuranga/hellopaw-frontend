import React from 'react';
import { Container, Typography, Box } from '@mui/material';

function LegalDocuments() {
    return (
        <Container>
            <Box sx={{ my: 2 }}>
                {/* Refund Policy */}
                <Typography variant="h5" gutterBottom>
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
                    - Gift cards
                    - Downloadable software products
                    - Personalized or custom-made items
                    - Perishable goods
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

                {/* Terms and Conditions */}
                <Typography variant="h5" gutterBottom>
                    Terms and Conditions
                </Typography>
                <Typography variant="body1" paragraph>
                    Welcome to PawsBook.lk. These terms govern your use of our site and product purchases.
                </Typography>
                <Typography variant="body1" paragraph>
                    <strong>Use of the Website</strong><br/>
                    - Must be 18 years or older.<br/>
                    - Maintain confidentiality of your account.<br/>
                    - Provide accurate information.
                </Typography>
                <Typography variant="body1" paragraph>
                    <strong>Product Information and Pricing</strong><br/>
                    - Efforts to ensure accuracy but not guaranteed.<br/>
                    - Prices subject to change.
                </Typography>
                <Typography variant="body1" paragraph>
                    <strong>Orders and Payments</strong><br/>
                    - Right to refuse or cancel orders.<br/>
                    - Secure payment processing.
                </Typography>
                <Typography variant="body1" paragraph>
                    <strong>Shipping and Delivery</strong><br/>
                    - Aim for timely delivery; estimates may vary.
                </Typography>
                <Typography variant="body1" paragraph>
                    <strong>Returns and Refunds</strong><br/>
                    Refer to our Refund Policy for details.
                </Typography>
                <Typography variant="body1" paragraph>
                    <strong>Intellectual Property</strong><br/>
                    Content on PawsBook.lk is protected and cannot be used without permission.
                </Typography>
                <Typography variant="body1" paragraph>
                    <strong>Limitation of Liability</strong><br/>
                    We are not liable for indirect damages related to the use of our website.
                </Typography>
                <Typography variant="body1" paragraph>
                    <strong>Amendments and Termination</strong><br/>
                    Terms may be updated; please review periodically.
                </Typography>
            </Box>
        </Container>
    );
}

export default LegalDocuments;
