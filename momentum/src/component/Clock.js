import React, { useState, useEffect } from "react";
import { ClockStyle } from "style/style";

const Clock = () => {
  const [time, setTime] = useState("00:00");

  const getTime = () => {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    setTime(`${hours}:${minutes}`);
  };

  useEffect(() => {
    setInterval(getTime, 1000);
  }, []);

  return (
    <>
      <ClockStyle>{time}</ClockStyle>
    </>
  );
};

export default Clock;
