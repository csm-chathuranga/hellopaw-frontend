import React, { useState } from 'react';
import axios from 'axios';

const MyAppointment = () => {
    const [meetingLink, setMeetingLink] = useState('');

    const createZoomMeeting = async () => {
        try {
            const response = await axios.post(
                'https://api.zoom.us/v2/users/me/meetings',
                {
                    topic: 'Your Meeting Topic',
                    type: 2 // 2 for scheduled meetings
                    // You can add more options as needed, like start_time, duration, etc.
                },
                {
                    headers: {
                        'Authorization': 'Bearer YOUR_ZOOM_ACCESS_TOKEN',
                        'Content-Type': 'application/json'
                    }
                }
            );
            
            // Extract meeting link from the response
            const meetingLink = response.data.join_url;
            setMeetingLink(meetingLink);
        } catch (error) {
            console.error('Error creating Zoom meeting:', error);
        }
    };

    return (
        <div>
            <button onClick={createZoomMeeting}>Create Zoom Meeting</button>
            {meetingLink && (
                <div>
                    <p>Meeting Link:</p>
                    <a href={meetingLink} target="_blank" rel="noopener noreferrer">{meetingLink}</a>
                </div>
            )}
        </div>
    );
};

export default MyAppointment;
