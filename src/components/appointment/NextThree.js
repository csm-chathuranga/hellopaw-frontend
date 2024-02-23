import React from 'react';

const getNextThreeDays = () => {
  const today = new Date();
  const days = [];
  let count = 0;
  while (days.length < 3) {
    const nextDay = new Date(today);
    nextDay.setDate(today.getDate() + count);
    if (nextDay.getDay() !== 0 && nextDay.getDay() !== 6) { // Exclude Saturday (0) and Sunday (6)
      days.push(nextDay.toDateString());
    }
    count++;
  }
  return days;
};

const NextThree = () => {
  const nextThreeDays = getNextThreeDays();

  return (
    <div>
      <h2>Next Three Days (Excluding Saturday and Sunday)</h2>
      <ul>
        {nextThreeDays.map((day, index) => (
          <li key={index}>{day}</li>
        ))}
      </ul>
    </div>
  );
};

export default NextThree;
