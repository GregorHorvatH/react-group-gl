import React, { useState, useEffect, useRef } from 'react';

const Timer = () => {
  const [time, setTime] = useState(new Date());
  const timerId = useRef();

  useEffect(() => {
    console.log('new timer');
    timerId.current = setInterval(() => setTime(new Date()), 1000);

    return () => {
      // componentWillUnmount
      console.log('remove timer');
      clearInterval(timerId.current);
    };
  }, []); // compoonentDidMount

  const handleStopTimer = () => {
    console.log('Stop Timer', timerId.current);
    clearInterval(timerId.current);
  };

  return (
    <div className="timer">
      <h1>Timer</h1>
      <h3>{time.toTimeString()}</h3>

      <button onClick={handleStopTimer}>Stop Timer</button>
    </div>
  );
};

export default Timer;
