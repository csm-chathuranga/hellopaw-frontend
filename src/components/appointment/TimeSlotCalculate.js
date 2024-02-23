import React, { useState } from 'react';

const TimeSlotCalculator = () => {
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [timeSlots, setTimeSlots] = useState([]);

  const handleStartTimeChange = (event) => {
    setStartTime(event.target.value);
  };

  const handleEndTimeChange = (event) => {
    setEndTime(event.target.value);
  };

  const generateTimeSlots = () => {
    if (startTime && endTime) {
      const start = new Date(`2000-01-01T${startTime}`);
      const end = new Date(`2000-01-01T${endTime}`);

      const timeSlotsArray = [];
      let currentTime = start;

      while (currentTime < end) {
        const timeString = currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        timeSlotsArray.push(timeString);
        currentTime.setMinutes(currentTime.getMinutes() + 15); // Add 15 minutes
      }

      setTimeSlots(timeSlotsArray);
    } else {
      setTimeSlots([]);
    }
  };

  return (
    <div>
      <label>Start Time:</label>
      <input type="time" value={startTime} onChange={handleStartTimeChange} />
      <br />
      <label>End Time:</label>
      <input type="time" value={endTime} onChange={handleEndTimeChange} />
      <br />
      <button onClick={generateTimeSlots}>Generate Time Slotaas</button>
      <br />
      <div>
        <p>Available Time Slots:</p>
        <ul>
          {timeSlots.map((timeSlot, index) => (
            <li key={index}>{timeSlot}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TimeSlotCalculator;
