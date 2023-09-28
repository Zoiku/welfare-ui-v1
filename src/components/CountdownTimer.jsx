import { useState, useEffect } from "react";

function CountdownTimer({ deadline }) {
  const calculateTimeRemaining = (deadline) => {
    const currentTime = new Date();
    const timeDiff = deadline - currentTime;

    if (timeDiff <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    const seconds = Math.floor((timeDiff / 1000) % 60);
    const minutes = Math.floor((timeDiff / 1000 / 60) % 60);
    const hours = Math.floor((timeDiff / (1000 * 60 * 60)) % 24);
    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  };

  const [timeRemaining, setTimeRemaining] = useState(
    calculateTimeRemaining(deadline)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining(deadline));
    }, 1000);

    return () => clearInterval(interval);
  }, [deadline]);

  return timeRemaining.days;
}

export default CountdownTimer;
