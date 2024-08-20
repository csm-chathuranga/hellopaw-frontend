import React from 'react';
import { Container, Typography, TextField, Button, Box } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

function ContactUs() {
    return (
        <Container>
            <Box sx={{ textAlign: 'center', my: 4 }}>
                <Typography variant="h1" gutterBottom>
                    Contact Us
                </Typography>
                <Typography variant="h6" gutterBottom>
                    Send us a Message
                </Typography>
                <Typography variant="body1" color="textSecondary" gutterBottom>
                    <EmailIcon sx={{ verticalAlign: 'middle' }} /> vikumchathuranga007@gmail.com &nbsp;&nbsp; | &nbsp;&nbsp;
                    <PhoneIcon sx={{ verticalAlign: 'middle' }} /> +94 75 900 6804
                </Typography>
                <Typography variant="body1" gutterBottom>
                    Submit the enquiry through the form below:
                </Typography>
            </Box>

            <Box
                component="form"
                sx={{
                    maxWidth: '600px',
                    margin: '0 auto',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 2,
                }}
                noValidate
                autoComplete="off"
            >
                <TextField
                    required
                    id="name"
                    label="Name"
                    variant="outlined"
                    fullWidth
                    sx={{ backgroundColor: '#FFF4E0', borderRadius: 1, borderColor: '#FFB74D' }}
                />
                <TextField
                    required
                    id="email"
                    label="Email Address"
                    variant="outlined"
                    fullWidth
                    sx={{ backgroundColor: '#FFF4E0', borderRadius: 1, borderColor: '#FFB74D' }}
                />
                <TextField
                    id="subject"
                    label="Subject"
                    variant="outlined"
                    fullWidth
                    sx={{ backgroundColor: '#FFF4E0', borderRadius: 1, borderColor: '#FFB74D' }}
                />
                <TextField
                    required
                    id="message"
                    label="Message"
                    variant="outlined"
                    multiline
                    rows={4}
                    fullWidth
                    sx={{ backgroundColor: '#FFF4E0', borderRadius: 1, borderColor: '#FFB74D' }}
                />

                <Button
                    type="button"
                    variant="contained"
                    sx={{
                        backgroundColor: '#FF6F00',
                        color: '#ffffff',
                        alignSelf: 'center',
                        padding: '10px 20px',
                        borderRadius: 2,
                        marginTop: 2,
                        '&:hover': {
                            backgroundColor: '#e65c00',
                        },
                    }}
                >
                    SEND MESSAGE
                </Button>
            </Box>
        </Container>
    );
}

export default ContactUs;
