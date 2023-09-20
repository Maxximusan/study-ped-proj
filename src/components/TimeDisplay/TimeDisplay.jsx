import { useState } from 'react';

export const TimeDisplay = () => {
  const date = new Date();
  const [currentTime, setCurrentTime] = useState(date.toString());

  const updateTime = () => {
    const date = new Date();
    setCurrentTime(date.toString());
    // console.log(date);
  };

  setInterval(updateTime, 1000);

  function addLeadingZero(value) {
    return String(value).padStart(2, '0');
  }

  const hours = addLeadingZero(date.getHours());
  const minutes = addLeadingZero(date.getMinutes());
  const seconds = addLeadingZero(date.getSeconds());
  const theTimeIsNow = hours + ':' + minutes + ':' + seconds;

  // const dateNow = Date.now();
  // console.log(date);
  // console.log(date.getTime());
  // console.log(dateNow);
  // console.log(date.toString());
  // console.log();

  return (
    <>
      <p>{date.toString()}</p>
      <p> {theTimeIsNow}</p>
      <h2> {currentTime}</h2>
    </>
  );
};
