import React, { useState } from 'react';
import axios from 'axios';

function ZoomMeeting() {
  const [meetingLink, setMeetingLink] = useState('');

  const createMeeting = async () => {
    try {
      const response = await axios.post(
        'https://api.zoom.us/v2/users/me/meetings',
        {
          topic: 'Meeting Title',
          type: 2, // Scheduled Meeting
          start_time: '2024-03-27T12:00:00',
          duration: 60,
        },
        {
          headers: {
            Authorization: 'Bearer YOUR_JWT_TOKEN',
            'Content-Type': 'application/json',
          },
        }
      );
      setMeetingLink(response.data.join_url);
    } catch (error) {
      console.error('Error creating meeting:', error);
    }
  };

  return (
    <div>
      <button onClick={createMeeting}>Create Meeting</button>
      {meetingLink && (
        <div>
          <p>Meeting Link:</p>
          <a href={meetingLink} target="_blank" rel="noopener noreferrer">
            {meetingLink}
          </a>
        </div>
      )}
    </div>
  );
}

export default ZoomMeeting;