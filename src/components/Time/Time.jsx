import { format } from 'date-fns';
import { useState } from 'react';

export const Time = () => {
  const data = format(new Date(), "'Today is a' eeee, MMM, do/yyyy , HH:mm:ss");
  const calendarDate = format(new Date(), 'dd/MM/yyyy ');
  const timeDate = format(new Date(), 'HH:mm:ss');
  const weekDate = format(new Date(), 'eeee ');
  const [currentTime, setCurrentTime] = useState(data);
  const updateTime = () => {
    const data = format(
      new Date(),
      "'Today is a' eeee, MMM, do/yyyy , HH:mm:ss"
    );
    setCurrentTime(data);
    // console.log(date);
  };
  setInterval(updateTime, 1000);
  return (
    <>
      <h3>{data}</h3>
      <h4>{calendarDate}</h4>
      <p>{timeDate}</p>
      <p>{weekDate}</p>
      <p>{currentTime}</p>
    </>
  );
};
